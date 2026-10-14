import { PROMISES } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-bone py-24 sm:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative ml-auto w-full max-w-[520px]">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/about-2.jpg"
                alt="Thread cones, colour swatches and a design sketch in a development studio"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -right-3 -bottom-10 w-40 overflow-hidden rounded-2xl border-[7px] border-bone shadow-[0_30px_60px_-30px_rgba(10,13,12,0.55)] sm:-right-6 sm:w-56">
              <img
                src="/images/about-1.jpg"
                alt="Close-up of a sewing machine presser foot at work"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="absolute -top-5 -left-3 rounded-xl bg-forest px-5 py-4 text-bone shadow-[0_20px_40px_-24px_rgba(15,61,46,0.9)] sm:-left-6">
              <span className="block font-display text-[26px] leading-none font-light text-gold-300">
                Dhaka
              </span>
              <span className="mt-1.5 block text-[9.5px] tracking-[0.2em] text-bone/70 uppercase">
                Head office
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Who we are"
            title={
              <>
                A trading house built on <em className="text-forest-600">mutual trust</em>.
              </>
            }
          />

          <Reveal delay={90} className="mt-6 space-y-5">
            <p className="text-[15.5px] leading-relaxed text-muted">
              Young Fashion BD is a Bangladesh-based trading house and the traditional dress
              manufacturer for ready-made garments �?" sweater, knit and woven items �?" in Bangladesh.
            </p>
            <p className="text-[15.5px] leading-relaxed text-muted">
              We provide professional services across design selection, evaluation, business
              negotiations, executions, contracting, order management, production control, quality
              control, inspection and logistics assistance.
            </p>
          </Reveal>

          <Reveal delay={160} className="mt-9">
            <ul className="grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {PROMISES.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] text-ink/80">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-forest/10">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                      <path
                        d="M1 4.6 4 7.5 10 1"
                        stroke="#0f3d2e"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={230} className="mt-10">
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="font-display text-[19px] leading-snug font-light text-ink italic sm:text-[21px]">
                �?oMutual trust will help to establish a long-term partnership with our clients to
                promote mutual benefits �?" each party focusing on its own strengths, with Young
                Fashion BD bringing them together.�?�
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
