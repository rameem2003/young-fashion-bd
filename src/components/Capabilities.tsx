import { useState } from "react";
import { CAPABILITIES } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Capabilities() {
  const [activeId, setActiveId] = useState(CAPABILITIES[0].id);
  const active = CAPABILITIES.find((item) => item.id === activeId) ?? CAPABILITIES[0];

  return (
    <section id="capabilities" className="scroll-mt-28 bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our speciality"
            title={
              <>
                What happens <em className="text-forest-600">behind</em> every order.
              </>
            }
            intro="Three departments that keep buyers coming back: merchandising that communicates, compliance that is audited, and inspection that is documented."
          />

          <Reveal delay={80} className="w-full lg:w-auto">
            <div
              className="flex gap-1 overflow-x-auto border-b border-ink/10"
              role="tablist"
              aria-label="Capabilities"
            >
              {CAPABILITIES.map((item) => {
                const selected = item.id === active.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveId(item.id)}
                    className={`relative shrink-0 px-4 py-3 text-[13.5px] font-medium whitespace-nowrap transition-colors ${
                      selected ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-2 -bottom-px h-0.5 origin-left transition-transform duration-300 ${
                        selected ? "scale-x-100 bg-gold" : "scale-x-0 bg-gold"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div key={active.id} className="animate-fade-up mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={active.img}
                alt={active.alt}
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="absolute -bottom-5 -left-3 hidden rounded-xl bg-forest px-5 py-4 text-bone shadow-[0_20px_40px_-24px_rgba(15,61,46,0.9)] sm:block">
              <span className="block font-display text-[24px] leading-none font-light text-gold-300">
                In-house
              </span>
              <span className="mt-1.5 block text-[9.5px] tracking-[0.2em] text-bone/70 uppercase">
                {active.label}
              </span>
            </span>
          </div>

          <div className="order-1 lg:order-2">
            <p className="eyebrow text-forest-600">{active.label}</p>
            <h3 className="display-title mt-5 text-[clamp(1.7rem,3.2vw,2.5rem)] text-ink">
              {active.title}
            </h3>
            <p className="mt-5 text-[15.5px] leading-relaxed text-muted">{active.body}</p>

            <ul className="mt-8 space-y-4">
              {active.points.map((point, index) => (
                <li key={point} className="flex items-start gap-4 border-t border-ink/10 pt-4">
                  <span className="font-display text-[12px] tracking-[0.18em] text-gold">
                    0{index + 1}
                  </span>
                  <span className="text-[14.5px] text-ink/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
