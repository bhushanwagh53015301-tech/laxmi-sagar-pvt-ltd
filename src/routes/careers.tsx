import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Briefcase, Cog, GraduationCap, HeartHandshake, ShieldCheck, TrendingUp, Upload, Wrench } from "lucide-react";
import { assetsFromCategory, groupBySubPath } from "@/lib/localAssets";
import { IMG } from "@/lib/site";
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
    ],
  }),
  component: CareersPage,
});

const CAREER_PERKS = [
  { icon: GraduationCap, t: "Hands-on Learning", d: "Train on multi-axis CNC, VMC and induction hardening lines from day one." },
  { icon: TrendingUp, t: "Clear Growth Path", d: "Operator -> Setter -> Line Lead -> Supervisor with defined milestones and pay bands." },
  { icon: HeartHandshake, t: "OEM Work Exposure", d: "Contribute to heavy forging and precision machining programs for leading automobile OEMs." },
  { icon: Briefcase, t: "Process-Driven Culture", d: "Work inside ISO 9001:2015 quality systems with traceable, auditable manufacturing processes." },
];

const ROLES = [
  {
    icon: Cog,
    title: "CNC Operator / Setter",
    exp: "2-6 years",
    loc: "Kuruli, Pune",
    team: "Machine Shop",
    type: "Full-time",
    summary:
      "Run production on CNC turning lines, manage offsets, and maintain repeatable dimensional quality across shift output.",
    points: [
      "Set tools, offsets, and basic program corrections during production.",
      "Monitor surface finish, cycle stability, and in-process gauging.",
      "Coordinate with quality and supervisors for first-piece approval.",
    ],
  },
  {
    icon: Wrench,
    title: "Machinist",
    exp: "2-5 years",
    loc: "Kuruli, Pune",
    team: "Conventional & Support Operations",
    type: "Full-time",
    summary:
      "Handle precision machining and support operations with a strong focus on drawing interpretation, setup discipline, and part consistency.",
    points: [
      "Perform machining as per process sheets and engineering drawings.",
      "Check dimensions using verniers, micrometers, and shop-floor gauges.",
      "Support production flow by maintaining machine readiness and accuracy.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspector (CMM)",
    exp: "2-5 years",
    loc: "Kuruli, Pune",
    team: "Quality",
    type: "Full-time",
    summary:
      "Inspect critical components, validate dimensional compliance, and support traceable documentation inside an ISO-controlled process.",
    points: [
      "Perform in-process and final inspection using gauges and CMM reports.",
      "Record observations clearly and escalate deviations without delay.",
      "Work closely with production to improve first-pass acceptance.",
    ],
  },
  {
    icon: Briefcase,
    title: "Production Engineer",
    exp: "3-8 years",
    loc: "Kuruli, Pune",
    team: "Production Planning & Execution",
    type: "Full-time",
    summary:
      "Own daily production coordination, process adherence, and output planning across machining operations and dispatch readiness.",
    points: [
      "Track production targets, bottlenecks, and shift-wise execution.",
      "Improve line balancing, setup planning, and process discipline.",
      "Coordinate with quality, maintenance, and stores for smooth throughput.",
    ],
  },
];

const EMPLOYEE_TESTIMONIALS = [
  {
    quote:
      "I joined as a machine operator and moved into setter responsibilities in under two years. The mentoring and clear process standards made that growth possible.",
    name: "Nikhil Jadhav",
    role: "CNC Setter",
  },
  {
    quote:
      "Quality is treated as a shared responsibility, not a final checkpoint. Working closely with production has helped me improve both speed and accuracy.",
    name: "Priya Kulkarni",
    role: "Quality Inspector",
  },
  {
    quote:
      "Senior team members actively coach us on the why behind each process. That practical guidance has accelerated my learning on the shop floor.",
    name: "Sagar Shinde",
    role: "Production Engineer",
  },
  {
    quote:
      "The culture is disciplined and supportive. If you take ownership, leadership gives you opportunities to lead and grow.",
    name: "Rutuja Patil",
    role: "VMC Programmer",
  },
];
const EVENT_PHOTOS = assetsFromCategory("Event Photos");
const APPRECIATION_PHOTOS = EVENT_PHOTOS.filter((item) =>
  /apreciation|appreciation/i.test(item.subPath),
);
const CELEBRATION_PHOTOS = EVENT_PHOTOS.filter(
  (item) => !/apreciation|appreciation/i.test(item.subPath),
);
const CELEBRATIONS_BY_TYPE = groupBySubPath(CELEBRATION_PHOTOS);

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
      <section className="relative isolate overflow-hidden bg-primary pb-12 pt-20 text-primary-foreground sm:pb-20 sm:pt-32">
        <div className="absolute inset-0">
          <img src={IMG.careers} alt="" className="h-full w-full object-cover opacity-25" />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", opacity: 0.85 }}
        />
        <div className="bp-grid pointer-events-none absolute inset-0 text-white/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-amber">
              <span className="h-1 w-1 rounded-full bg-amber" />
              Careers
            </div>
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:whitespace-nowrap lg:text-[3.2rem]">
              Build Your Career With Us
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Join our precision manufacturing team in Pune.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Why Laxmi Sagar</div>
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

      <section id="apply" className="bg-secondary py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-12">
              <Reveal>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Open Positions</div>
                  <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">We're hiring</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    Join an ISO 9001:2015 certified manufacturing team trusted by leading automobile OEMs.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    We are looking for people who care about precision, process discipline, and dependable execution on the shop floor.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    At Laxmi Sagar Engineers, jobs are shaped around real production responsibility. Team members work on machining, inspection, and process-driven manufacturing programs where consistency, ownership, and practical skill matter every day.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    If you are comfortable in a factory environment, ready to learn, and serious about building a long-term career in engineering manufacturing, this is a strong place to grow.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {ROLES.map((role) => (
                      <div
                        key={role.title}
                        className="flex items-center gap-4 rounded-2xl border border-border bg-background px-5 py-5 transition-all hover:border-amber/70 hover:shadow-sm"
                      >
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <role.icon className="h-7 w-7" />
                        </div>
                        <div className="font-sans text-lg font-semibold leading-snug text-primary">
                          {role.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Apply</div>
                  <h3 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">Send us your application</h3>
                  <p className="mt-3 text-muted-foreground">
                    Do not see your role? Send a general application and we will keep your profile on file.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded-[1.75rem] border border-border bg-background p-6 shadow-sm sm:p-8">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Full Name" name="name" required />
                      <Field label="Email" name="email" type="email" required />
                      <Field label="Phone" name="phone" type="tel" required />
                      <div>
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                          Position Applying For <span className="text-amber">*</span>
                        </label>
                        <select
                          name="position"
                          required
                          defaultValue=""
                          className="mt-2 h-11 w-full rounded-md border border-border bg-card px-4 text-sm text-foreground outline-none transition-colors focus:border-amber"
                        >
                          <option value="" disabled>Select position</option>
                          {ROLES.map((role) => (
                            <option key={role.title} value={role.title}>
                              {role.title}
                            </option>
                          ))}
                          <option value="General Application">General Application</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                          Years of Experience <span className="text-amber">*</span>
                        </label>
                        <select
                          name="experience"
                          required
                          defaultValue=""
                          className="mt-2 h-11 w-full rounded-md border border-border bg-card px-4 text-sm text-foreground outline-none transition-colors focus:border-amber"
                        >
                          <option value="" disabled>Select experience</option>
                          <option value="0-1">0-1</option>
                          <option value="1-3">1-3</option>
                          <option value="3-5">3-5</option>
                          <option value="5-10">5-10</option>
                          <option value="10+">10+</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                          Resume <span className="text-amber">*</span>
                        </label>
                        <label className="mt-2 flex h-11 cursor-pointer items-center gap-3 rounded-md border border-dashed border-border bg-card px-3 text-sm text-muted-foreground hover:border-amber hover:text-primary">
                          <Upload className="h-4 w-4" />
                          <span>Upload PDF / DOC</span>
                          <input type="file" accept=".pdf,.doc,.docx" className="hidden" required />
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="sheen w-full rounded-md bg-amber px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-amber-foreground shadow-[var(--shadow-amber)] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                    >
                      {submitting ? "Submitting..." : "Submit Application"}
                    </button>
                    <p className="text-center text-xs leading-relaxed text-muted-foreground">
                      Our HR team reviews every application and usually responds within 5 working days.
                    </p>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Team Voices</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">Stories from Our Team</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Real experiences from our shop floor, quality, and production teams.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Carousel
              setApi={setTestimonialApi}
              opts={{ align: "start", loop: true }}
              className="mt-8 sm:mt-12"
              onMouseEnter={() => setPauseTestimonials(true)}
              onMouseLeave={() => setPauseTestimonials(false)}
              onFocus={() => setPauseTestimonials(true)}
              onBlur={() => setPauseTestimonials(false)}
            >
              <CarouselContent>
                {EMPLOYEE_TESTIMONIALS.map((t) => (
                  <CarouselItem key={t.name}>
                    <article className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 md:p-7">
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber/70 via-amber to-amber/70" />
                      <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Employee Testimonial
                      </div>
                      <p className="mt-4 font-sans text-4xl leading-none text-amber">"</p>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground md:text-base">{t.quote}</p>
                      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                        <div>
                          <p className="font-sans text-sm font-bold text-primary md:text-base">{t.name}</p>
                          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                            {t.role}
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

      <section className="bg-secondary py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Event Celebrations</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">Life at Laxmi Sagar</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Team celebrations and workplace moments that reflect our culture.
            </p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {APPRECIATION_PHOTOS.length > 0 ? (
              <div>
                <div className="mb-4 flex items-end justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-primary">Recognition moments</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {APPRECIATION_PHOTOS.length} photos
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {APPRECIATION_PHOTOS.map((photo) => (
                    <figure
                      key={photo.relativePath}
                      className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
                    >
                      <img
                        src={photo.src}
                        alt={`Appreciation event at Laxmi Sagar Engineers: ${cleanLabel(photo.filename)}`}
                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            ) : null}

            {Object.entries(CELEBRATIONS_BY_TYPE).map(([groupName, photos]) => (
              <div key={groupName}>
                <div className="mb-4 flex items-end justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-primary">{cleanGroupName(groupName)}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {photos.length} photos
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {photos.map((photo) => (
                    <figure
                      key={photo.relativePath}
                      className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
                    >
                      <img
                        src={photo.src}
                        alt={`Team celebration at Laxmi Sagar Engineers: ${cleanLabel(photo.filename)}`}
                        className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
