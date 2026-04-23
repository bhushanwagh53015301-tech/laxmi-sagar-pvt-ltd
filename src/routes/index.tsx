import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Cog, Cpu, Flame, ShieldCheck, ChevronRight } from "lucide-react";
import { IMG, SITE } from "@/lib/site";
import { assetsFromCategory } from "@/lib/localAssets";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laxmi Sagar Engineers — Precision Forged. Precision Machined." },
      {
        name: "description",
        content:
          "45+ years delivering forged & machined components to India's top automotive and off-highway OEMs. CNC, VMC, induction hardening, inspection — all under one roof in Pune.",
      },
      { property: "og:title", content: "Laxmi Sagar Engineers — Precision Forged. Precision Machined." },
      {
        property: "og:description",
        content:
          "Pune-based precision engineering since 1980. Forging, CNC, VMC, hardening and inspection for automotive, tractor and diesel engine OEMs.",
      },
      { property: "og:image", content: IMG.heroForge },
      { name: "twitter:image", content: IMG.heroForge },
    ],
  }),
  component: HomePage,
});

const SLIDES = [
  {
    img: IMG.heroForge,
    eyebrow: "Forging Excellence Since 1980",
    title: "Precision Forged.\nPrecision Machined.",
    sub: "Four decades of jobwork excellence for India's leading OEMs across automotive, off-highway and industrial sectors.",
  },
  {
    img: IMG.heroCnc,
    eyebrow: "CNC + VMC Capability",
    title: "Tolerances You\nCan Trust.",
    sub: "Multi-axis CNC and VMC lines deliver micron-level precision on safety-critical components — every batch, every shift.",
  },
  {
    img: IMG.heroFactory,
    eyebrow: "End-to-End Manufacturing",
    title: "From Billet\nto Dispatch.",
    sub: "Forging, facing, centring, turning, milling, induction hardening and final inspection — all under one roof in Kuruli, Pune.",
  },
];

