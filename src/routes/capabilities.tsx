import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Download, FileText, Microscope, ShieldCheck } from "lucide-react";
import { IMG } from "@/lib/site";
import { assetsFromCategory } from "@/lib/localAssets";
import { PageHero } from "@/components/PageHero";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
const instrumentListPdf = "/downloads/instrument-list.pdf";
const machineryListPdf = "/downloads/machinery-list.pdf";
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
const MACHINE_PHOTOS = PRODUCT_PHOTOS.filter((item) => /(^| \/ )machines$/i.test(item.subPath) || /machine/i.test(item.filename));
const COMPANY_PHOTOS = assetsFromCategory("Company Photos");
const TRACEABILITY_IMAGES = [
  {
    src: IMG.inspection,
    alt: "Inspection and traceability checks",
  },
  {
    src: PRODUCT_PHOTOS[0]?.src ?? IMG.parts,
    alt: "Finished component ready for quality validation",
  },
  {
    src: COMPANY_PHOTOS[0]?.src ?? IMG.factory,
    alt: "Manufacturing floor supporting traceable production flow",
  },
];

const PROCESS_STEPS = [
  {
    n: "01",
    t: "Raw Forging",
    info: "Source-approved forged blanks are verified for heat, dimensions, and visible defects before release.",
  },
  {
    n: "02",
    t: "Facing & Centering",
    info: "Datum faces and centers are prepared to ensure stable clamping and repeatable downstream machining.",
  },
  {
    n: "03",
    t: "CNC Turning",
    info: "Critical diameters and profiles are machined on CNC with in-process gauging for tolerance control.",
  },
  {
    n: "04",
    t: "VMC Machining",
    info: "Milling, drilling, and feature generation are completed in controlled setups for positional accuracy.",
  },
  {
    n: "05",
    t: "Induction Hardening",
    info: "Hardness and case depth are controlled to drawing requirements for wear resistance and durability.",
  },
  {
    n: "06",
    t: "Final Inspection",
    info: "Each batch is validated using calibrated gauges and inspection records for full traceability.",
  },
  {
    n: "07",
    t: "Dispatch",
    info: "Approved parts are packed as per customer protocol and dispatched with complete lot documentation.",
  },
];

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
    size: "Dia 6-450 mm, Length up to 1200 mm",
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

const FLOW = [
  { icon: ClipboardCheck, t: "Incoming Material", d: "Mill test certificate verification, dimensional check on raw forgings, batch tagging." },
  { icon: ShieldCheck, t: "In-Process Patrol", d: "First-piece approval, hourly SPC sampling, gauge R&R verified at every change-over." },
  { icon: Microscope, t: "Final Inspection", d: "100% gauge check on critical features + AQL sampling on dimensional and surface finish." },
  { icon: FileText, t: "Documentation", d: "PSW / PPAP-style report pack, traceability log, material certificate per batch." },
];

