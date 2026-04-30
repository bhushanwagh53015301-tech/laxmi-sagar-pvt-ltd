import { assetsFromCategory } from "@/lib/localAssets";
import { Reveal } from "@/components/Reveal";

const PRODUCT_PHOTOS = assetsFromCategory("Product Photos");

const PRODUCT_LINES = [
  {
    category: "Transmission Gears",
    materials: "SAE 8620, 16MnCr5, 20MnCr5",
    application: "CV and tractor transmission systems",
  },
  {
    category: "Transmission Shafts",
    materials: "EN8, EN19, EN24",
    application: "Automotive drivetrain and industrial shafts",
  },
  {
    category: "Machined Forgings",
    materials: "Carbon and alloy steels as per drawing",
    application: "Critical load-bearing components",
  },
  {
    category: "Precision Components",
    materials: "EN-series and OEM-specified grades",
    application: "Safety-critical engineered assemblies",
  },
];

function cleanLabel(text: string) {
  return text
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function ProductVisualsSection() {
  const visualNotes = [
    "OEM-grade finish",
    "Production-ready geometry",
    "Traceable batch quality",
  ];

  return (
    <section className="bg-secondary pb-14 pt-2 sm:pb-24 sm:pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Product Visuals</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Machined components gallery</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Representative component photography mapped to our production and machining expertise.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2">
          {visualNotes.map((note) => (
            <span
              key={note}
              className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
            >
              {note}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_PHOTOS.map((item, index) => {
            const relatedLine = PRODUCT_LINES[index % PRODUCT_LINES.length];

            return (
              <figure
                key={item.relativePath}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.filename}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-base font-semibold uppercase tracking-wide text-white">
                      {cleanLabel(item.filename)}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/75">
                      {relatedLine.category}
                    </p>
                  </figcaption>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-border/80 p-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Materials</p>
                    <p className="mt-1 text-xs text-foreground">{relatedLine.materials}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Application</p>
                    <p className="mt-1 text-xs text-foreground">{relatedLine.application}</p>
                  </div>
                </div>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
