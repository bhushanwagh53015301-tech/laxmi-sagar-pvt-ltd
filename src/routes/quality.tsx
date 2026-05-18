import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  Microscope,
  FileText,
  GraduationCap,
  TrendingUp,
  HeartHandshake,
  Briefcase,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { ProductVisualsSection } from "@/components/ProductVisualsSection";
import { ArrowRight } from "lucide-react";
import qualityHeroImage from "@/assets/Product Photos/Spindle.webp";

const FLOW = [
  { icon: ClipboardCheck, t: "Incoming Material", d: "Mill test certificate verification, dimensional check on raw forgings, batch tagging." },
  { icon: ShieldCheck, t: "In-Process Patrol", d: "First-piece approval, hourly SPC sampling, gauge R&R verified at every change-over." },
  { icon: Microscope, t: "Final Inspection", d: "100% gauge check on critical features + AQL sampling on dimensional and surface finish." },
  { icon: FileText, t: "Documentation", d: "PSW / PPAP-style report pack, traceability log, material certificate per batch." },
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

const INSTRUMENTS = [
  { name: "Digital Height Gauges", spec: "Trimos 0–1200 mm · Mitutoyo 0–450 mm" },
  { name: "Profile Projector", spec: "0–550 mm · Optical form & contour verification" },
  { name: "Bench Centres & V-Blocks", spec: "1000 mm bench centre · Granite plates up to 1000×750 mm" },
  { name: "Precision Micrometers", spec: "Mitutoyo · 0–125 mm · LC 0.010 mm" },
  { name: "Bore Gauges", spec: "Mitutoyo · 18–160 mm range" },
  { name: "APG with Auto Offset", spec: "Component-specific gauging built into the production process." },
];

const COMPONENTS = [
  { name: "Axle Shafts" },
  { name: "Hub Spindles" },
  { name: "Transmission Shafts" },
  { name: "Yokes & Sleeve Yokes" },
  { name: "Companion Flanges" },
  { name: "King Pins" },
  { name: "Gear Blanks" },
  { name: "Differential Carriers" },
  { name: "Equalizer Shafts" },
  { name: "Trumpet & Axle Housings" },
];

const WHY_WORK_PERKS = [
  {
    icon: GraduationCap,
    t: "Hands-on Learning",
    d: "Train on multi-axis CNC, VMC, and induction hardening lines from day one.",
  },
  {
    icon: TrendingUp,
    t: "Clear Growth Path",
    d: "Operator to setter to line lead to supervisor with defined milestones and accountability.",
  },
  {
    icon: HeartHandshake,
    t: "OEM Program Exposure",
    d: "Contribute to heavy forging and precision machining programs for leading automotive OEMs.",
  },
  {
    icon: Briefcase,
    t: "Process-Driven Culture",
    d: "Work inside ISO 9001:2015 systems with traceable, auditable manufacturing workflows.",
  },
];

function ProcessFlow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="relative overflow-x-clip bg-primary py-14 text-primary-foreground sm:py-32">
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-4xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> The Process</div>
          <h2 className="mt-3 max-w-[14ch] font-display text-3xl font-bold leading-tight sm:max-w-none sm:text-4xl">From raw forging to dispatch - one continuous flow.</h2>
          <p className="mt-4 text-white/75">Every part traced through every step. Process discipline is what keeps our first-pass yield above 99.6%.</p>
        </Reveal>

        <div className="relative mt-10 pb-8 sm:mt-16 sm:pb-12">
          <svg viewBox="0 0 1000 60" className="absolute left-0 right-0 top-8 hidden h-12 w-full xl:block" preserveAspectRatio="none">
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
            {STEPS.map((s, index) => {
              const isActive = activeStep === index;
              const showAbove = index % 2 === 0;

              return (
                <StaggerItem key={s.n}>
                  <div
                    className="group relative flex flex-col items-center text-center"
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
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
                    <div className="mt-4 max-w-[12ch] text-balance font-display text-sm font-semibold uppercase tracking-wider">{s.t}</div>

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
                        index > 0 && index < STEPS.length - 1 ? "left-1/2 -translate-x-1/2" : ""
                      } ${index === STEPS.length - 1 ? "right-0 translate-x-0" : ""}`}
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber">
                        {s.n} · {s.t}
                      </p>
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

const CERTS = [
  { name: "ISO 9001:2015 Certificate", file: "iso-9001.pdf" },
  { name: "Udyam Registration", file: "udyam.pdf" },
  { name: "GST Registration", file: "gst.pdf" },
  { name: "IEC Certificate", file: "iec.pdf" },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Product systems you can trust."
        subtitle="Calibrated checks, controlled processes, and full traceability."
        image={qualityHeroImage}
        contentClassName="max-w-6xl"
        titleClassName="lg:whitespace-nowrap lg:text-[3.2rem]"
      />

      {/* <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
            <Reveal>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Certified Quality System</div>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
                ISO 9001:2015 - across every line, every shift.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Our quality management system covers incoming material, process control, calibrated inspection, corrective action and customer complaint resolution. Audits - internal and customer - are routine.
              </p>
              <p className="mt-3 text-muted-foreground">
                We design our control plans around the customer's PPAP / PSW requirements and ship parts with documentation procurement teams can file directly.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border-2 border-amber bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]">
                <div className="text-center">
                  <ShieldCheck className="mx-auto h-12 w-12 text-amber" />
                  <div className="mt-3 font-display text-3xl font-bold">ISO</div>
                  <div className="font-display text-2xl font-bold">9001:2015</div>
                  <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70">Certified</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section> */}

      <section className="page-grid-surface-secondary py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> What We Make</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Component expertise</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">Manufactured to drawing with controlled process and inspection.</p>
          </Reveal>

          <StaggerGroup className="mt-8 flex flex-wrap gap-3 sm:mt-12">
            {COMPONENTS.map((c) => (
              <StaggerItem key={c.name}>
                <div className="rounded-full border border-border bg-card px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary">
                  {c.name}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15}>
            <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-3">
              {[
                { k: "Materials", v: "EN8 / EN19 / EN24 · 42CrMo4 · 16MnCr5 · 20MnCr5 · SAE 1045 / 8620 · C70S6" },
                { k: "Size Range", v: "Dia 6 - 450 mm · Length up to 1200 mm" },
                { k: "Tolerances", v: "Up to +/-5 microns on critical features" },
              ].map((it) => (
                <div key={it.k} className="rounded-xl border border-border bg-card p-6">
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber">{it.k}</div>
                  <div className="mt-2 font-display text-base font-semibold text-primary">{it.v}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-16">
              <MagneticButton to="/contact" variant="amber">
                Get a feasibility note <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <ProductVisualsSection variant="detailed-grid" allowedExtensions={[".webp"]} />

      <section className="page-grid-surface py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
              Why work at Laxmi Sagar
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              A workshop that respects the craft.
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {WHY_WORK_PERKS.map((perk) => (
              <StaggerItem key={perk.t}>
                <div className="h-full rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-amber/15 text-amber">
                    <perk.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-primary">
                    {perk.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{perk.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-primary py-12 text-primary-foreground sm:py-16">
        <div className="bp-grid pointer-events-none absolute inset-0 text-white/20" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <Reveal className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
              Product Enquiry
            </div>
            <h2 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">
              Share your drawing and target quantity for a fast quote.
            </h2>
            <p className="mt-2 text-white/75">
              We will review feasibility, process route, and inspection plan based on your requirement.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <MagneticButton to="/contact" variant="amber">
                Enquire Now <ArrowRight className="h-5 w-5" />
              </MagneticButton>
              <MagneticButton to="/capabilities" variant="outline">
                View Capabilities
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* <section className="page-grid-surface-secondary py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Inspection Workflow</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">From incoming to dispatch - checked at every gate.</h2>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-6 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
            {FLOW.map((s, i) => (
              <StaggerItem key={s.t}>
                <div className="group relative h-full rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="font-mono text-5xl font-bold text-amber/30">0{i + 1}</div>
                  <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide text-primary">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="page-grid-surface py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Calibrated Instruments</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Inspection lab</h2>
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
      </section> */}

      {/* <section className="relative overflow-hidden bg-primary py-14 text-primary-foreground sm:py-24">
        <div className="bp-grid pointer-events-none absolute inset-0 text-white/30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Our Promise</div>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Full batch traceability - heat number to dispatch.</h2>
            <p className="mt-5 text-white/75">Every batch we run carries a unique identifier. From the supplier mill test certificate through every machining op, hardening cycle and inspection record - it's logged, signed and archived.</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {["Supplier MTC linked to batch ID", "Operator + machine + shift logged at every op", "Inspection records archived for 5+ years", "Recall traceability within 30 minutes"].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]">
              <img src={IMG.inspection} alt="Inspection" className="h-[420px] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Certifications & Registrations</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Documentation</h2>
            <p className="mt-3 text-muted-foreground">Need a copy for vendor onboarding? Email us and we'll share within 24 hours.</p>
          </Reveal>
          <StaggerGroup className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {CERTS.map((c) => (
              <StaggerItem key={c.name}>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent("Request: " + c.name)}`}
                  className="sheen group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                >
                  <Award className="h-8 w-8 text-amber" />
                  <div className="mt-5 flex-1 font-display text-sm font-semibold uppercase tracking-wide text-primary">{c.name}</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-amber">
                    <Download className="h-4 w-4" /> Request copy
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section> */}
    </>
  );
}
