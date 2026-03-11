import Image from "next/image";

interface ProcessStepProps {
  stepLabel: string;
  title: string;
  description: string;
  imageSrc: string;
  imageClassName: string;
}

export function ProcessStep({
  stepLabel,
  title,
  description,
  imageSrc,
  imageClassName,
}: ProcessStepProps) {
  return (
    <div className="bg-card border-[0.5px] border-secondary rounded-[var(--radius-card)] w-full flex flex-col overflow-hidden group">
      {/* Text content */}
      <div className="px-5 pt-4 pb-3 flex flex-col gap-1.5">
        <span className="text-secondary text-xs font-medium tracking-[-0.48px]">
          {stepLabel}
        </span>
        <h3 className="text-foreground text-base font-semibold tracking-[-0.48px] leading-snug">
          {title}
        </h3>
        <p className="text-muted-foreground text-xs font-medium tracking-[-0.48px] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image with gradient fade */}
      <div className="relative mt-auto mx-5 mb-4 h-[220px] rounded-[15px] border border-secondary overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`transition-transform duration-300 ease-in-out object-contain ${imageClassName}`}
        />
        {/* Bottom gradient fade to card bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent 46%, var(--color-card) 100%)",
          }}
        />
      </div>
    </div>
  );
}
