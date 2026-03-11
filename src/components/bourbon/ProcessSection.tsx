import { COPY } from "@/constants/fr_strings";
import { ProcessStep } from "./ProcessStep";

const stepsData = [
  {
    imageSrc: "/images/steps/step-1.png",
    imageClassName:
      "md:translate-y-10 group-hover:translate-y-0 md:group-hover:scale-105 max-w-[60%] mx-auto",
  },
  {
    imageSrc: "/images/steps/step-2.png",
    imageClassName:
      "max-w-[60%] mx-auto md:translate-y-20 md:group-hover:translate-y-[-5px] md:group-hover:rotate-10",
  },
  {
    imageSrc: "/images/steps/step-3.png",
    imageClassName:
      "max-w-[60%] mx-auto md:translate-y-16 md:group-hover:translate-y-[-2px] md:group-hover:-rotate-6",
  },
];

export function ProcessSection() {
  return (
    <div className="px-4 py-8 md:px-10 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {COPY.steps.map((step, index) => (
          <ProcessStep
            key={step.step}
            stepLabel={step.step}
            title={step.title}
            description={step.description}
            {...stepsData[index]}
          />
        ))}
      </div>
    </div>
  );
}
