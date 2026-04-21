import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Briefcase, Clock3, GraduationCap, HeartHandshake, MapPin, TrendingUp, Upload } from "lucide-react";
import { IMG } from "@/lib/site";
import { assetsFromCategory, groupBySubPath } from "@/lib/localAssets";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Laxmi Sagar Engineers | Manufacturing Jobs Pune | CNC Operator Jobs" },
      {
        name: "description",
        content:
          "Join Laxmi Sagar Engineers Pvt Ltd, Pune. We are hiring skilled CNC operators, machinists, quality inspectors, and production talent.",
      },
      { property: "og:title", content: "Careers at Laxmi Sagar Engineers" },
      {
        property: "og:description",
        content:
          "Build your career in precision engineering with an ISO 9001:2015 certified automotive manufacturing team.",
      },
      { property: "og:image", content: IMG.careers },
      { name: "twitter:image", content: IMG.careers },
    ],
  }),
  component: CareersPage,
});

const ROLES = [
  {
    title: "CNC Operator / Setter",
    exp: "2-6 years",
    loc: "Kuruli, Pune",
    dept: "Machining",
    type: "Full-time",
    shift: "On-site",
    openings: "Hiring now",
  },
  {
    title: "Machinist",
    exp: "2-5 years",
    loc: "Kuruli, Pune",
    dept: "Shop Floor",
    type: "Full-time",
    shift: "On-site",
    openings: "Hiring now",
  },
  {
    title: "Quality Inspector (CMM)",
    exp: "2-5 years",
    loc: "Kuruli, Pune",
    dept: "Quality",
    type: "Full-time",
    shift: "On-site",
    openings: "Hiring now",
  },
  {
    title: "Production Engineer",
    exp: "3-8 years",
    loc: "Kuruli, Pune",
    dept: "Production",
    type: "Full-time",
    shift: "On-site",
    openings: "Hiring now",
  },
];

const CAREER_PERKS = [
  { icon: GraduationCap, t: "Hands-on Learning", d: "Train on multi-axis CNC, VMC and induction hardening lines from day one." },
  { icon: TrendingUp, t: "Clear Growth Path", d: "Operator -> Setter -> Line Lead -> Supervisor with defined milestones and pay bands." },
  { icon: HeartHandshake, t: "OEM Work Exposure", d: "Contribute to heavy forging and precision machining programs for leading automobile OEMs." },
  { icon: Briefcase, t: "Process-Driven Culture", d: "Work inside ISO 9001:2015 quality systems with traceable, auditable manufacturing processes." },
];

const EMPLOYEE_TESTIMONIALS = [
  {
    quote:
      "I joined as a machine operator and moved into setter responsibilities in under two years. The mentoring and clear process standards made that growth possible.",
    name: "Nikhil Jadhav",
    role: "CNC Setter",
    tenure: "3 years at Laxmi Sagar",
  },
  {
    quote:
      "Quality is treated as a shared responsibility, not a final checkpoint. Working closely with production has helped me improve both speed and accuracy.",
    name: "Priya Kulkarni",
    role: "Quality Inspector",
    tenure: "4 years at Laxmi Sagar",
  },
  {
    quote:
      "Senior team members actively coach us on the why behind each process. That practical guidance has accelerated my learning on the shop floor.",
    name: "Sagar Shinde",
    role: "Production Engineer",
    tenure: "2 years at Laxmi Sagar",
  },
  {
    quote:
      "The culture is disciplined and supportive. If you take ownership, leadership gives you opportunities to lead and grow.",
    name: "Rutuja Patil",
    role: "VMC Programmer",
    tenure: "5 years at Laxmi Sagar",
  },
];

const EVENT_PHOTOS = assetsFromCategory("Event Photos");
const EVENTS_BY_TYPE = groupBySubPath(EVENT_PHOTOS);

