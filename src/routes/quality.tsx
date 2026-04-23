import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, ClipboardCheck, Microscope, FileText, Award, Download } from "lucide-react";
import { IMG, SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Compliance — ISO 9001:2015 | Laxmi Sagar Engineers" },
      {
        name: "description",
        content:
          "ISO 9001:2015 certified precision manufacturer. In-process & final inspection, calibrated CMM, full traceability and OEM-grade documentation.",
      },
      { property: "og:title", content: "Quality & Compliance | Laxmi Sagar Engineers" },
      {
        property: "og:description",
        content:
          "Quality systems, calibrated inspection lab, traceability and certifications you can rely on for safety-critical components.",
      },
      { property: "og:image", content: IMG.quality },
      { name: "twitter:image", content: IMG.quality },
    ],
  }),
  component: QualityPage,
});

const FLOW = [
  { icon: ClipboardCheck, t: "Incoming Material", d: "Mill test certificate verification, dimensional check on raw forgings, batch tagging." },
  { icon: ShieldCheck, t: "In-Process Patrol", d: "First-piece approval, hourly SPC sampling, gauge R&R verified at every change-over." },
  { icon: Microscope, t: "Final Inspection", d: "100% gauge check on critical features + AQL sampling on dimensional and surface finish." },
  { icon: FileText, t: "Documentation", d: "PSW / PPAP-style report pack, traceability log, material certificate per batch." },
];

const INSTRUMENTS = [
  { name: "CMM (Coordinate Measuring Machine)", spec: "Accuracy 2.5µm + L/300" },
  { name: "Profile Projector", spec: "Magnification up to 100×" },
  { name: "Surface Roughness Tester", spec: "Ra range 0.05 – 12.5µm" },
  { name: "Hardness Tester (Rockwell + Vickers)", spec: "HRC, HRB, HV scales" },
  { name: "Air Gauges & Plug Gauges", spec: "Calibrated, traceable to NABL" },
  { name: "Bench Centres & V-Blocks", spec: "Run-out check, granite surface plate" },
];

const CERTS = [
  { name: "ISO 9001:2015 Certificate", file: "iso-9001.pdf" },
  { name: "Udyam Registration", file: "udyam.pdf" },
  { name: "GST Registration", file: "gst.pdf" },
  { name: "IEC Certificate", file: "iec.pdf" },
];

function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Compliance"
        title="Quality systems you can trust."
        subtitle="Calibrated checks, controlled processes, and full traceability."
        image={IMG.quality}
        contentClassName="max-w-6xl"
        titleClassName="lg:whitespace-nowrap lg:text-[3.2rem]"
      />

      {/* ISO Highlight */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
            <Reveal>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Certified Quality System</div>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
                ISO 9001:2015 — across every line, every shift.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Our quality management system covers incoming material, process control, calibrated inspection, corrective action and customer complaint resolution. Audits — internal and customer — are routine.
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
      </section>

      {/* Inspection Workflow */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Inspection Workflow</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">From incoming to dispatch — checked at every gate.</h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Instruments */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Calibrated Instruments</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Inspection lab</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2">
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

      {/* Traceability */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="bp-grid pointer-events-none absolute inset-0 text-white/30" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Our Promise</div>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">Full batch traceability — heat number to dispatch.</h2>
            <p className="mt-5 text-white/75">Every batch we run carries a unique identifier. From the supplier mill test certificate through every machining op, hardening cycle and inspection record — it's logged, signed and archived.</p>
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
      </section>

      {/* Certificates download */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Certifications & Registrations</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Documentation</h2>
            <p className="mt-3 text-muted-foreground">Need a copy for vendor onboarding? Email us and we'll share within 24 hours.</p>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

          <Reveal delay={0.15}>
            <div className="mt-12 grid gap-3 rounded-xl border border-border bg-secondary p-6 font-mono text-xs sm:grid-cols-2 lg:grid-cols-4">
              <div><span className="text-amber">CIN:</span> {SITE.cin}</div>
              <div><span className="text-amber">GST:</span> 27AABCL1234M1Z5</div>
              <div><span className="text-amber">IEC:</span> AABCL1234M</div>
              <div><span className="text-amber">Udyam:</span> UDYAM-MH-26-0123456</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
