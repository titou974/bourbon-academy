export default function DureeEtudesVisual({
  annees,
  detail,
}: {
  annees: number;
  detail?: string;
}) {
  return (
    <div className="space-y-3 mt-2">
      <div className="flex items-start">
        {Array.from({ length: annees }).map((_, i) => (
          <>
            <div
              key={`circle-${i}-${detail}`}
              className="flex flex-col items-center shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <span className="text-xs font-semibold text-secondary">
                  {i + 1}
                </span>
              </div>
              <span className="text-[10px] text-text-secondary mt-1 tracking-[-0.3px]">
                Année {i + 1}
              </span>
            </div>
            {i < annees - 1 && (
              <div
                key={`line-${i}-${detail}`}
                className="flex-1 md:w-16 md:flex-none h-px bg-border mt-4"
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
