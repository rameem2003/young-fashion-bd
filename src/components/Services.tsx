import { SERVICES } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-bone py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our services"
          title={
            <>
              Sourcing, development and control —{" "}
              <em className="text-forest-600">under one roof</em>.
            </>
          }
          intro="From the first enquiry to the final container, every order is run by a dedicated desk that reports to you daily."
        />

        <Reveal delay={70} className="mt-14">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <article
                key={service.no}
                className="group relative bg-bone p-7 transition-colors duration-300 hover:bg-ink sm:p-8"
              >
                <span className="font-display text-[13px] tracking-[0.22em] text-gold">
                  {service.no}
                </span>
                <h3 className="mt-5 font-display text-[22px] leading-tight font-medium text-ink transition-colors group-hover:text-bone">
                  {service.title}
                </h3>
                <p className="mt-3.5 text-[14.5px] leading-relaxed text-muted transition-colors group-hover:text-bone/65">
                  {service.text}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute right-7 bottom-7 text-[18px] text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:right-8 sm:bottom-8"
                >
                  →
                </span>
                <span className="block h-6" />
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px] text-muted"
        >
          <p>
            Manufacturing support from approximately 55 associated industries based in Bangladesh.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-semibold text-forest-600 transition-colors hover:text-ink"
          >
            Discuss your programme <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
