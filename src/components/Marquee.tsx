import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: string;
}

function MarqueeTrack({
  children,
  className = "",
  speed = "46s",
}: MarqueeProps) {
  return (
    <div className={`marquee-track relative overflow-hidden ${className}`}>
      <div
        className="animate-marquee flex w-max"
        style={{ animationDuration: speed }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

export function KeywordMarquee({ items }: { items: string[] }) {
  return (
    <div className="border-y border-ink/10 bg-white">
      <MarqueeTrack className="py-5" speed="52s">
        {items.map((item) => (
          <span key={item} className="flex items-center whitespace-nowrap">
            <span className="px-7 font-display text-[17px] font-light tracking-tight text-ink/75 sm:text-[19px]">
              {item}
            </span>
            <span className="size-1.5 rotate-45 bg-gold" aria-hidden="true" />
          </span>
        ))}
      </MarqueeTrack>
    </div>
  );
}

export function LogoMarquee({
  logos,
  className = "",
}: {
  logos: { src: string; alt: string }[];
  className?: string;
}) {
  return (
    <MarqueeTrack className={className} speed="38s">
      {logos.map((logo) => (
        <span key={logo.src} className="flex items-center">
          <img
            src={logo.src}
            alt={logo.alt}
            className="mx-8 h-12 w-auto max-w-[130px] object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:mx-12 sm:h-14"
            loading="lazy"
          />
        </span>
      ))}
    </MarqueeTrack>
  );
}
