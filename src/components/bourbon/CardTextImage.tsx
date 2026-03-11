export default function CardTextImage({
  children,
  title,
  description,
}: {
  children?: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="border-1 border-border p-4 rounded-xl space-y-4 bg-white">
      <h4 className="font-medium text-sm text-foreground mb-1 tracking-[-0.48px]">
        {title}
      </h4>
      <p className="text-sm text-text-secondary tracking-[-0.48px]">
        {description}
      </p>
      {children}
    </div>
  );
}
