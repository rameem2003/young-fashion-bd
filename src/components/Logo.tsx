interface LogoProps {
  tone?: "light" | "dark";
  compact?: boolean;
}

export function Logo({ tone = "light", compact = false }: LogoProps) {
  const dark = tone === "dark";

  return (
    <span className="flex items-center gap-3">
      <span
        className={`grid size-10 shrink-0 place-items-center rounded-[10px] ${
          dark ? "bg-gold text-ink" : "bg-forest text-gold"
        }`}
      >
        <span className="font-display text-[19px] leading-none font-semibold tracking-tight">YF</span>
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] leading-none font-semibold tracking-[0.01em] sm:text-[19px] ${
            dark ? "text-ink" : "text-bone"
          }`}
        >
          Young Fashion <span className={dark ? "text-forest" : "text-gold-300"}>BD</span>
        </span>
        {!compact && (
          <span
            className={`mt-1.5 text-[8.5px] font-medium tracking-[0.32em] uppercase ${
              dark ? "text-muted" : "text-bone/55"
            }`}
          >
            100% Export Oriented
          </span>
        )}
      </span>
    </span>
  );
}
