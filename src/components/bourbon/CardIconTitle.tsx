import Image from "next/image";

export default function CardIconTitle({
  children,
  src,
  alt,
  width,
  height,
}: {
  children: React.ReactNode;
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="flex items-center gap-2 font-medium text-sm rounded-xl bg-secondary/10 border border-secondary/20 ps-3 pe-4 py-1 tracking-[-0.48px] max-w-80 mt-4">
      <Image src={src} alt={alt} width={50} height={50} />
      {children}
    </div>
  );
}