const INSTRUMENTS = [
  { name: "Digital Height Gauges", spec: "Trimos 0–1200 mm · Mitutoyo 0–450 mm" },
  { name: "Profile Projector", spec: "0–550 mm · Optical form & contour verification" },
  { name: "Bench Centres & V-Blocks", spec: "1000 mm bench centre · Granite plates up to 1000×750 mm" },
  { name: "Precision Micrometers", spec: "Mitutoyo · 0–125 mm · LC 0.010 mm" },
  { name: "Bore Gauges", spec: "Mitutoyo · 18–160 mm range" },
  { name: "APG with Auto Offset", spec: "Component-specific gauging built into the production process." },
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
      "Sub-contracting workload is absorbed through flexible route planning and machine readiness.",
    ],
    download: {
      label: "Download Machinery List",
      file: machineryListPdf,
    },
    images: (MACHINE_PHOTOS.length ? MACHINE_PHOTOS : PRODUCT_PHOTOS).slice(0, 8).map((item) => ({
      src: item.src,
      alt: cleanLabel(item.filename),
    })),
  },
  {
    id: "quality",
    badge: "03 Quality",
    title: "Quality Systems & Production Confidence",
    description:
      "Structured inspection and certified controls are embedded in production to maintain consistency, traceability, and OEM-grade confidence.",
    notes: [
      "In-process and final-stage quality checks are integrated across machining routes.",
      "Certificate-backed systems reinforce process discipline and customer confidence.",
      "Inspection records and batch-level traceability support reliable audits and repeat orders.",
    ],
    download: {
      label: "Download Instrument List",
      file: instrumentListPdf,
    },
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
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-contain p-3"
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
    <section className="page-grid-surface overflow-x-clip pt-14 pb-2 sm:pt-24 sm:pb-4">
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
                <article className="grid gap-6 overflow-hidden rounded-[2rem] border border-border/70 bg-card/90 p-5 shadow-sm sm:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
                  <div className={`min-w-0 ${reversed ? "lg:order-2" : ""}`}>
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
                    {item.download ? (
                      <a
                        href={item.download.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-amber hover:text-amber"
                      >
                        <Download className="h-4 w-4" />
                        {item.download.label}
                      </a>
                    ) : null}
                  </div>

                  <div className={`min-w-0 ${reversed ? "lg:order-1" : ""}`}>
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

function ProcessFlowSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="relative overflow-x-clip bg-primary py-14 text-primary-foreground sm:py-24">
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            The Process
          </div>
          <h2 className="mt-3 max-w-[14ch] font-display text-3xl font-bold leading-tight sm:max-w-none sm:text-4xl">
            From raw forging to dispatch - one continuous flow.
          </h2>
          <p className="mt-4 text-white/75">
            Every part traced through every step. Process discipline is what keeps our
            first-pass yield above 99.6%.
          </p>
        </Reveal>

        <div className="relative mt-10 pb-8 sm:mt-16 sm:pb-12">
          <svg
            viewBox="0 0 1000 60"
            className="absolute left-0 right-0 top-8 hidden h-12 w-full xl:block"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 20 30 L 980 30"
              stroke="oklch(0.78 0.16 70)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7" stagger={0.12}>
            {PROCESS_STEPS.map((step, index) => {
              const isActive = activeStep === index;
              const showAbove = index % 2 === 0;

              return (
                <StaggerItem key={step.n}>
                  <div
                    className="group relative flex flex-col items-center text-center"
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {isActive && showAbove ? (
                      <div className="mb-3 w-full rounded-lg border border-amber/30 bg-primary/90 p-3 text-left lg:hidden">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber">
                          {step.n} · {step.t}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-white/85">{step.info}</p>
                      </div>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 font-display text-xl font-bold transition-all ${
                        isActive
                          ? "scale-110 border-amber bg-amber text-primary"
                          : "border-amber bg-primary text-amber group-hover:scale-110 group-hover:bg-amber group-hover:text-primary"
                      }`}
                      aria-label={`Show details for ${step.t}`}
                    >
                      {step.n}
                    </button>
                    <div className="mt-4 max-w-[12ch] text-balance font-display text-sm font-semibold uppercase tracking-wider">
                      {step.t}
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : showAbove ? 6 : -6,
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={`pointer-events-none absolute z-20 hidden w-[230px] rounded-lg border border-amber/40 bg-primary/95 p-3 text-left shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur xl:block ${
                        showAbove ? "bottom-[122px]" : "top-[122px]"
                      } ${index === 0 ? "left-0 translate-x-0" : ""} ${
                        index > 0 && index < PROCESS_STEPS.length - 1
                          ? "left-1/2 -translate-x-1/2"
                          : ""
                      } ${index === PROCESS_STEPS.length - 1 ? "right-0 translate-x-0" : ""}`}
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber">
                        {step.n} · {step.t}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-white/85">{step.info}</p>
                    </motion.div>

                    {isActive && !showAbove ? (
                      <div className="mt-3 w-full rounded-lg border border-amber/30 bg-primary/90 p-3 text-left lg:hidden">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber">
                          {step.n} · {step.t}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-white/85">{step.info}</p>
                      </div>
                    ) : null}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

function InspectionInDepthSection() {
  return (
    <section className="page-grid-surface-secondary overflow-x-clip pt-10 pb-12 sm:pt-16 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Inspection Workflow</div>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">From incoming to dispatch - checked at every gate.</h2>
        </Reveal>

        <StaggerGroup className="mt-8 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {FLOW.map((item, index) => (
            <StaggerItem key={item.t}>
              <article className="relative h-full rounded-xl border border-border bg-card p-7 shadow-sm">
                <div className="font-mono text-5xl font-bold text-amber/30">0{index + 1}</div>
                <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-primary">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.08}>
          <div className="mt-12">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Calibrated Instruments</div>
            <h3 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Inspection lab</h3>
          </div>
        </Reveal>
        <StaggerGroup className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2">
          {INSTRUMENTS.map((it) => (
            <StaggerItem key={it.name}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-amber/15 text-amber">
                  <Microscope className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold text-primary">{it.name}</div>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">{it.spec}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function ClosingCtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-12 text-primary-foreground sm:py-16">
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/20" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Closing CTA Band</div>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Share your drawing and target volume to start a capability review.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <MagneticButton to="/contact" variant="amber">
            Enquire Now <ArrowRight className="h-5 w-5" />
          </MagneticButton>
        </Reveal>
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
      <InspectionInDepthSection />
      <ClosingCtaBand />

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


