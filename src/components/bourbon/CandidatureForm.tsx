"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { candidatureSchema, type CandidatureInput } from "@/lib/validations";
import {
  createCandidature,
  updateCandidature,
  finalizeCandidature,
} from "@/app/actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileUpload } from "./FileUpload";
import { ArrowRight, Check, ChevronDown, X } from "lucide-react";
import { COPY } from "@/constants/fr_strings";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const STEPS = COPY.form.steps.map((label, i) => ({
  number: i + 1,
  label,
}));

const FILIERE_OPTIONS = COPY.filiereOptions;
const DOMAINE_OPTIONS = COPY.domaineOptions;
const LANGUE_OPTIONS = COPY.langueOptions;
const STATUT_OPTIONS = COPY.statutOptions;

const MAX_FILIERES = 3;

const MAX_DIMENSION = 1600;
const JPEG_QUALITY = 0.7;

function compressImage(file: File): Promise<File> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
        const ratio = Math.min(MAX_DIMENSION / width, MAX_DIMENSION / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (blob && blob.size < file.size) {
            resolve(new File([blob], file.name, { type: "image/jpeg" }));
          } else {
            resolve(file);
          }
        },
        "image/jpeg",
        JPEG_QUALITY,
      );
    };
    img.onerror = () => resolve(file);
    img.src = URL.createObjectURL(file);
  });
}

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

