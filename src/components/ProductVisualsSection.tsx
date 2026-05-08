import { useEffect, useState } from "react";
import { assetsFromCategory } from "@/lib/localAssets";
import { Reveal } from "@/components/Reveal";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const PRODUCT_PHOTOS = assetsFromCategory("Product Photos");
const PRODUCT_NAME_MAP: Record<string, string> = {
  "Bush.jpg": "Precision Bush",
  "Eq. Shaft.jpg": "Equalizer Shaft",
  "Flange.jpg": "Machined Flange",
  "Sleeve Yoke.jpg": "Sleeve Yoke",
  "Slip Yoke.jpg": "Slip Yoke",
  "Spindle.jpg": "Forged Spindle",
};
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

function getProductName(filename: string) {
  return PRODUCT_NAME_MAP[filename] ?? cleanLabel(filename);
}

export function ProductVisualsSection({
  variant = "slider",
}: {
  variant?: "slider" | "detailed-grid";
}) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const visualNotes = [
    "OEM-grade finish",
    "Production-ready geometry",
    "Traceable batch quality",
  ];

  useEffect(() => {
    if (!carouselApi) return;

    const interval = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 3200);

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <section className="page-grid-surface-secondary overflow-x-clip pb-14 pt-0 sm:pb-24 sm:pt-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Product Visuals</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Machined components gallery</h2>
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

        {variant === "slider" ? (
          <Reveal delay={0.08}>
            <Carousel
              setApi={setCarouselApi}
              opts={{ align: "start", loop: true }}
              className="mt-10 min-w-0 px-1 sm:px-2"
            >
              <CarouselContent className="-ml-5">
                {PRODUCT_PHOTOS.map((item) => (
                  <CarouselItem
                    key={item.relativePath}
                    className="basis-[92%] pl-5 sm:basis-1/2 lg:basis-1/3"
                  >
                    <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-[var(--shadow-elegant)]">
                      <div className="flex aspect-[16/10] items-center justify-center overflow-hidden bg-white p-5 sm:p-6">
                        <img
                          src={item.src}
                          alt={getProductName(item.filename)}
                          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="border-t border-border/80 px-5 py-4 sm:px-6">
                        <p className="font-display text-base font-semibold uppercase tracking-wide text-primary">
                          {getProductName(item.filename)}
                        </p>
                      </figcaption>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_PHOTOS.map((item, index) => {
              const relatedLine = PRODUCT_LINES[index % PRODUCT_LINES.length];

              return (
                <figure
                  key={item.relativePath}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:shadow-[var(--shadow-elegant)]"
                >
                  <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-white p-6">
                    <img
                      src={item.src}
                      alt={getProductName(item.filename)}
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 p-4">
                      <p className="font-display text-base font-semibold uppercase tracking-wide text-white">
                        {getProductName(item.filename)}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/75">
                        {relatedLine.category}
                      </p>
                    </figcaption>
                  </div>

                  <div className="grid grid-cols-2 gap-3 border-t border-border/80 p-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        Materials
                      </p>
                      <p className="mt-1 text-xs text-foreground">{relatedLine.materials}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                        Application
                      </p>
                      <p className="mt-1 text-xs text-foreground">{relatedLine.application}</p>
                    </div>
                  </div>
                </figure>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
