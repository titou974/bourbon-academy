export default function DebounchesVisual({
  debouches,
}: {
  debouches: string[];
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {debouches.map((d) => (
        <span
          key={d}
          className="text-xs px-2.5 py-1 rounded-full bg-secondary/10 text-secondary font-medium tracking-[-0.4px]"
        >
          {d}
        </span>
      ))}
    </div>
  );
}
