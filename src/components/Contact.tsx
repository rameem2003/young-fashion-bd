import { useState, type FormEvent } from "react";
import { CATEGORIES, CONTACT } from "../data";
import { Reveal } from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const FIELD =
  "w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-muted/60 transition-colors outline-none focus:border-forest";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const nextErrors: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (message.length < 10) nextErrors.message = "Tell us a little more (10+ characters).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSent(true);
  };

  const details = [
    {
      label: "Head office",
      value: CONTACT.address,
      href: "https://maps.google.com/?q=Uttara+Sector+6+Dhaka",
    },
    { label: "Call us", value: CONTACT.phone, href: CONTACT.phoneHref },
    { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ];

  return (
    <section id="contact" className="grain relative scroll-mt-28 bg-forest py-24 text-bone sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow text-gold-300">Contact us now</p>
            <h2 className="display-title mt-5 text-[clamp(2rem,4.2vw,3.35rem)] text-bone">
              If you have any <em className="text-gold-300">custom query</em>.
            </h2>
            <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-bone/70">
              Our management is a highly motivated and qualified team of technicians and
              professionals. Tell us about your programme and we will respond with a development
              plan and price.
            </p>
          </Reveal>

          <Reveal delay={90} className="mt-10 space-y-4">
            {details.map((detail) => (
              <a
                key={detail.label}
                href={detail.href}
                target={detail.label === "Head office" ? "_blank" : undefined}
                rel={detail.label === "Head office" ? "noreferrer" : undefined}
                className="group flex items-start gap-5 rounded-xl border border-bone/15 bg-bone/5 p-5 transition-colors hover:border-gold/50 hover:bg-bone/10"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-300">
                  {detail.label === "Head office" ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.7" />
                    </svg>
                  ) : detail.label === "Call us" ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1.1 1A16 16 0 0 1 4 5.1 1 1 0 0 1 5 4Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
                      <path d="m3.5 7 8.5 6 8.5-6" stroke="currentColor" strokeWidth="1.7" />
                    </svg>
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block text-[10.5px] tracking-[0.2em] text-bone/50 uppercase">
                    {detail.label}
                  </span>
                  <span className="mt-1.5 block text-[14.5px] leading-relaxed text-bone/90 transition-colors group-hover:text-gold-300">
                    {detail.value}
                  </span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>

        <Reveal delay={60}>
          <div className="rounded-2xl bg-bone p-6 text-ink shadow-[0_40px_80px_-50px_rgba(0,0,0,0.9)] sm:p-8">
            {sent ? (
              <div className="animate-fade-up flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid size-16 place-items-center rounded-full bg-forest/10">
                  <svg width="26" height="20" viewBox="0 0 26 20" fill="none" aria-hidden="true">
                    <path
                      d="M1 10.5 9 18 25 1.5"
                      stroke="#0f3d2e"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="display-title mt-6 text-[28px]">Thank you �?" message received.</h3>
                <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-muted">
                  Our merchandising desk will come back to you within one business day. For anything
                  urgent, call {CONTACT.phone}.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-7 rounded-full border border-ink/20 px-6 py-3 text-[13.5px] font-semibold text-ink/70 transition-colors hover:border-ink/50 hover:text-ink"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div>
                  <p className="font-display text-[24px] leading-none font-medium">Request a quote</p>
                  <p className="mt-2.5 text-[13.5px] text-muted">
                    Share your enquiry and we will respond with development options.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[11.5px] font-semibold tracking-[0.14em] text-muted uppercase" htmlFor="name">
                      Name *
                    </label>
                    <input id="name" name="name" type="text" className={FIELD} placeholder="Your full name" />
                    {errors.name && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-[11.5px] font-semibold tracking-[0.14em] text-muted uppercase" htmlFor="phone">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" className={FIELD} placeholder="+880 ..." />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[11.5px] font-semibold tracking-[0.14em] text-muted uppercase" htmlFor="email">
                    Email *
                  </label>
                  <input id="email" name="email" type="email" className={FIELD} placeholder="you@company.com" />
                  {errors.email && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-[11.5px] font-semibold tracking-[0.14em] text-muted uppercase" htmlFor="interest">
                    Interest
                  </label>
                  <select id="interest" name="interest" className={FIELD} defaultValue="">
                    <option value="" disabled>
                      Select a collection
                    </option>
                    {CATEGORIES.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.label}
                      </option>
                    ))}
                    <option value="other">Other / multiple</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[11.5px] font-semibold tracking-[0.14em] text-muted uppercase" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${FIELD} resize-none`}
                    placeholder="Product, quantity, target price and delivery window�?�"
                  />
                  {errors.message && <p className="mt-1.5 text-[12.5px] text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-bone transition-colors hover:bg-forest"
                >
                  Send enquiry
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    �?'
                  </span>
                </button>

                <p className="text-center text-[12px] text-muted">
                  Or email us directly at{" "}
                  <a className="font-semibold text-forest-600 underline-offset-2 hover:underline" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
