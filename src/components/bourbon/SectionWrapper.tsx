import Image from "next/image";

export default function SectionWrapper({
  children,
  id,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  id: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section id={id} className="px-4 pb-4 md:px-6 md:pb-6 relative">
      <div className="max-w-5xl mx-auto rounded-[var(--radius-pill)] border border-[#e4e4e4] border-[0.5px] relative z-20">
        <Image
          src="/rocks-left-top.svg"
          alt="Rocks left top"
          width={40}
          height={40}
          className="absolute top-0 left-[-25px]"
        />
        <Image
          src="/rocks-right-top.svg"
          alt="Rocks right top"
          width={40}
          height={40}
          className="absolute top-0 right-[-25px]"
        />
        <Image
          src="/rocks-bottom-right.svg"
          alt="Rocks bottom right"
          width={40}
          height={40}
          className="absolute bottom-0 right-[-25px]"
        />
        <Image
          src="/rocks-bottom-left.svg"
          alt="Rocks bottom left"
          width={40}
          height={40}
          className="absolute bottom-0 left-[-25px]"
        />
        <div className="px-10 py-2 md:py-4">
          <h2 className="font-medium text-xl md:text-[32px] text-text-primary tracking-[-1.5px]">
            {title}
          </h2>
        </div>
        <div className="border-t border-[#e4e4e4] border-[0.5px]" />
        <div className="px-10 py-1">
          <p className="text-text-muted text-sm md:text-base tracking-[-0.64px]">
            {subtitle}
          </p>
        </div>
        <div className="border-t border-[#e4e4e4] border-[0.5px]" />
        {children}
      </div>
    </section>
  );
}
