import { useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES, CATEGORY_LABEL, PRODUCTS, type CategoryId, type Product } from "../data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Filter = CategoryId | "all";

const TABS: { id: Filter; label: string }[] = [
  { id: "all", label: "All Collections" },
  { id: "men", label: "Men's" },
  { id: "ladies", label: "Ladies" },
  { id: "kids", label: "Kid's" },
  { id: "home", label: "Home Textile" },
];

export function Products() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Product | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? PRODUCTS : PRODUCTS.filter((item) => item.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (!active) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const pickCategory = (id: CategoryId) => {
    setFilter(id);
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="products" className="scroll-mt-28 bg-ink py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            tone="dark"
            eyebrow="Collections"
            title={
              <>
                Four divisions. <em className="text-gold-300">One standard.</em>
              </>
            }
            intro="Knit, woven, sweater and home textile programmes developed for buyers who need consistency from sample to shipment."
          />

          <Reveal delay={80} className="hidden gap-3 lg:flex">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="h-px flex-1 bg-gradient-to-r from-gold/70 to-transparent"
              />
            ))}
          </Reveal>
        </div>

        <Reveal delay={60} className="mt-12">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => pickCategory(category.id)}
                className="group relative overflow-hidden rounded-2xl text-left"
                aria-label={`Browse ${category.label} collection`}
              >
                <img
                  src={category.cover}
                  alt={`${category.label} collection`}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] sm:aspect-[3/4]"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                <span className="absolute inset-x-4 bottom-4 block">
                  <span className="block font-display text-[19px] leading-none font-medium text-bone sm:text-[22px]">
                    {category.label}
                  </span>
                  <span className="mt-2 block text-[10.5px] tracking-[0.16em] text-bone/60 uppercase">
                    {category.subs.join(" · ")}
                  </span>
                  <span className="mt-3 block h-px w-0 bg-gold transition-all duration-500 group-hover:w-12" />
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div id="catalog" className="mt-16 scroll-mt-28 sm:mt-20">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-bone/12 pb-5">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter collections">
              {TABS.map((tab) => {
                const count =
                  tab.id === "all"
                    ? PRODUCTS.length
                    : PRODUCTS.filter((item) => item.category === tab.id).length;
                const selected = filter === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setFilter(tab.id)}
                    className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                      selected
                        ? "bg-gold text-ink"
                        : "border border-bone/20 text-bone/55 hover:border-bone/45 hover:text-bone"
                    }`}
                  >
                    {tab.label}
                    <span className={`ml-1.5 text-[11px] ${selected ? "text-ink/55" : "text-bone/35"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-[12px] tracking-[0.14em] text-bone/40 uppercase">
              Showing {visible.length} styles
            </p>
          </div>

          <div
            key={filter}
            className="animate-fade-up mt-9 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 lg:grid-cols-4"
          >
            {visible.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => setActive(product)}
                className="group text-left"
              >
                <span className="relative block overflow-hidden rounded-xl bg-ink-700">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute top-3 left-3 rounded-full bg-bone/92 px-2.5 py-1 text-[9.5px] font-semibold tracking-[0.12em] text-ink uppercase">
                    {product.tag}
                  </span>
                  <span className="absolute inset-x-3 bottom-3 translate-y-3 rounded-full border border-bone/45 bg-ink/55 py-2 text-center text-[12px] font-semibold text-bone opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Quick view
                  </span>
                </span>

                <span className="mt-4 flex items-baseline justify-between gap-2">
                  <span className="font-display text-[16px] leading-tight font-light text-bone transition-colors group-hover:text-gold-300">
                    {product.name}
                  </span>
                  <span className="shrink-0 text-[10.5px] tracking-wider text-bone/35">
                    {product.code}
                  </span>
                </span>
                <span className="mt-1 block text-[12px] text-bone/45">
                  {CATEGORY_LABEL[product.category]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <div
          className="animate-fade-in fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" />

          <div
            ref={panelRef}
            tabIndex={-1}
            className="animate-scale-in relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-bone outline-none sm:grid sm:grid-cols-2"
          >
            <img
              src={active.img}
              alt={active.name}
              className="h-56 w-full object-cover sm:h-full"
            />

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-forest/25 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-forest-600 uppercase">
                  {CATEGORY_LABEL[active.category]} · {active.tag}
                </span>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close quick view"
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-ink/15 text-ink/60 transition-colors hover:border-ink/40 hover:text-ink"
                >
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </button>
              </div>

              <h3 className="display-title mt-5 text-[28px] text-ink sm:text-[32px]">{active.name}</h3>
              <p className="mt-2 text-[12px] tracking-[0.16em] text-muted uppercase">
                Style {active.code}
              </p>

              <p className="mt-5 text-[14.5px] leading-relaxed text-muted">
                Developed and produced through our own merchandising desk in Dhaka �?" fabric, wash,
                trims and packaging confirmed against your tech pack before bulk approval.
              </p>

              <dl className="mt-6 divide-y divide-ink/10 border-y border-ink/10 text-[13.5px]">
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-muted">Fabric</dt>
                  <dd className="text-right text-ink/85">Buyer nominated / developed</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-muted">Minimum order</dt>
                  <dd className="text-right text-ink/85">Confirmed at quotation</dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-muted">Lead time</dt>
                  <dd className="text-right text-ink/85">Confirmed at order</dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="inline-flex rounded-full bg-forest px-6 py-3 text-[13.5px] font-semibold text-bone transition-colors hover:bg-ink"
                >
                  Enquire about this style
                </a>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="inline-flex rounded-full border border-ink/20 px-6 py-3 text-[13.5px] font-semibold text-ink/70 transition-colors hover:border-ink/50 hover:text-ink"
                >
                  Keep browsing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
