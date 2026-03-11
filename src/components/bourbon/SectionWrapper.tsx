import Image from "next/image";

export default function SectionWrapper({
  children,
  id,
  title,
  subtitle,
  centered = false,
}: {
  children: React.ReactNode;
  id: string;
  title: string;
  subtitle: string;
  centered?: boolean;
}) {
  return (
    <section
      id={id}
      className="px-4 pb-4 md:px-6 md:pb-6 relative mt-8 md:mt-10"
    >
      <div className="max-w-5xl mx-auto rounded-[var(--radius-pill)]  border-border border-1 relative z-20">
        <Image
          src="/volcano.png"
          alt="Rocks left top"
          width={50}
          height={50}
          className="absolute top-[-50px] left-8"
        />
        <Image
          src="/volcano.png"
          alt="Rocks left top"
          width={50}
          height={50}
          className="absolute top-[-50px] right-8"
        />
        <div className={`px-6 md:px-10 py-2 md:py-4 ${centered ? "text-center" : ""}`}>
          <h2 className="font-medium text-xl md:text-[32px] text-text-primary tracking-[-1.5px]">
            {title}
          </h2>
        </div>
        <div className="border-t border-border border-1" />
        <div className={`px-6 md:px-10 py-1 ${centered ? "text-center" : ""}`}>
          <p className="text-text-muted text-sm md:text-base tracking-[-0.64px]">
            {subtitle}
          </p>
        </div>
        <div className="border-t border-border border-1" />
        {children}
      </div>
    </section>
  );
}
