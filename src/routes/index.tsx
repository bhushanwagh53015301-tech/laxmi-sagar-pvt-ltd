import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { IMG, SITE } from "@/lib/site";
import { assetsFromCategory } from "@/lib/localAssets";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";
import { ProductVisualsSection } from "@/components/ProductVisualsSection";
import companyBannerVideo from "@/assets/home-page-banner/DJI_0185 (1).webm";
import companyBannerImage from "@/assets/home-page-banner/DJI_0191.JPG";
import officeBannerImage from "@/assets/home-page-banner/LSE.jpg";
import ourStoryImage from "@/assets/DJI_0202.JPG";
import vmcMachineImage from "@/assets/Product Photos/machines/machine-8.jpeg";
import inductionMachineImage from "@/assets/Product Photos/machines/machine-4.jpeg";
import profileProjectorImage from "@/assets/Product Photos/machines/profile projector.jpeg";

const PRODUCT_PHOTOS = assetsFromCategory("Product Photos");
const MACHINE_PHOTOS = PRODUCT_PHOTOS.filter((item) => /(^| \/ )machines$/i.test(item.subPath) || /machine/i.test(item.filename));
const MACHINE_CARD_IMAGES = (MACHINE_PHOTOS.length ? MACHINE_PHOTOS : PRODUCT_PHOTOS).map((item) => item.src);


const HOME_BANNER_SLIDES = [
  {
    video: companyBannerVideo,
    poster: companyBannerImage,
    eyebrow: "PRECISION JOBWORK · PUNE · SINCE 1980",
    title: "Laxmi Sagar\nEngineers Pvt Ltd.",
    sub: "Precision CNC Machined & Forged Components for Automotive OEMs",
  },
  {
    img: officeBannerImage,
    eyebrow: "ISO 9001:2015 CERTIFIED · AUTOMOTIVE OEM SUPPLIER",
    title: "Built For\nPrecision Output.",
    sub: "CNC machined and forged components for automotive, commercial vehicle, and industrial OEMs — delivered to tolerance, on time, every batch.",
  },
  {
    img: companyBannerImage,
    eyebrow: "CNC MACHINING · FORGING · INDUCTION HARDENING",
    title: "From Shop Floor\nto Dispatch.",
    sub: "Forging, machining, inspection, and delivery coordinated under one roof in Kuruli, Pune for consistent industrial production.",
  },
];

function HeroSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % HOME_BANNER_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);
  const s = HOME_BANNER_SLIDES[i];

  return (
    <section className="relative isolate h-[86svh] min-h-[500px] overflow-hidden bg-primary text-primary-foreground sm:h-[100svh] sm:min-h-[640px]">
      <AnimatePresence mode="sync">
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          {s.video ? (
            <video
              key={s.video}
              className="h-full w-full object-cover brightness-[0.78] contrast-[1.05]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={s.poster}
            >
              <source src={s.video} type="video/webm" />
            </video>
          ) : (
            <img
              src={s.img}
              alt=""
              className="h-full w-full object-cover brightness-[0.78] contrast-[1.05]"
            />
          )}
        </motion.div>
      </AnimatePresence>

      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(120deg, oklch(0.18 0.06 258 / 0.68) 0%, oklch(0.31 0.10 258 / 0.4) 50%, oklch(0.31 0.10 258 / 0.18) 100%)",
        }}
      />
      <div className="bp-grid pointer-events-none absolute inset-0 z-10 text-white/20" />

      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8">
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
                Enquire Now <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton to="/capabilities" variant="outline">
                View Capabilities
              </MagneticButton>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center gap-3 sm:mt-12">
          {HOME_BANNER_SLIDES.map((_, idx) => (
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
    <section className="relative page-grid-surface py-16 sm:py-32">
      <div className="bp-grid-fine pointer-events-none absolute inset-0 text-primary/40" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 md:grid-cols-2 md:gap-14 lg:gap-20 lg:px-8">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Our story</div>
          <h2 className="mt-2 max-w-[14ch] font-display text-4xl font-bold leading-tight text-primary sm:max-w-none sm:text-5xl">
            Engineering trust, one component at a time.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
           Established in 1997 and operating from Kuruli, Chakan — at the centre of Pune's automotive manufacturing belt — Laxmi Sagar Engineers Pvt Ltd is a specialist in heavy forging jobwork and CNC precision machining for India's leading automotive, commercial vehicle, tractor, and off-highway OEMs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
           Our ISO 9001:2015 certified facility spans 25,000+ sq. ft., housing 25+ CNC turning centres, VMC machines, and in-house induction hardening — purpose-built for high-volume, tight-tolerance component production. From rear axle spindles and yoke sleeves to trumpet housings and custom forged components, we machine to your drawing, to your tolerance, on your timeline.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">Built on decades of shop-floor discipline, our commitment is simple: your production line should never have to second-guess what is coming from us. Every batch leaves with full dimensional traceability, documented inspection records, and zero compromise on the specifications you gave us.</p>
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
              <img
                src={ourStoryImage}
                alt="Laxmi Sagar factory floor"
                className="h-[480px] w-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-6 -left-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-elegant)]">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-amber">Established</div>
              <div className="font-display text-4xl font-bold">{SITE.established}</div>
            </div> */}
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
    suffixText = "",
    suffixClassName = "",
    duration = 1400,
  }: {
    end: number;
    start: boolean;
    suffix?: string;
    suffixText?: string;
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
        {suffixText ? (
          <span className="-translate-y-1 inline-block ml-3 font-mono text-[0.46em] uppercase tracking-[0.14em] text-amber">
            {suffixText}
          </span>
        ) : null}
      </span>
    );
  }

  const stats = [
    { value: 30, suffix: "+", label: "Years of Engineering Expertise", numberClassName: "" },
    {
      value: 25000,
        suffix: "+",
        label: "Manufacturing Facility",
        numberClassName: "",
        suffixClassName: "ml-1 text-[0.78em] tracking-[-0.01em]",
        suffixText: "sq. ft.",
      },
    { value: 25, suffix: "+", label: "CNC & VMC Machines", numberClassName: "" },
    {
      value: 0,
      suffix: "",
      suffixClassName: "",
      label: "Certified Quality System",
      staticNumber: "ISO 9001:2015",
      numberClassName: "text-[1.05em] leading-[0.92]",
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-primary py-12 sm:py-16">
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/30" />
      <div className="relative mx-auto max-w-[1700px] px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-4 md:gap-x-4 lg:grid-cols-[1fr_1.35fr_1fr_1.25fr]">
          {stats.map((item, index) => (
            <div
              key={item.label}
            className={`min-w-0 px-2 text-center sm:px-3 md:px-2 lg:px-5 ${index > 0 ? "md:border-l md:border-white/10" : ""}`}
            >
              <p className={`font-display tabular-nums text-[1.15rem] font-bold leading-[0.95] tracking-[-0.03em] text-amber drop-shadow-[0_1px_0_rgba(0,0,0,0.35)] sm:text-[1.6rem] md:text-[1.75rem] lg:text-[2.7rem] ${item.numberClassName ?? ""}`}>
                {item.staticNumber ? (
                  item.staticNumber
                ) : (
                  <CountUp
                    end={item.value}
                    start={hasStarted}
                    suffix={item.suffix}
                    suffixText={item.suffixText}
                    suffixClassName={item.suffixClassName}
                  />
                )}
              </p>
              <p className="mt-2 text-balance font-mono text-[10px] uppercase tracking-[0.18em] text-white/80 sm:text-xs sm:tracking-[0.24em] md:text-[10px] md:tracking-[0.16em] lg:tracking-[0.3em]">
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
    title: "Precision CNC Turning",
    desc: "Multi-axis CNC lines for high-volume turned components with consistent micron tolerances.",
    img: MACHINE_CARD_IMAGES[0] ?? IMG.cnc,
  },
  {
    title: "VMC Machining",
    desc: "Vertical machining centres for complex milling, drilling and contouring on forged blanks.",
    img: vmcMachineImage,
  },
  {
    title: "Induction Hardening",
    desc: "In-house induction hardening for case-depth control on shafts, gears and pins.",
    img: inductionMachineImage,
  },
  {
    title: "Quality Inspection",
    desc: "Calibrated CMM, profile projectors and gauges with full traceability and documentation.",
    img: profileProjectorImage,
  },
];


function CapabilitiesGrid() {
  return (
    <section className="page-grid-surface-secondary py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>  
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            Capabilities
          </div>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-primary sm:text-5xl lg:whitespace-nowrap">
            One roof. Every step. Total accountability.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CAPS.map((c) => (
            <StaggerItem key={c.title}>
              <div className="sheen group relative h-full overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-[var(--shadow-elegant)]">
                <div className="relative h-44 overflow-hidden bg-white">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
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

const CLIENT_LOGOS = [...assetsFromCategory("Client Logos"), ...assetsFromCategory("Client Photos")];
const EXCLUDED_CLIENT_LOGOS = new Set([
  "images.png",
  "client-1.png",
  "client-4.png",
  "WhatsApp Image 2026-05-12 at 3.15.02 PM.jpeg",
]);
const UNIQUE_CLIENT_LOGOS = Array.from(new Map(CLIENT_LOGOS.map((item) => [item.relativePath, item])).values()).filter(
  (item) => !EXCLUDED_CLIENT_LOGOS.has(item.filename),
);
const CLIENT_NAME_MAP: Record<string, string> = {
  "ADiam2018_Approved_for_external_use.png": "Dana Anand India Pvt Ltd",
  "carraro-indai.jpeg": "Carraro India",
  "flash.jpeg": "Flash Electronics",
  "hendrickson-usa-l-l-c-vector-logo.png": "Hendrickson USA, L.L.C.",
  // "logo-2.png": "Trinity",
  "logo.png": "Metalyst Forgings Limited",
  // "R.jpeg": "Rane",
  "Trinity_Logo.png": "trinity engineers pvt ltd",
  "turbo-group.jpeg": "Turbo Group",
  "watson&chalin.jpeg": "Watson & Chalin",
  "york_transport_equipment_india_private_limited_logo.jpeg": "York Transport Equipment India Pvt. Ltd.",
};

function getClientName(filename: string) {
  return CLIENT_NAME_MAP[filename] ?? filename.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim();
}

function ClientMarquee() {
  const logos = [...UNIQUE_CLIENT_LOGOS, ...UNIQUE_CLIENT_LOGOS];

  return (
    <section className="page-grid-surface overflow-hidden border-y border-border py-16 sm:py-20">
      <Reveal className="mb-10 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Our Clientele</div>
        <h3 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
          Powering India's leading OEMs
        </h3>
      </Reveal>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-14 sm:gap-16">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex min-h-[8.5rem] min-w-[240px] flex-col items-center justify-center rounded-xl border border-border bg-card px-8 py-4 text-center shadow-sm transition-transform hover:-translate-y-0.5 sm:min-h-[9.5rem] sm:min-w-[280px]"
            >
              <img
                src={logo.src}
                alt={getClientName(logo.filename)}
                className="h-12 w-full object-contain sm:h-14"
                loading="lazy"
              />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {getClientName(logo.filename)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-12 text-primary-foreground sm:py-16">
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
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/20" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Reveal className="max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">
            {" "}
            Connect with us
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Have a drawing? We will quote within 48 hours.
          </h2>
          <p className="mt-2 text-white/75">
            Send your part drawing, target volume and tolerances — our engineering team will revert
            with a feasibility note and indicative pricing.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <MagneticButton to="/contact" variant="amber">
            Enquire Now <ArrowRight className="h-5 w-5" />
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="relative bg-background">
      <div className="relative z-10">
        <HeroSlider />
        <IntroSection />
        <StatsStrip />
        <CapabilitiesGrid />
        <ProductVisualsSection />
        <ClientMarquee />
        <CtaBanner />
      </div>
    </div>
  );
}
