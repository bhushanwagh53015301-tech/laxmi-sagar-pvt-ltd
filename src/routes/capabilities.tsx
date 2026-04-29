import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { IMG } from "@/lib/site";
import { assetsFromCategory } from "@/lib/localAssets";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities - CNC, VMC, Induction Hardening | Laxmi Sagar Engineers" },
      {
        name: "description",
        content:
          "Multi-axis CNC, VMC machining, induction hardening, facing and centering, calibrated inspection - full precision manufacturing under one roof in Pune.",
      },
      { property: "og:title", content: "Capabilities | Laxmi Sagar Engineers" },
      {
        property: "og:description",
        content:
          "End-to-end forging job-work: facing to CNC to VMC to hardening to inspection to dispatch. Explore our full process and equipment list.",
      },
      { property: "og:image", content: IMG.cnc },
      { name: "twitter:image", content: IMG.cnc },
    ],
  }),
  component: CapabilitiesPage,
});

const PRODUCT_PHOTOS = assetsFromCategory("Product Photos");
const COMPANY_PHOTOS = assetsFromCategory("Company Photos");

const PRODUCT_LINES = [
  {
    category: "Transmission Gears",
    materials: "SAE 8620, 16MnCr5, 20MnCr5",
    size: "Up to 400 mm diameter, module up to 6",
    process: "Forging > CNC > hobbing/shaving > heat treatment > grinding",
    application: "CV and tractor transmission systems",
  },
  {
    category: "Transmission Shafts",
    materials: "EN8, EN19, EN24",
    size: "Dia 6-250 mm, length up to 600 mm",
    process: "Turning > milling > induction hardening > final inspection",
    application: "Automotive drivetrain and industrial shafts",
  },
  {
    category: "Machined Forgings",
    materials: "Carbon and alloy steels as per drawing",
    size: "0.5 kg to 20 kg forging range",
    process: "Forge shop > rough machining > finish machining > inspection",
    application: "Critical load-bearing components",
  },
  {
    category: "Precision Components",
    materials: "EN-series and OEM-specified grades",
    size: "Tolerance up to +/-5 microns on critical features",
    process: "CNC/VMC > hardening > grinding > gauge/CMM validation",
    application: "Safety-critical engineered assemblies",
  },
];

const PROCESS_MATRIX = [
  ["Forging", "2500T/1600T/1000T class press setup", "Near-net shape blanks, grain flow control"],
  ["CNC Turning", "Multi-axis CNC lines", "Repeatability and concentricity on critical diameters"],
  ["VMC Machining", "3-axis and 4-axis VMC", "Milling, drilling, and profile features in one setup"],
  ["Heat Treatment", "In-house induction hardening", "Controlled case depth and hardness window"],
  ["Metrology", "CMM, profile projector, roughness and hardness testing", "Traceable, documented quality checks"],
  ["Dispatch", "Final inspection + packing protocol", "Batch-level traceability and safe transit readiness"],
];

const CERT_DOWNLOADS = [
  { title: "ISO 9001 Certificate", file: "/certificates/iso-certificate.pdf" },
  { title: "ZED Certificate", file: "/certificates/zed-certificate.pdf" },
];

