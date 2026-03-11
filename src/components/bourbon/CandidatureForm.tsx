"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { candidatureSchema, type CandidatureInput } from "@/lib/validations";
import { submitCandidature, type SubmitResult } from "@/app/actions";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileUpload } from "./FileUpload";
import { ArrowRight } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const STEPS = [
  { number: 1, label: "Coordonnées" },
  { number: 2, label: "Bulletins" },
  { number: 3, label: "Confirmation" },
] as const;

const FILIERE_OPTIONS = [
  { value: "kine", label: "Kinésithérapie" },
  { value: "dentaire", label: "Dentaire" },
  { value: "veterinaire", label: "Vétérinaire" },
  { value: "infirmier", label: "Infirmier" },
] as const;

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

export function CandidatureForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successLottie, setSuccessLottie] = useState<object | null>(null);

  const form = useForm<CandidatureInput>({
    resolver: zodResolver(candidatureSchema),
    defaultValues: {
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      filiere: "",
      message: "",
    },
  });

  const goTo = (next: number) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const handleNextStep1 = async () => {
    const valid = await form.trigger([
      "prenom",
      "nom",
      "email",
      "telephone",
      "filiere",
    ]);
    if (valid) goTo(2);
  };

  const handleSubmit = async (data: CandidatureInput) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const formData = new FormData();
      formData.append("prenom", data.prenom);
      formData.append("nom", data.nom);
      formData.append("email", data.email);
      formData.append("telephone", data.telephone);
      formData.append("filiere", data.filiere);
      if (data.message) formData.append("message", data.message);
      if (uploadedFile) formData.append("bulletin", uploadedFile);

      // Preload lottie in parallel with submission
      const [result] = await Promise.all([
        submitCandidature(formData),
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
        setServerError(result.error ?? "Une erreur est survenue");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
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
          Candidature envoyée !
        </motion.h3>
        <motion.p
          className="text-text-secondary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Nous vous répondons sous 24h à l&apos;adresse{" "}
          <strong>{form.getValues("email")}</strong>.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <Stepper currentStep={step} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="relative">
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
                      <FormLabel>Prénom</FormLabel>
                      <FormControl>
                        <Input {...field} className="min-h-[44px]" />
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
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input {...field} className="min-h-[44px]" />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
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
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} className="min-h-[44px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="filiere"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Filière souhaitée</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full min-h-[44px]">
                            <SelectValue placeholder="Choisir une filière..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent position="popper" sideOffset={4}>
                          {FILIERE_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (optionnel)</FormLabel>
                      <FormControl>
                        <textarea
                          {...field}
                          rows={3}
                          className="w-full border border-input rounded-[var(--radius-button)] px-3 py-2 resize-none text-sm bg-transparent"
                          placeholder="Des informations complémentaires sur votre projet..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="button"
                  onClick={handleNextStep1}
                  className="w-full min-h-[44px]"
                >
                  Suivant
                  <ArrowRight className="size-4" />
                </Button>
              </motion.div>
            )}

            {/* STEP 2 — Upload bulletin */}
            {step === 2 && (
              <motion.div
                key="step-2"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-4"
              >
                <FileUpload onFileSelect={setUploadedFile} />

                <div className="flex flex-col gap-3">
                  <Button
                    type="button"
                    onClick={() => goTo(3)}
                    className="w-full min-h-[44px]"
                  >
                    {uploadedFile ? "Continuer" : "Passer cette étape"}
                    <ArrowRight className="size-4" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => goTo(1)}
                    className="min-h-[44px]"
                  >
                    Retour
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3 — Recap + Submit */}
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
                <div className="bg-muted rounded-[var(--radius-card)] p-4 space-y-2">
                  <h3 className="font-semibold text-foreground">
                    Récapitulatif
                  </h3>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Nom : </span>
                    {form.getValues("prenom")} {form.getValues("nom")}
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Email : </span>
                    {form.getValues("email")}
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Téléphone : </span>
                    {form.getValues("telephone")}
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Filière : </span>
                    {FILIERE_OPTIONS.find(
                      (o) => o.value === form.getValues("filiere"),
                    )?.label ?? form.getValues("filiere")}
                  </p>
                  {form.getValues("message") && (
                    <p className="text-sm">
                      <span className="text-muted-foreground">Message : </span>
                      {form.getValues("message")}
                    </p>
                  )}
                  {uploadedFile && (
                    <p className="text-sm">
                      <span className="text-muted-foreground">Bulletin : </span>
                      {uploadedFile.name}
                    </p>
                  )}
                </div>

                {serverError && (
                  <motion.p
                    className="text-sm text-destructive"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {serverError}
                  </motion.p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[44px]"
                >
                  {isSubmitting
                    ? "Envoi en cours..."
                    : "Soumettre ma candidature"}
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => goTo(2)}
                  className="w-full min-h-[44px]"
                >
                  Retour
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Form>
    </div>
  );
}
