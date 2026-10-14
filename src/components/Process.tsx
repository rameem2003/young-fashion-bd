import { PROCESS } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section id="process" className="scroll-mt-28 bg-ink py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          tone="dark"
          eyebrow="Time & action"
          title={
            <>
              Order to shipment, <em className="text-gold-300">step by step</em>.
            </>
          }
          intro="Orders are closely monitored from sampling to shipment on a pro-active time & action plan."
        />

        <Reveal delay={70} className="mt-16">
          <ol className="relative grid gap-10 md:grid-cols-5 md:gap-6">
            <span
              aria-hidden="true"
              className="absolute top-7 left-7 right-[calc(20%-1.75rem)] hidden h-px bg-bone/15 md:block"
            />
            {PROCESS.map((step) => (
              <li key={step.no} className="relative flex gap-5 md:block">
                <span className="relative grid size-14 shrink-0 place-items-center rounded-full border border-gold/45 bg-ink md:mb-6">
                  <span className="font-display text-[15px] font-medium text-gold-300">
                    {step.no}
                  </span>
                </span>
                <span className="block md:pr-4">
                  <span className="block font-display text-[19px] leading-tight font-medium text-bone">
                    {step.title}
                  </span>
                  <span className="mt-2.5 block text-[14px] leading-relaxed text-bone/55">
                    {step.text}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
