import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Cog, Cpu, Flame, Ruler, Microscope, Wrench, ArrowRight } from "lucide-react";
import { IMG } from "@/lib/site";
import { assetsFromCategory } from "@/lib/localAssets";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Capabilities — CNC, VMC, Induction Hardening | Laxmi Sagar Engineers" },
      {
        name: "description",
        content:
          "Multi-axis CNC, VMC machining, induction hardening, facing & centring, calibrated inspection — full precision manufacturing under one roof in Pune.",
      },
      { property: "og:title", content: "Capabilities | Laxmi Sagar Engineers" },
      {
        property: "og:description",
        content:
          "End-to-end forging job-work: facing → CNC → VMC → hardening → inspection → dispatch. Explore our full process and equipment list.",
      },
      { property: "og:image", content: IMG.cnc },
      { name: "twitter:image", content: IMG.cnc },
    ],
  }),
  component: CapabilitiesPage,
});

const INFRA = [
  { icon: Cog, title: "CNC Turning", specs: "Up to 8 multi-axis CNC lines · Ø6–Ø250mm · Bar & chuck", img: IMG.cnc },
  { icon: Cpu, title: "VMC Machining", specs: "3-axis & 4-axis VMC · Bed up to 1000×500mm · ±0.01mm", img: IMG.vmc },
  { icon: Flame, title: "Induction Hardening", specs: "In-house single-shot & scan hardening · 1.5–4mm case depth", img: IMG.hardening },
  { icon: Ruler, title: "Facing & Centering", specs: "Auto facing-centring lines · throughput 600+ pcs/hr", img: IMG.facing },
  { icon: Microscope, title: "Inspection Lab", specs: "CMM · profile projector · hardness · roughness · gauges", img: IMG.inspection },
  { icon: Wrench, title: "Tool Room", specs: "In-house fixturing & tooling for fast NPD turnaround", img: IMG.factory },
];