function Stepper({ currentStep }: { currentStep: number }) {
  return (
    <div className="relative mb-10">
      {/* Connector lines — positioned behind the circles */}
      <div className="absolute top-5 left-0 right-0 flex px-[calc(100%/6)]">
        {STEPS.slice(0, -1).map((s) => (
          <div
            key={s.number}
            className="flex-1 h-[2px] bg-muted rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-success"
              initial={{ width: "0%" }}
              animate={{ width: currentStep > s.number ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        ))}
      </div>

      {/* Step circles + labels — equal columns */}
      <div className="relative grid grid-cols-3">
        {STEPS.map((s) => {
          const isActive = currentStep === s.number;
          const isCompleted = currentStep > s.number;
          return (
            <div key={s.number} className="flex flex-col items-center gap-2">
              <motion.div
                className={`
                  relative flex items-center justify-center w-10 h-10 rounded-full
                  text-sm font-semibold transition-colors duration-300
                  ${
                    isCompleted
                      ? "bg-success text-white"
                      : isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                  }
                `}
                animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {isCompleted ? (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.path
                      d="M5 13l4 4L19 7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                  </motion.svg>
                ) : (
                  s.number
                )}
              </motion.div>
              <span
                className={`text-xs font-medium whitespace-nowrap transition-colors duration-300 ${
                  isActive
                    ? "text-primary"
                    : isCompleted
                      ? "text-success"
                      : "text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Filière image checkbox card ─── */
function FiliereCheckbox({
  label,
  image,
  color,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  image: string;
  color: string;
  checked: boolean;
  disabled: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled && !checked}
      className={`
        group relative overflow-hidden rounded-[var(--radius-card)] aspect-[4/3]
        transition-all duration-200 outline-none
        ${
          checked
            ? "shadow-md"
            : disabled
              ? "opacity-40 cursor-not-allowed"
              : "ring-1 ring-border hover:ring-2 hover:shadow-sm cursor-pointer"
        }
      `}
      style={checked ? { boxShadow: `0 0 0 3px ${color}` } : {}}
    >
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Check indicator */}
      <div
        className={`
          absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center
          transition-all duration-200
          ${
            checked
              ? "bg-white scale-100"
              : "bg-white/30 backdrop-blur-sm scale-90 group-hover:scale-100"
          }
        `}
        style={checked ? { color } : { color: "white" }}
      >
        {checked && <Check className="size-4" strokeWidth={3} />}
      </div>

      {/* Label */}
      <span className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm leading-tight drop-shadow-md">
        {label}
      </span>
    </button>
  );
}

/* ─── Simple checkbox (for statut & langues) ─── */
function SimpleCheckbox({
  label,
  checked,
  onChange,
  color,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  color?: string;
}) {
  const checkColor = color || "var(--color-primary)";
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-[var(--radius-button)] border
        transition-all duration-200 w-full text-left cursor-pointer
        ${
          checked
            ? "border-transparent bg-primary/5 shadow-sm"
            : "border-border hover:border-primary/30 hover:bg-primary/[0.02]"
        }
      `}
      style={checked ? { borderColor: checkColor } : {}}
    >
      <div
        className={`
          flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center
          transition-all duration-200
          ${checked ? "border-transparent" : "border-muted-foreground/40"}
        `}
        style={checked ? { backgroundColor: checkColor } : {}}
      >
        {checked && <Check className="size-3 text-white" strokeWidth={3} />}
      </div>
      <span
        className={`text-sm font-medium ${checked ? "text-primary" : "text-foreground"}`}
      >
        {label}
      </span>
    </button>
  );
}

/* ─── Phone input with country code selector ─── */
const PHONE_PRESETS = COPY.phonePresets;

function PhoneInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (full: string) => void;
}) {
  // Parse existing value to split prefix / number
  const parseValue = (val: string) => {
    for (const p of PHONE_PRESETS) {
      if (val.startsWith(p.code)) {
        return { prefix: p.code, number: val.slice(p.code.length) };
      }
    }
    // Check for custom prefix like +XXX
    const match = val.match(/^(\+\d{1,4})(.*)/);
    if (match) return { prefix: match[1], number: match[2] };
    return { prefix: "+262", number: val };
  };

  const { prefix: initPrefix, number: initNumber } = parseValue(value);
  const [prefix, setPrefix] = useState(initPrefix);
  const [number, setNumber] = useState(initNumber);
  const [customMode, setCustomMode] = useState(
    !PHONE_PRESETS.some((p) => p.code === initPrefix) && initPrefix !== "+262",
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sync = (p: string, n: string) => {
    onChange(p + n);
  };

  const selectPreset = (code: string) => {
    setPrefix(code);
    setCustomMode(false);
    setDropdownOpen(false);
    sync(code, number);
  };

  const enableCustom = () => {
    setCustomMode(true);
    setPrefix("+");
    setDropdownOpen(false);
    sync("+", number);
  };

  return (
    <div ref={wrapperRef} className="flex gap-0 relative">
      {/* Prefix selector */}
      <div className="relative flex-shrink-0">
        {customMode ? (
          <input
            type="text"
            value={prefix}
            onChange={(e) => {
              let val = e.target.value;
              if (!val.startsWith("+")) val = "+" + val;
              setPrefix(val);
              sync(val, number);
            }}
            className="min-h-[44px] w-[80px] border border-r-0 border-input rounded-l-[var(--radius-button)] px-2 text-sm text-center bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="+XXX"
          />
        ) : (
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="min-h-[44px] w-[80px] border border-r-0 border-input rounded-l-[var(--radius-button)] px-2 text-sm flex items-center justify-center gap-1 bg-muted/50 hover:bg-muted transition-colors"
          >
            <span>{prefix}</span>
            <ChevronDown
              className={`size-3 text-muted-foreground transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="absolute z-50 mt-1 left-0 w-52 bg-background border border-border rounded-[var(--radius-button)] shadow-lg overflow-hidden"
            >
              {PHONE_PRESETS.map((p) => (
                <button
                  key={p.code}
                  type="button"
                  onClick={() => selectPreset(p.code)}
                  className={`w-full flex items-center gap-2 px-3 py-2.5 text-sm text-left transition-colors cursor-pointer ${
                    prefix === p.code && !customMode
                      ? "bg-primary/5 text-primary"
                      : "hover:bg-muted/50"
                  }`}
                >
                  {p.label}
                </button>
              ))}
              <div className="border-t border-border" />
              <button
                type="button"
                onClick={enableCustom}
                className="w-full flex items-center gap-2 px-3 py-2.5 text-sm text-left hover:bg-muted/50 cursor-pointer text-muted-foreground"
              >
                Autre indicatif...
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Number input */}
      <input
        type="tel"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
          sync(prefix, e.target.value);
        }}
        required
        className="min-h-[44px] flex-1 border border-input rounded-r-[var(--radius-button)] px-3 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-primary/20"
        placeholder="6 92 00 00 00"
      />
    </div>
  );
}

/* ─── Multi-select dropdown for domaines ─── */
function DomaineMultiSelect({
  selected,
  onChange,
  maxReached,
}: {
  selected: string[];
  onChange: (values: string[]) => void;
  maxReached: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDomaine = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((v) => v !== value));
    } else if (!maxReached) {
      onChange([...selected, value]);
    }
  };

  const removeDomaine = (value: string) => {
    onChange(selected.filter((v) => v !== value));
  };

  const selectedLabels = selected.map(
    (v) => DOMAINE_OPTIONS.find((o) => o.value === v)?.label ?? v,
  );

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`
          w-full min-h-[44px] flex items-center justify-between px-3 py-2
          border rounded-[var(--radius-button)] bg-transparent text-sm
          transition-colors duration-200
          ${open ? "border-primary ring-[2px] ring-primary/20" : "border-input hover:border-primary/40"}
        `}
      >
        <div className="flex flex-wrap gap-1.5 flex-1">
          {selectedLabels.length === 0 ? (
            <span className="text-muted-foreground">
              {COPY.form.placeholders.domaines}
            </span>
          ) : (
            selectedLabels.map((label, i) => (
              <span
                key={selected[i]}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
              >
                {label}
                <X
                  className="size-3 cursor-pointer hover:text-destructive"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeDomaine(selected[i]);
                  }}
                />
              </span>
            ))
          )}
        </div>
        <ChevronDown
          className={`size-4 ml-2 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full bg-background border border-border rounded-[var(--radius-button)] shadow-lg max-h-48 overflow-y-auto"
          >
            {DOMAINE_OPTIONS.map((opt) => {
              const isSelected = selected.includes(opt.value);
              const isDisabled = maxReached && !isSelected;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => !isDisabled && toggleDomaine(opt.value)}
                  disabled={isDisabled}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 text-sm text-left
                    transition-colors duration-100
                    ${isSelected ? "bg-primary/5 text-primary" : "hover:bg-muted/50"}
                    ${isDisabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}
                  `}
                >
                  <div
                    className={`
                      flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center
                      transition-all duration-150
                      ${isSelected ? "bg-primary border-primary" : "border-muted-foreground/40"}
                    `}
                  >
                    {isSelected && (
                      <Check className="size-2.5 text-white" strokeWidth={3} />
                    )}
                  </div>
                  {opt.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CandidatureForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successLottie, setSuccessLottie] = useState<object | null>(null);
  const [candidatureId, setCandidatureId] = useState<string | null>(null);

  const form = useForm<CandidatureInput>({
    resolver: zodResolver(candidatureSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      telephone: "+262",
      filieres: [],
      statut: "",
      langues: [],
      message: "",
    },
  });

  const goTo = (next: number) => {
    setServerError(null);
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const handleNextStep1 = async () => {
    const valid = await form.trigger(["prenom", "nom", "email", "telephone"]);
    if (!valid) return;

    setIsSubmitting(true);
    setServerError(null);
    try {
      const fd = new FormData();
      fd.append("prenom", form.getValues("prenom").trim());
      fd.append("nom", form.getValues("nom").trim());
      fd.append("email", form.getValues("email").trim());
      fd.append("telephone", form.getValues("telephone").replace(/\s/g, ""));

      const result = await createCandidature(fd);
      if (result.success && result.id) {
        setCandidatureId(result.id);
        goTo(2);
      } else {
        setServerError(result.error ?? COPY.form.defaultError);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep2 = async () => {
    const valid = await form.trigger(["filieres", "statut", "langues"]);
    if (!valid || !candidatureId) return;

    setIsSubmitting(true);
    setServerError(null);
    try {
      const fd = new FormData();
      fd.append("filieres", JSON.stringify(form.getValues("filieres")));
      fd.append("statut", form.getValues("statut"));
      fd.append("langues", JSON.stringify(form.getValues("langues")));
      const message = form.getValues("message");
      if (message) fd.append("message", message);

      const result = await updateCandidature(candidatureId, fd);
      if (result.success) {
        goTo(3);
      } else {
        setServerError(result.error ?? COPY.form.defaultError);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    if (!candidatureId) return;
    if (uploadedFiles.length < 2) {
      setServerError(COPY.fileUpload.minRequired);
      return;
    }

    setIsSubmitting(true);
    setServerError(null);
    try {
      const fd = new FormData();
      for (const rawFile of uploadedFiles) {
        const file = rawFile.type.startsWith("image/")
          ? await compressImage(rawFile)
          : rawFile;
        fd.append("bulletins", file);
      }

      const [result] = await Promise.all([
        finalizeCandidature(candidatureId, fd),
        fetch("/lottie/success.json")
          .then((r) => (r.ok ? r.json() : null))
          .catch(() => null)
          .then((data) => {
            if (data) setSuccessLottie(data);
          }),
      ]);

      if (result.success) {
        setSubmitted(true);
      } else {
        setServerError(result.error ?? COPY.form.defaultError);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Watch filieres for the combined max count
  const watchedFilieres = form.watch("filieres");
  const selectedFiliereValues = watchedFilieres.filter((v) =>
    FILIERE_OPTIONS.some((o) => o.value === v),
  );
  const selectedDomaineValues = watchedFilieres.filter((v) =>
    DOMAINE_OPTIONS.some((o) => o.value === v),
  );
  const totalSelected = watchedFilieres.length;
  const maxReached = totalSelected >= MAX_FILIERES;

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto">
        <Stepper currentStep={4} />
        <motion.div
          className="text-center py-12 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {successLottie ? (
            <Lottie
              animationData={successLottie}
              loop={false}
              className="w-40 h-40 mb-4"
            />
          ) : (
            <motion.div
              className="w-20 h-20 rounded-full bg-success flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M5 13l4 4L19 7"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                />
              </motion.svg>
            </motion.div>
          )}
          <motion.h3
            className="text-2xl font-bold text-success mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {COPY.form.success.title}
          </motion.h3>
          <motion.p
            className="text-text-secondary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {COPY.form.success.message}{" "}
            <strong>{form.getValues("email")}</strong>.
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <Stepper currentStep={step} />

      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="relative"
        >
          <AnimatePresence mode="wait" custom={direction}>
            {/* STEP 1 — Coordonnées */}
            {step === 1 && (
              <motion.div
                key="step-1"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="prenom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{COPY.form.labels.prenom}</FormLabel>
                      <FormControl>
                        <Input {...field} required className="min-h-[44px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{COPY.form.labels.nom}</FormLabel>
                      <FormControl>
                        <Input required {...field} className="min-h-[44px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{COPY.form.labels.email}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          required
                          {...field}
                          className="min-h-[44px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{COPY.form.labels.telephone}</FormLabel>
                      <FormControl>
                        <PhoneInput
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {serverError && (
                  <p className="text-sm text-destructive">{serverError}</p>
                )}

                <Button
                  type="button"
                  onClick={handleNextStep1}
                  disabled={isSubmitting}
                  className="w-full min-h-[44px] mt-6"
                >
                  {isSubmitting ? COPY.form.saving : COPY.form.submitStep1}
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* ── Filières checkboxes ── */}
                <FormField
                  control={form.control}
                  name="filieres"
                  render={({ field }) => {
                    const toggleFiliere = (value: string) => {
                      const current = field.value ?? [];
                      if (current.includes(value)) {
                        field.onChange(current.filter((v) => v !== value));
                      } else if (current.length < MAX_FILIERES) {
                        field.onChange([...current, value]);
                      }
                    };

                    const setDomaines = (domaines: string[]) => {
                      // Keep filiere checkboxes, replace domaine portion
                      const filiereOnly = (field.value ?? []).filter((v) =>
                        FILIERE_OPTIONS.some((o) => o.value === v),
                      );
                      field.onChange([...filiereOnly, ...domaines]);
                    };

                    return (
                      <FormItem>
                        <div className="flex items-baseline justify-between">
                          <FormLabel>{COPY.form.labels.filiere}</FormLabel>
                          <span className="text-xs text-muted-foreground">
                            {totalSelected}/{MAX_FILIERES}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground -mt-1">
                          {COPY.form.labels.filiereHint}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mt-2">
                          {FILIERE_OPTIONS.map((opt) => (
                            <FiliereCheckbox
                              key={opt.value}
                              label={opt.label}
                              image={opt.image}
                              color={opt.color}
                              checked={selectedFiliereValues.includes(
                                opt.value,
                              )}
                              disabled={
                                maxReached &&
                                !selectedFiliereValues.includes(opt.value)
                              }
                              onChange={() => toggleFiliere(opt.value)}
                            />
                          ))}
                        </div>
                        <div className="mt-3">
                          <label className="text-sm font-medium text-foreground mb-1.5 block">
                            {COPY.form.labels.domaines}
                          </label>
                          <DomaineMultiSelect
                            selected={selectedDomaineValues}
                            onChange={setDomaines}
                            maxReached={maxReached}
                          />
                        </div>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* ── Statut ── */}
                <FormField
                  control={form.control}
                  name="statut"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{COPY.form.labels.statut}</FormLabel>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {STATUT_OPTIONS.map((opt) => (
                          <SimpleCheckbox
                            key={opt.value}
                            label={opt.label}
                            checked={field.value === opt.value}
                            onChange={() =>
                              field.onChange(
                                field.value === opt.value ? "" : opt.value,
                              )
                            }
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* ── Langues (multi, no limit) ── */}
                <FormField
                  control={form.control}
                  name="langues"
                  render={({ field }) => {
                    const toggleLangue = (value: string) => {
                      const current = field.value ?? [];
                      if (current.includes(value)) {
                        field.onChange(current.filter((v) => v !== value));
                      } else {
                        field.onChange([...current, value]);
                      }
                    };

                    return (
                      <FormItem>
                        <FormLabel>{COPY.form.labels.langue}</FormLabel>
                        <p className="text-xs text-muted-foreground -mt-1">
                          {COPY.form.labels.langueHint}
                        </p>
                        <div className="flex flex-col gap-2 mt-1">
                          {LANGUE_OPTIONS.map((opt) => (
                            <SimpleCheckbox
                              key={opt.value}
                              label={opt.label}
                              checked={(field.value ?? []).includes(opt.value)}
                              onChange={() => toggleLangue(opt.value)}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />

                {/* ── Message ── */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{COPY.form.labels.message}</FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          rows={6}
                          className="w-full border border-input rounded-[var(--radius-button)] px-3 py-2 resize-none text-sm bg-transparent"
                          placeholder={COPY.form.placeholders.message}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {serverError && (
                  <p className="text-sm text-destructive">{serverError}</p>
                )}

                <Button
                  type="button"
                  onClick={handleNextStep2}
                  disabled={isSubmitting}
                  className="w-full min-h-[44px]"
                >
                  {isSubmitting ? COPY.form.saving : COPY.form.submitStep2}
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => goTo(1)}
                  className="w-full min-h-[44px]"
                >
                  {COPY.form.back}
                </Button>
              </motion.div>
            )}

            {/* STEP 3 — Bulletin + Submit */}
            {step === 3 && (
              <motion.div
                key="step-3"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-4"
              >
                <FileUpload onFilesChange={setUploadedFiles} />

                {serverError && (
                  <motion.p
                    className="text-sm text-destructive"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {serverError}
                  </motion.p>
                )}

                <div className="space-y-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting || uploadedFiles.length < 2}
                    className="w-full min-h-[44px]"
                  >
                    {isSubmitting ? COPY.form.sending : COPY.form.submitStep3}
                    <ArrowRight className="size-4" />
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    {COPY.form.submitStep3Hint}
                  </p>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => goTo(2)}
                  className="w-full min-h-[44px]"
                >
                  {COPY.form.back}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Form>
    </div>
  );
}
