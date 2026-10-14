import { useEffect, useState } from "react";
import { CONTACT, CATEGORIES, NAV } from "../data";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min((y / max) * 100, 100) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCollectionsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkTone = scrolled ? "text-ink/70 hover:text-ink" : "text-bone/75 hover:text-bone";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-x-0 top-0 h-[3px]">
        <div
          className="h-full bg-gold transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="hidden bg-ink lg:block">
        <div className="container-x flex h-9 items-center justify-between text-[11px] tracking-wide text-bone/55">
          <p className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <circle cx="12" cy="10" r="2.6" stroke="currentColor" strokeWidth="1.7" />
            </svg>
            {CONTACT.address}
          </p>
          <div className="flex items-center gap-6">
            <a className="transition-colors hover:text-gold-300" href={CONTACT.phoneHref}>
              {CONTACT.phone}
            </a>
            <a className="transition-colors hover:text-gold-300" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-ink/10 bg-bone/92 shadow-[0_10px_30px_-24px_rgba(10,13,12,0.6)] backdrop-blur-md"
            : "bg-gradient-to-b from-ink/75 via-ink/35 to-transparent"
        }`}
      >
        <div className="container-x flex h-[70px] items-center justify-between gap-6">
          <a href="#top" aria-label="Young Fashion BD — home">
            <Logo tone={scrolled ? "dark" : "light"} />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV.map((item) =>
              item.label === "Collections" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setCollectionsOpen(true)}
                  onMouseLeave={() => setCollectionsOpen(false)}
                >
                  <a
                    href={item.href}
                    className={`group flex items-center gap-1.5 py-6 text-[13.5px] font-medium tracking-wide transition-colors ${linkTone}`}
                    aria-expanded={collectionsOpen}
                    onFocus={() => setCollectionsOpen(true)}
                  >
                    {item.label}
                    <svg
                      className={`transition-transform duration-300 ${collectionsOpen ? "rotate-180" : ""}`}
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M2 4.5 6 8.5l4-4" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                  </a>

                  {collectionsOpen && (
                    <div className="animate-fade-in absolute top-full left-1/2 w-[560px] -translate-x-1/2 rounded-xl border border-ink/10 bg-bone p-3 shadow-[0_30px_60px_-30px_rgba(10,13,12,0.5)]">
                      <div className="grid grid-cols-2 gap-1">
                        {CATEGORIES.map((category) => (
                          <a
                            key={category.id}
                            href="#products"
                            className="group flex items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-bone-200"
                          >
                            <img
                              src={category.cover}
                              alt=""
                              className="size-12 rounded-md object-cover"
                              loading="lazy"
                            />
                            <span className="min-w-0">
                              <span className="block font-display text-[15px] font-medium text-ink">
                                {category.label}
                              </span>
                              <span className="block truncate text-[11.5px] text-muted">
                                {category.subs.join(" · ")}
                              </span>
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group relative py-6 text-[13.5px] font-medium tracking-wide transition-colors ${linkTone}`}
                >
                  {item.label}
                  <span className="absolute bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:bg-gold-300 sm:inline-flex"
            >
              Request a Quote
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className={`grid size-10 place-items-center rounded-full border transition-colors lg:hidden ${
                scrolled ? "border-ink/15 text-ink" : "border-bone/25 text-bone"
              }`}
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                <path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="animate-fade-in fixed inset-0 z-[60] flex flex-col bg-ink text-bone lg:hidden">
          <div className="container-x flex h-[70px] shrink-0 items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-full border border-bone/25"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>

          <nav className="container-x flex flex-1 flex-col justify-center gap-1 overflow-y-auto pb-10" aria-label="Mobile">
            {NAV.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="animate-fade-up group flex items-baseline gap-4 border-b border-bone/10 py-4 font-display text-[30px] leading-none font-light tracking-tight text-bone"
                style={{ animationDelay: `${60 + index * 55}ms` }}
              >
                <span className="text-[11px] font-sans font-medium text-gold">
                  0{index + 1}
                </span>
                {item.label}
              </a>
            ))}

            <div className="animate-fade-up mt-8 space-y-2 text-[13px] text-bone/60" style={{ animationDelay: "420ms" }}>
              <a className="block hover:text-gold-300" href={CONTACT.phoneHref}>
                {CONTACT.phone}
              </a>
              <a className="block hover:text-gold-300" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
              <p className="leading-relaxed">{CONTACT.address}</p>
            </div>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="animate-fade-up mt-6 inline-flex justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink"
              style={{ animationDelay: "480ms" }}
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
