import { CONTACT, STATS } from "../data";
import { Counter } from "./Reveal";

const HERO_LOGOS = [
  { src: "/images/cert-bsci.png", alt: "amfori BSCI" },
  { src: "/images/cert-wrap.png", alt: "WRAP" },
  { src: "/images/cert-sedex.png", alt: "SEDEX" },
];

export function Hero() {
  return (
    <section id="top" className="grain relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pt-[112px]">
      <img
        src="/images/hero-workshop.jpg"
        alt="Seamstress working with a zipper at a textile workshop"
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/88 to-ink/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/25 to-ink/70" />

      <div className="container-x pt-14 pb-12 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_310px] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-gold-300">100% Export Oriented · Dhaka, Bangladesh</p>

            <h1 className="display-title mt-7 text-[clamp(2.6rem,7.2vw,5.4rem)] text-bone">
              From our floors in Dhaka to{" "}
              <em className="text-gold-300">racks worldwide</em>.
            </h1>

            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-bone/70">
              Young Fashion BD is a Bangladesh-based trading house manufacturing sweaters, knits and
              wovens — backed by in-house merchandising, production control, quality inspection and
              logistics assistance.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-300"
              >
                Request a Quote
                <svg
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </a>
              <a
                href="#products"
                className="inline-flex items-center rounded-full border border-bone/30 px-7 py-3.5 text-sm font-semibold text-bone transition-colors hover:border-bone hover:bg-bone hover:text-ink"
              >
                View Collections
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-bone/15 bg-bone/[0.06] p-6 backdrop-blur-md">
            <p className="text-[10.5px] font-semibold tracking-[0.22em] text-gold-300 uppercase">
              Compliance ready
            </p>
            <p className="mt-3 text-[13.5px] leading-relaxed text-bone/70">
              Our factory base is approved by the audits international buyers already trust.
            </p>
            <div className="mt-5 flex items-center gap-4 rounded-xl bg-bone px-4 py-3">
              {HERO_LOGOS.map((logo) => (
                <img
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto max-w-[74px] object-contain"
                  loading="lazy"
                />
              ))}
            </div>
            <a
              href="#compliance"
              className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-bone transition-colors hover:text-gold-300"
            >
              See all certifications
              <span aria-hidden="true">→</span>
            </a>
          </aside>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-bone/15 pt-9 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(2rem,4vw,2.9rem)] leading-none font-light text-bone">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-3 block text-[11.5px] leading-snug tracking-[0.14em] text-bone/50 uppercase">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex items-center justify-between gap-6 text-[11px] tracking-[0.18em] text-bone/40 uppercase">
          <span className="hidden sm:inline">Sweater · Knit · Woven · Home Textile</span>
          <a href="#about" className="flex items-center gap-3 transition-colors hover:text-gold-300">
            Scroll
            <span className="relative block h-10 w-px overflow-hidden bg-bone/20">
              <span className="absolute inset-x-0 top-0 h-4 animate-[yfb-scroll-line_2.6s_ease-in-out_infinite] bg-gold" />
            </span>
          </a>
          <a href={CONTACT.phoneHref} className="hidden transition-colors hover:text-gold-300 sm:inline">
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
