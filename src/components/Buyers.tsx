import { BUYERS } from "../data";
import { LogoMarquee } from "./Marquee";
import { Reveal } from "./Reveal";

export function Buyers() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <p className="eyebrow justify-center text-forest-600">Our valued buyers at a glance</p>
          <p className="max-w-2xl text-[15.5px] leading-relaxed text-muted">
            Partnerships built over repeat orders — and a presence at the trade shows where the next
            season starts.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 border-y border-ink/8 py-4">
        <LogoMarquee logos={BUYERS} />
      </div>

      <div className="container-x mt-8">
        <Reveal delay={60} className="text-center">
          <p className="text-[12px] tracking-[0.16em] text-muted/80 uppercase">
            We have participated in many exhibitions to showcase our projects
          </p>
        </Reveal>
      </div>
    </section>
  );
}
