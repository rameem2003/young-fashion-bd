import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <Reveal className={className}>
      <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        <p
          className={`eyebrow ${align === "center" ? "justify-center" : "justify-start"} ${
            dark ? "text-gold-300" : "text-forest-600"
          }`}
        >
          {eyebrow}
        </p>
        <h2
          className={`display-title mt-5 text-[clamp(2rem,4.2vw,3.35rem)] ${
            dark ? "text-bone" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mt-5 max-w-2xl text-[15.5px] leading-relaxed ${
              dark ? "text-bone/65" : "text-muted"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}