function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = SLIDES[i];

  return (
    <section className="relative isolate h-[86svh] min-h-[500px] overflow-hidden bg-primary text-primary-foreground sm:h-[100svh] sm:min-h-[640px]">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img src={s.img} alt="" className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, oklch(0.18 0.06 258 / 0.92) 0%, oklch(0.31 0.10 258 / 0.7) 50%, oklch(0.31 0.10 258 / 0.4) 100%)",
        }}
      />
      <div className="bp-grid absolute inset-0 text-white/30" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-amber/40 bg-amber/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-amber backdrop-blur sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              {s.eyebrow}
            </div>
            <h1 className="whitespace-pre-line font-display text-3xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {s.title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-6 sm:text-lg">
              {s.sub}
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <MagneticButton to="/contact" variant="amber">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton to="/capabilities" variant="outline">
                View Capabilities
              </MagneticButton>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center gap-3 sm:mt-12">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1 rounded-full transition-all ${
                idx === i ? "w-12 bg-amber" : "w-6 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="relative bg-background py-16 sm:py-32">
      <div className="bp-grid-fine pointer-events-none absolute inset-0 text-primary/40" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 md:grid-cols-2 md:gap-14 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            // Who We Are
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Engineering trust,<br />one component at a time.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Founded in {SITE.established} in Pune, Laxmi Sagar Engineers has grown from a single-shed
            jobwork unit into a fully-integrated precision manufacturing facility serving India's
            largest commercial vehicle, tractor and diesel engine OEMs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Our edge is consistency — repeatable micron-level tolerances on safety-critical
            forged & machined components, batch after batch, year after year.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Read our story
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-amber/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]">
              <img src={IMG.factory} alt="Laxmi Sagar factory floor" className="h-[480px] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-elegant)]">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber">Established</div>
              <div className="font-display text-4xl font-bold">{SITE.established}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatsStrip() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function CountUp({
    end,
    start,
    suffix = "",
    suffixClassName = "",
    duration = 1400,
  }: {
    end: number;
    start: boolean;
    suffix?: string;
    suffixClassName?: string;
    duration?: number;
  }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!start) {
        setValue(0);
        return;
      }

      setValue(0);
      const startTs = performance.now();
      const tick = () => {
        const elapsed = performance.now() - startTs;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const next = Math.round(end * eased);
        setValue(next);

        if (progress >= 1) {
          setValue(end);
          return;
        }

        rafId = window.requestAnimationFrame(tick);
      };

      let rafId = window.requestAnimationFrame(tick);
      return () => window.cancelAnimationFrame(rafId);
    }, [duration, end, start]);

    const display = end >= 1000 ? value.toLocaleString("en-IN") : String(value);

    return (
      <span>
        {display}
        {suffix ? <span className={suffixClassName}>{suffix}</span> : null}
      </span>
    );
  }

  const stats = [
    { value: 25, suffix: "+", label: "Years of Engineering Expertise" },
    { value: 25000, suffix: "+ sq.ft.", label: "Manufacturing Facility" },
    { value: 25, suffix: "+", label: "CNC & VMC Machines" },
    { value: 0, suffix: "", suffixClassName: "", label: "Certified Quality System", staticNumber: "ISO 9001:2015" },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-primary py-12 sm:py-16">
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/30" />
      <div className="relative mx-auto max-w-[1700px] px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-[1fr_1.35fr_1fr_1.25fr]">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`min-w-0 px-2 text-left sm:px-3 lg:px-5 ${index > 0 ? "lg:border-l lg:border-white/10" : ""}`}
            >
              <p className="break-words font-mono text-[1rem] font-semibold leading-tight tracking-[-0.03em] text-amber drop-shadow-[0_1px_0_rgba(0,0,0,0.35)] sm:text-[2.1rem] sm:leading-none sm:tracking-[0] lg:text-[2.7rem]">
                {item.staticNumber ? (
                  item.staticNumber
                ) : (
                  <CountUp
                    end={item.value}
                    start={hasStarted}
                    suffix={item.suffix}
                    suffixClassName={item.suffixClassName}
                  />
                )}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 sm:text-xs sm:tracking-[0.3em]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CAPS = [
  {
    icon: Cog,
    title: "Precision CNC Turning",
    desc: "Multi-axis CNC lines for high-volume turned components with consistent micron tolerances.",
    img: IMG.cnc,
  },
  {
    icon: Cpu,
    title: "VMC Machining",
    desc: "Vertical machining centres for complex milling, drilling and contouring on forged blanks.",
    img: IMG.vmc,
  },
  {
    icon: Flame,
    title: "Induction Hardening",
    desc: "In-house induction hardening for case-depth control on shafts, gears and pins.",
    img: IMG.hardening,
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    desc: "Calibrated CMM, profile projectors and gauges with full traceability and documentation.",
    img: IMG.inspection,
  },
];

function CapabilitiesGrid() {
  return (
    <section className="bg-secondary py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Capabilities</div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">
            One roof. Every step. Total accountability.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPS.map((c) => (
            <StaggerItem key={c.title}>
              <div className="sheen group relative h-full overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-md bg-amber text-amber-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-primary hover:text-amber"
            >
              Explore full capabilities <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CLIENT_LOGOS = assetsFromCategory("Client Logos");

function ClientMarquee() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="overflow-hidden border-y border-border bg-background py-14">
      <Reveal className="mb-10 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Trusted By</div>
        <h3 className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">
          Powering India's most demanding OEMs
        </h3>
      </Reveal>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-12">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex h-20 min-w-[220px] items-center justify-center rounded-xl border border-border bg-card px-8 shadow-sm transition-transform hover:-translate-y-0.5"
            >
              <img src={logo.src} alt={logo.filename} className="h-12 w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground sm:py-32">
      <div className="absolute inset-0">
        <img src={IMG.parts} alt="" className="h-full w-full object-cover opacity-15" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, oklch(0.18 0.06 258 / 0.95), oklch(0.31 0.10 258 / 0.85))",
          }}
        />
      </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Get Started</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            Have a drawing? We'll quote it within 48 hours.
          </h2>
          <p className="mt-4 text-white/75">
            Send your part drawing, target volume and tolerances — our engineering team will revert
            with a feasibility note and indicative pricing.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <MagneticButton to="/contact" variant="amber">
            Request a Quote <ArrowRight className="h-5 w-5" />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <HeroSlider />
      <IntroSection />
      <StatsStrip />
      <CapabilitiesGrid />
      <ClientMarquee />
      <CtaBanner />
    </>
  );
}
