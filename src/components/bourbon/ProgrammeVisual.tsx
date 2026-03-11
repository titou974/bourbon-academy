interface Phase {
  phase: string;
  label: string;
  matieres: string[];
}

export default function ProgrammeVisual({ phases }: { phases: Phase[] }) {
  return (
    <div className="space-y-3 mb-6">
      {phases.map((p, i) => (
        <div key={i} className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full tracking-[-0.3px]">
              {p.phase}
            </span>
            <span className="text-xs font-medium text-foreground tracking-[-0.4px]">
              {p.label}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 pl-1">
            {p.matieres.map((m) => (
              <span
                key={m}
                className="text-[11px] px-2 py-0.5 rounded-md bg-[#f5f5f5] text-text-secondary tracking-[-0.3px]"
              >
                {m}
              </span>
            ))}
          </div>
          {i < phases.length - 1 && <div className="h-px bg-border mt-1" />}
        </div>
      ))}
    </div>
  );
}