const STEPS = [
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

const COMPONENTS = [
  { name: "Transmission Shafts", mat: "EN8 / EN24", tol: "±0.01mm" },
  { name: "Crankshaft Pins", mat: "20MnCr5", tol: "±0.008mm" },
  { name: "Differential Pinions", mat: "16MnCr5", tol: "±0.012mm" },
  { name: "Engine Valves", mat: "SUH3", tol: "±0.005mm" },
  { name: "Gear Blanks", mat: "SAE 8620", tol: "±0.015mm" },
  { name: "Hub Spindles", mat: "EN19", tol: "±0.01mm" },
  { name: "Wheel Studs", mat: "10B21", tol: "±0.008mm" },
  { name: "King Pins", mat: "EN24", tol: "±0.01mm" },
  { name: "Camshafts", mat: "SAE 1045", tol: "±0.012mm" },
  { name: "Connecting Rods", mat: "C70S6", tol: "±0.01mm" },
];

const PRODUCT_PHOTOS = assetsFromCategory("Product Photos");
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

function cleanLabel(text: string) {
  return text
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// The Process</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">From raw forging to dispatch — one continuous flow.</h2>
          <p className="mt-4 text-white/75">Every part traced through every step. Process discipline is what keeps our first-pass yield above 99.6%.</p>
        </Reveal>

        <div className="relative mt-16">
          <svg viewBox="0 0 1000 60" className="absolute left-0 right-0 top-8 hidden h-12 w-full lg:block" preserveAspectRatio="none">
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

          <StaggerGroup className="grid gap-8 sm:grid-cols-2 lg:grid-cols-7" stagger={0.12}>
            {STEPS.map((s, index) => {
              const isActive = activeStep === index;
              const showAbove = index % 2 === 0;

              return (
              <StaggerItem key={s.n}>
                <div
                  className="group relative flex flex-col items-center text-center"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {isActive && showAbove ? (
                    <div className="mb-3 w-full rounded-lg border border-amber/30 bg-primary/90 p-3 text-left lg:hidden">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber">
                        {s.n} · {s.t}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-white/85">{s.info}</p>
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
                    aria-label={`Show details for ${s.t}`}
                  >
                    {s.n}
                  </button>
                  <div className="mt-4 font-display text-sm font-semibold uppercase tracking-wider">{s.t}</div>

                  <motion.div
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      y: isActive ? 0 : showAbove ? 6 : -6,
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`pointer-events-none absolute z-20 hidden w-[230px] rounded-lg border border-amber/40 bg-primary/95 p-3 text-left shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur lg:block ${
                      showAbove ? "bottom-[122px]" : "top-[122px]"
                    } ${index === 0 ? "left-0 translate-x-0" : ""} ${
                      index > 0 && index < STEPS.length - 1 ? "left-1/2 -translate-x-1/2" : ""
                    } ${index === STEPS.length - 1 ? "right-0 translate-x-0" : ""}`}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber">{s.n} · {s.t}</p>
                    <p className="mt-2 text-xs leading-relaxed text-white/85">{s.info}</p>
                  </motion.div>

                  {isActive && !showAbove ? (
                    <div className="mt-3 w-full rounded-lg border border-amber/30 bg-primary/90 p-3 text-left lg:hidden">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber">
                        {s.n} · {s.t}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-white/85">{s.info}</p>
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

function ProductVisualsSection() {
  const visualNotes = [
    "OEM-grade finish",
    "Production-ready geometry",
    "Traceable batch quality",
  ];

  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Product Visuals</div>
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
                  <div className="absolute left-3 top-3 rounded-full border border-white/25 bg-primary/65 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85 backdrop-blur">
                    Sample {String(index + 1).padStart(2, "0")}
                  </div>
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

      {/* Infrastructure */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Manufacturing Infrastructure</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Equipment & lines</h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INFRA.map((it) => (
              <StaggerItem key={it.title}>
                <div className="sheen group h-full overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-[var(--shadow-elegant)]">
                  <div className="relative h-44 overflow-hidden">
                    <img src={it.img} alt={it.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-md bg-amber text-amber-foreground">
                      <it.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-primary">{it.title}</h3>
                    <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">{it.specs}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15}>
            <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Added From PDF Brief</div>
              <h3 className="mt-3 font-display text-2xl font-bold text-primary">Infrastructure at a glance</h3>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 text-left font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Parameter</th>
                      <th className="py-3 text-left font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Current Plant Size", "25,000+ sq ft"],
                      ["Planned Expansion", "40,000+ sq ft"],
                      ["CNC Lathes", "25+ machines"],
                      ["VMC Machines", "3–4 machines"],
                      ["Induction Hardening", "1 unit"],
                      ["Facing & Centering", "Dedicated line"],
                      ["Quality Lab", "Calibrated instruments"],
                      ["Location", "Kuruli, Pune (near Chakan industrial belt)"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-b border-border/70 last:border-0">
                        <td className="py-3 pr-6 font-display text-sm font-semibold text-primary">{row[0]}</td>
                        <td className="py-3 text-sm text-muted-foreground">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProcessFlow />
      <ProductVisualsSection />

      <section className="bg-background py-24">
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
      </section>

      <section className="bg-secondary py-24">
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
      </section>

      {/* Component expertise */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// What We Make</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Component expertise</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">Hover any tile to see typical material and tolerance band — we work to drawing.</p>
          </Reveal>

          <StaggerGroup className="mt-12 flex flex-wrap gap-3">
            {COMPONENTS.map((c) => (
              <StaggerItem key={c.name}>
                <div className="group relative cursor-default rounded-full border border-border bg-card px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary transition-all hover:-translate-y-0.5 hover:border-amber hover:bg-amber hover:text-amber-foreground hover:shadow-[var(--shadow-amber)]">
                  {c.name}
                  <div className="pointer-events-none absolute -top-16 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-3 py-2 text-left opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-amber">{c.mat}</div>
                    <div className="font-mono text-xs text-white">Tol: {c.tol}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { k: "Materials", v: "EN8 / EN19 / EN24 · 16MnCr5 · 20MnCr5 · SAE 1045 / 8620 · C70S6" },
                { k: "Size Range", v: "Ø6 – Ø250 mm · length up to 600 mm" },
                { k: "Tolerances", v: "Up to ±5 microns on critical features" },
              ].map((it) => (
                <div key={it.k} className="rounded-xl border border-border bg-card p-6">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber">{it.k}</div>
                  <div className="mt-2 font-display text-base font-semibold text-primary">{it.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton to="/contact" variant="amber">
                Get a feasibility note <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24">
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
      </section>
    </>
  );
}
