import { createFileRoute } from "@tanstack/react-router";
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
  { n: "01", t: "Raw Forging" },
  { n: "02", t: "Facing & Centering" },
  { n: "03", t: "CNC Turning" },
  { n: "04", t: "VMC Machining" },
  { n: "05", t: "Induction Hardening" },
  { n: "06", t: "Final Inspection" },
  { n: "07", t: "Dispatch" },
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

function cleanLabel(text: string) {
  return text
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function ProcessFlow() {
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

          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-7" stagger={0.12}>
            {STEPS.map((s) => (
              <StaggerItem key={s.n}>
                <div className="group relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-amber bg-primary font-display text-xl font-bold text-amber transition-all group-hover:scale-110 group-hover:bg-amber group-hover:text-primary">
                    {s.n}
                  </div>
                  <div className="mt-4 font-display text-sm font-semibold uppercase tracking-wider">{s.t}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
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
        title="Multi-axis precision. Vertically integrated."
        subtitle="From the first cut to final inspection — we own every step. That's how we deliver consistent micron-level quality at OEM volumes."
        image={IMG.cnc}
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
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Product Visuals</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Machined components gallery</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Representative component photography mapped to our production and machining expertise.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_PHOTOS.map((item) => (
              <figure key={item.relativePath} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
                <img src={item.src} alt={item.filename} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
                <figcaption className="border-t border-border p-3">
                  <p className="text-sm font-semibold text-primary">{cleanLabel(item.filename)}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Production Sample</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
