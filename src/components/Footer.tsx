import { CATEGORIES, CONTACT, NAV } from "../data";
import { Logo } from "./Logo";

const YEAR = new Date().getFullYear();

const FOOT_HEADINGS: Record<string, string> = {
  About: "Explore",
  "Collections": "Collections",
  Contact: "Reach us",
};

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-8 text-bone">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-bone/55">
              Bangladesh-based trading house and 100% export oriented manufacturer of sweater, knit,
              woven and home textile items.
            </p>
            <span className="mt-6 inline-flex rounded-full border border-gold/40 px-4 py-2 text-[10.5px] font-semibold tracking-[0.18em] text-gold-300 uppercase">
              100% Export Oriented
            </span>
          </div>

          <nav aria-label="Footer">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-bone/40 uppercase">
              {FOOT_HEADINGS.About}
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[14.5px] text-bone/70 transition-colors hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-bone/40 uppercase">
              {FOOT_HEADINGS.Collections}
            </p>
            <ul className="mt-5 space-y-3">
              {CATEGORIES.map((category) => (
                <li key={category.id}>
                  <a
                    href="#products"
                    className="text-[14.5px] text-bone/70 transition-colors hover:text-gold-300"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-bone/40 uppercase">
              {FOOT_HEADINGS.Contact}
            </p>
            <address className="mt-5 space-y-4 not-italic">
              <p className="text-[14px] leading-relaxed text-bone/70">{CONTACT.address}</p>
              <p>
                <a
                  href={CONTACT.phoneHref}
                  className="text-[14.5px] text-bone/85 transition-colors hover:text-gold-300"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-[14.5px] break-all text-bone/85 transition-colors hover:text-gold-300"
                >
                  {CONTACT.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="display-title mt-16 mb-6 text-center text-[clamp(2.2rem,9vw,7rem)] leading-none text-bone/6 select-none"
        >
          Young Fashion BD
        </p>

        <div className="flex flex-col items-center gap-4 border-t border-bone/10 pt-7 text-[12.5px] text-bone/45 sm:flex-row sm:justify-between">
          <p>© {YEAR} Young Fashion BD. All rights reserved.</p>
          <p className="tracking-[0.14em] uppercase">Dhaka · Bangladesh</p>
          <a href="#top" className="transition-colors hover:text-gold-300">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
