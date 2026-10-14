import { CERTIFICATIONS } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Compliance() {
  return (
    <section id="compliance" className="scroll-mt-28 bg-bone-200/55 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Certified by"
            title={
              <>
                Audited factories, <em className="text-forest-600">documented standards</em>.
              </>
            }
            intro="Special emphasis on social compliance: most of our factories are BSCI, WRAP, SEDEX and STR approved, checked randomly by our own compliance and audit team."
          />

          <Reveal delay={80}>
            <p className="max-w-sm rounded-xl border border-ink/10 bg-white/70 p-5 text-[13.5px] leading-relaxed text-muted">
              Third-party or buyer-nominated inspection —{" "}
              <strong className="font-semibold text-ink/80">
                Bureau Veritas, SGS, ITS, AQM, Hohenstein
              </strong>{" "}
              — arranged as per customer requirements.
            </p>
          </Reveal>
        </div>

        <Reveal delay={60} className="mt-12">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {CERTIFICATIONS.map((cert) => (
              <li
                key={cert.name}
                className="group rounded-xl border border-ink/8 bg-white p-5 text-center shadow-[0_1px_2px_rgba(10,13,12,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-forest/25 hover:shadow-[0_24px_40px_-28px_rgba(10,13,12,0.45)]"
              >
                <div className="grid h-20 place-items-center">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-h-16 w-auto max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="mt-3 font-display text-[15px] leading-tight font-medium text-ink">
                  {cert.name}
                </p>
                <p className="mt-1 text-[11.5px] leading-snug text-muted">{cert.note}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