const CAPABILITY_FLOW = [
  {
    id: "infra",
    badge: "01 Infrastructure",
    title: "Advanced Manufacturing Infrastructure",
    description:
      "A disciplined facility layout designed for forged and machined component production with controlled movement from incoming material to final dispatch.",
    notes: [
      "25,000+ sq ft operating footprint with expansion planned beyond 40,000+ sq ft.",
      "Dedicated production zones for machining, heat treatment, inspection, and packing.",
      "Structured floor planning supports traceability, process discipline, and smoother execution.",
    ],
    images: [
      {
        src: COMPANY_PHOTOS[0]?.src ?? IMG.factory,
        alt: "Laxmi Sagar Engineers facility exterior",
      },
      {
        src: IMG.factory,
        alt: "Manufacturing facility infrastructure overview",
      },
      {
        src: IMG.heroFactory,
        alt: "Factory layout and industrial infrastructure",
      },
    ],
  },
  {
    id: "machine",
    badge: "02 Machine",
    title: "Machine Capacity & Production Readiness",
    description:
      "CNC, VMC, and supporting production equipment are aligned to handle forged parts with repeatable machining quality and practical job-work flexibility.",
    notes: [
      "Configured for turning, drilling, milling, and component-specific machining routes.",
      "Suitable for shafts, yokes, flanges, bushes, spindles, and similar precision parts.",
      "Machine availability is structured around throughput, dimensional control, and stable output.",
    ],
    images: PRODUCT_PHOTOS.slice(0, 5).map((item) => ({
      src: item.src,
      alt: cleanLabel(item.filename),
    })),
  },
  {
    id: "product",
    badge: "03 Product",
    title: "Product Range & Certified Systems",
    description:
      "Representative product coverage and certification support help show manufacturing scope, customer confidence, and reliable production readiness.",
    notes: [
      "Product examples highlight the range of parts supported across precision machining programs.",
      "Certificates reinforce process discipline, consistency, and customer-facing credibility.",
      "Visual proof of products and compliance helps present a stronger capability story.",
    ],
    images: [
      {
        src: PRODUCT_PHOTOS[0]?.src ?? IMG.parts,
        alt: "Representative machined product",
      },
      {
        src: COMPANY_PHOTOS[1]?.src ?? COMPANY_PHOTOS[0]?.src ?? IMG.factory,
        alt: "Manufacturing facility and company readiness",
      },
      {
        src: IMG.inspection,
        alt: "Inspection and quality verification setup",
      },
    ],
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

function CapabilityImageSlider({
  images,
  title,
}: {
  images: Array<{ src: string; alt: string }>;
  title: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3200);

    return () => {
      clearInterval(interval);
    };
  }, [api]);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-[var(--shadow-elegant)]">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {images.map((image) => (
            <CarouselItem key={`${title}-${image.alt}`} className="pl-0">
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

function CapabilityFlowSection() {
  return (
    <section className="bg-background py-14 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Manufacturing Setup & Quality Flow</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
            Infrastructure, machine capacity, and quality control in one clear flow.
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Ordered the way your client asked for it: infrastructure first, machine second, and quality control third.
          </p>
        </Reveal>

        <div className="mt-10 space-y-8 sm:mt-14 sm:space-y-10">
          {CAPABILITY_FLOW.map((item, index) => {
            const reversed = index % 2 === 1;

            return (
              <Reveal key={item.id} delay={index * 0.08}>
                <article className="grid gap-6 rounded-[2rem] border border-border/70 bg-card/90 p-5 shadow-sm sm:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
                  <div className={reversed ? "lg:order-2" : ""}>
                    <div className="inline-flex rounded-full border border-amber/30 bg-amber/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-amber">
                      {item.badge}
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold text-primary sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.description}
                    </p>
                    <div className="mt-5 space-y-3">
                      {item.notes.map((note) => (
                        <div
                          key={note}
                          className="rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground"
                        >
                          {note}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <CapabilityImageSlider images={item.images} title={item.title} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Integrated precision machining."
        subtitle="From first cut to final inspection under one roof."
        image={IMG.cnc}
        contentClassName="max-w-6xl"
        titleClassName="lg:whitespace-nowrap lg:text-[3.2rem]"
      />

      <CapabilityFlowSection />

      {/* <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Product-Wise Capability</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Product categories with technical scope</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Detailed capability snapshot for procurement and engineering teams evaluating fit, process maturity, and production readiness.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:hidden">
            {PRODUCT_LINES.map((line) => (
              <article key={line.category} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-primary-foreground">
                    {line.category}
                  </span>
                  <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    {line.size}
                  </span>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Materials</p>
                    <p className="mt-1 text-foreground">{line.materials}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Process Route</p>
                    <p className="mt-1 text-foreground">{line.process}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Application</p>
                    <p className="mt-1 text-foreground">{line.application}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-border bg-card md:block">
            <table className="w-full min-w-[860px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {["Category", "Materials", "Size / Range", "Process Route", "Application"].map((col) => (
                    <th key={col} className="px-5 py-4 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="[&_tr:nth-child(even)]:bg-secondary/45">
                {PRODUCT_LINES.map((line) => (
                  <tr key={line.category} className="border-b border-border/70 align-top last:border-b-0">
                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-full bg-primary px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary-foreground">
                        {line.category}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{line.materials}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{line.size}</td>
                    <td className="px-5 py-4 font-mono text-xs text-muted-foreground">{line.process}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{line.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* <section className="bg-secondary py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Process Capability Matrix</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Stage-wise process and quality controls</h2>
          </Reveal>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {["Stage", "Infrastructure", "Control Objective"].map((col) => (
                    <th key={col} className="px-5 py-4 text-left font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PROCESS_MATRIX.map((row) => (
                  <tr key={row[0]} className="border-b border-border/70 align-top last:border-b-0">
                    <td className="px-5 py-4 font-display text-sm font-semibold text-primary">{row[0]}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row[1]}</td>
                    <td className="px-5 py-4 text-sm text-muted-foreground">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}


      {/* <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Proof & Compliance</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Certification downloads</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Procurement teams can review current quality credentials directly from this page.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CERT_DOWNLOADS.map((cert) => (
              <a
                key={cert.title}
                href={cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
              >
                <p className="font-display text-base font-semibold text-primary">{cert.title}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Open PDF
                </p>
              </a>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}