function cleanLabel(text: string) {
  return text
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function cleanGroupName(groupName: string) {
  const raw = groupName === "General" ? "Event Highlights" : groupName;
  return cleanLabel(raw.replace(/^PHOTOS\s*\/\s*/i, ""));
}

function CareersPage() {
  const [submitting, setSubmitting] = useState(false);
  const [testimonialApi, setTestimonialApi] = useState<CarouselApi>();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [pauseTestimonials, setPauseTestimonials] = useState(false);

  useEffect(() => {
    if (!testimonialApi) return;

    const onSelect = () => {
      setActiveTestimonial(testimonialApi.selectedScrollSnap());
    };

    onSelect();
    testimonialApi.on("select", onSelect);
    testimonialApi.on("reInit", onSelect);

    return () => {
      testimonialApi.off("select", onSelect);
      testimonialApi.off("reInit", onSelect);
    };
  }, [testimonialApi]);

  useEffect(() => {
    if (!testimonialApi || pauseTestimonials) return;

    const interval = setInterval(() => {
      testimonialApi.scrollNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [testimonialApi, pauseTestimonials]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Application received", {
        description: "Our HR team will reach out within 5 working days.",
      });
      e.target.reset();
    }, 900);
  };

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career in Precision Engineering"
        subtitle="Join a team that's been shaping India's automotive industry for over 25 years."
        image={IMG.careers}
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Why Laxmi Sagar</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">A workshop that respects the craft.</h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CAREER_PERKS.map((p) => (
              <StaggerItem key={p.t}>
                <div className="h-full rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-amber/15 text-amber">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-sans text-lg font-bold uppercase tracking-wide text-primary">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Open Positions</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">We're hiring</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Join an ISO 9001:2015 certified manufacturing team trusted by leading automobile OEMs.
            </p>
          </Reveal>
          <div className="mt-8 inline-flex items-center rounded-full border border-border bg-card px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {ROLES.length} active roles
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">27+ years expertise</span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">25+ CNC machines</span>
            <span className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">25,000+ sq ft plant</span>
          </div>

          <StaggerGroup className="mt-6 grid gap-5 md:grid-cols-2">
            {ROLES.map((r) => (
              <StaggerItem key={r.title}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-amber/80 hover:shadow-[var(--shadow-elegant)] sm:p-7">
                  <div className="w-full">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="font-sans text-2xl font-bold text-primary">{r.title}</div>
                      <span className="rounded-full border border-amber/35 bg-amber/10 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-amber">
                        {r.dept}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-4 w-4 text-amber" />
                        <span>{r.exp}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-amber" />
                        <span>{r.loc}</span>
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {r.type}
                      </span>
                      <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {r.shift}
                      </span>
                      <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {r.openings}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#apply"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Team Voices</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">What our employees say</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Real experiences from our shop floor, quality, and production teams.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Carousel
              setApi={setTestimonialApi}
              opts={{ align: "start", loop: true }}
              className="mt-12"
              onMouseEnter={() => setPauseTestimonials(true)}
              onMouseLeave={() => setPauseTestimonials(false)}
              onFocus={() => setPauseTestimonials(true)}
              onBlur={() => setPauseTestimonials(false)}
            >
              <CarouselContent>
                {EMPLOYEE_TESTIMONIALS.map((t) => (
                  <CarouselItem key={t.name}>
                    <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 md:p-10">
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber/70 via-amber to-amber/70" />
                      <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Employee Testimonial
                      </div>
                      <p className="mt-6 font-sans text-5xl leading-none text-amber">"</p>
                      <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground md:text-lg">{t.quote}</p>
                      <div className="mt-8 flex items-center gap-4 border-t border-border pt-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber/15 font-mono text-xs font-semibold uppercase tracking-wider text-amber">
                          {t.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-sans text-base font-bold text-primary">{t.name}</p>
                          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground md:text-[11px]">
                            {t.role} | {t.tenure}
                          </p>
                        </div>
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-auto right-14 top-[-3.4rem] h-10 w-10 border-border bg-card text-primary hover:border-amber hover:text-amber" />
              <CarouselNext className="right-0 top-[-3.4rem] h-10 w-10 border-border bg-card text-primary hover:border-amber hover:text-amber" />
            </Carousel>
            <div className="mt-8 flex justify-center gap-2">
              {EMPLOYEE_TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Go to testimonial ${idx + 1}`}
                  onClick={() => testimonialApi?.scrollTo(idx)}
                  className={`h-2.5 rounded-full transition-all ${activeTestimonial === idx ? "w-8 bg-amber" : "w-2.5 bg-border hover:bg-muted-foreground/50"}`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Culture Moments</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">Life at Laxmi Sagar</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Celebrations, appreciation events, and team moments from across the organization.
            </p>
          </Reveal>

          <div className="mt-10 space-y-10">
            {Object.entries(EVENTS_BY_TYPE).map(([groupName, photos]) => (
              <div key={groupName}>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-sans text-xl font-bold text-primary">{cleanGroupName(groupName)}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{photos.length} photos</p>
                </div>
                <div className="relative mt-4">
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-secondary to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-secondary to-transparent" />
                  <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {photos.map((photo) => (
                      <figure key={photo.relativePath} className="min-w-[240px] overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] sm:min-w-[260px]">
                        <img src={photo.src} alt={photo.filename} className="h-48 w-full object-cover" loading="lazy" />
                        <figcaption className="border-t border-border p-3 text-xs font-medium text-primary">{cleanLabel(photo.filename)}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Apply</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">Send us your application</h2>
            <p className="mt-3 text-muted-foreground">Do not see your role? Send a general application and we will keep your profile on file.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Position Applying For" name="position" required />
                <div>
                  <label className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                    Years of Experience <span className="text-amber">*</span>
                  </label>
                  <select
                    name="experience"
                    required
                    defaultValue=""
                    className="mt-2 h-11 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-amber"
                  >
                    <option value="" disabled>Select experience</option>
                    <option value="0-1">0–1</option>
                    <option value="1-3">1–3</option>
                    <option value="3-5">3–5</option>
                    <option value="5-10">5–10</option>
                    <option value="10+">10+</option>
                  </select>
                </div>
                <div>
                  <label className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                    Resume <span className="text-amber">*</span>
                  </label>
                  <label className="mt-2 flex h-11 cursor-pointer items-center gap-3 rounded-md border border-dashed border-border bg-background px-3 text-sm text-muted-foreground hover:border-amber hover:text-primary">
                    <Upload className="h-4 w-4" />
                    <span>Upload PDF / DOC</span>
                    <input type="file" accept=".pdf,.doc,.docx" className="hidden" required />
                  </label>
                </div>
              </div>
              <div>
                <label className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-amber"
                  placeholder="Tell us about your shop-floor experience..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="sheen w-full rounded-md bg-amber px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-amber-foreground shadow-[var(--shadow-amber)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
        {label} {required && <span className="text-amber">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 h-11 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-amber"
      />
    </div>
  );
}

