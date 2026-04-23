import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award } from "lucide-react";
import { IMG, SITE } from "@/lib/site";
import { assetsFromCategory } from "@/lib/localAssets";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import ownerPhoto from "@/assets/owner.png";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Laxmi Sagar Engineers — 45 Years of Precision" },
      {
        name: "description",
        content:
          "From a single-shed jobwork unit in 1980 to a fully-integrated precision manufacturer in Pune — meet the team and milestones behind Laxmi Sagar Engineers.",
      },
      { property: "og:title", content: "About Laxmi Sagar Engineers — 45 Years of Precision" },
      {
        property: "og:description",
        content:
          "Our story, leadership, certifications and the milestones that built four decades of OEM trust.",
      },
      { property: "og:image", content: IMG.team },
      { name: "twitter:image", content: IMG.team },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Target, title: "Mission", text: "Deliver world-class forged & machined components on-time, every time, with zero compromise on tolerance or traceability." },
  { icon: Eye, title: "Vision", text: "To be India's most trusted precision jobwork partner for safety-critical automotive and industrial components." },
  { icon: Heart, title: "Values", text: "Integrity. Precision. Accountability. Continuous improvement. Respect for craft." },
];

const MILESTONES = [
  { year: "1980", text: "Founded as a single-shed jobwork unit in Pune by founder Mr. Sagar." },
  { year: "1992", text: "Expanded into precision turning with the first dedicated CNC lathe." },
  { year: "2003", text: "Onboarded as Tier-1 supplier to a leading commercial vehicle OEM." },
  { year: "2011", text: "Added VMC and induction hardening lines — full process under one roof." },
  { year: "2018", text: "Incorporated as Laxmi Sagar Engineers Pvt Ltd; ISO 9001 certified." },
  { year: "2021", text: "Crossed 200,000 components per year across 50+ OEM customers." },
  { year: "2026", text: "Modern Kuruli facility upgrade — automated inspection and traceability." },
];
const BRIEF_ADDITIONS = [
  "Founded in 1997 by Mr. Dattatray S. Rokhade and Mr. Laxmikant D. Rokhade.",
  "Incorporated in 2020 as Laxmi Sagar Engineers Pvt Ltd for structured long-term growth.",
  "25,000+ sq ft facility with planned expansion to 40,000+ sq ft.",
  "Focused on domestic OEMs and international automotive programs.",
];

const BRIEF_DIRECTOR_MESSAGES = [
  {
    name: "Mr. Dattatray S. Rokhade",
    role: "Founder & Director",
    photo: ownerPhoto,
    message:
      "A first-generation entrepreneur from Ranibennur who moved to Pune to build a lasting industrial enterprise. He started in maintenance at Paranjpe Engineering Foundry, then established Laxmi Sagar Industries in Bhosari in 1980. Over four decades, his hands-on expertise in operations and industrial processes has shaped the company's culture of discipline and ownership.",
  },
  {
    name: "Mrs. Kasturibai Rokhade",
    role: "Director",
    photo: IMG.director2,
    message:
      "A key force behind the enterprise since its early years. She founded Reasonable Tools in Bhosari MIDC to support Pune's industrial ecosystem with tooling and consumables. Her entrepreneurial focus and operational support have played an important role in the group's diversified and stable growth.",
  },
  {
    name: "Mr. Laxmikant D. Rokhade",
    role: "Managing Director",
    education: "Diploma in Mechanical Engineering",
    photo: IMG.director1,
    message:
      "With deep mechanical expertise and long shop-floor experience, he leads manufacturing operations and strategic direction. His leadership ensures each component meets strict OEM expectations. Under his guidance, the company has scaled from a small job shop into a full-fledged precision machining and forging facility.",
  },
  {
    name: "Mr. Tejas Rokhade",
    role: "Director",
    education: "MBA in Business Analytics (UK)",
    photo: IMG.team,
    message:
      "Representing the third generation, he brings a data-driven and globally oriented approach. He is focused on technology-led efficiency, international market expansion, and positioning Laxmi Sagar Engineers as a preferred Tier-1 and Tier-2 supplier. His vision includes Industry 4.0 practices and capacity expansion toward 40,000+ sq ft.",
  },
];

const CERTIFICATIONS = [
  { title: "ISO 9001:2015", file: "/certificates/iso-certificate.pdf" },
  { title: "ZED Certificate", file: "/certificates/zed-certificate.pdf" },
];

const DIRECTORS = [
  { name: "Mr. Rajesh Sagar", role: "Managing Director", img: IMG.director1, bio: "30+ years on the shop floor. Drives operations, customer relationships and process discipline." },
  { name: "Mr. Amit Sagar", role: "Director — Engineering", img: IMG.director2, bio: "Mechanical engineer leading new-process induction, automation and quality systems." },
];

const LOGO_ASSETS = assetsFromCategory("Company Logo");
const COMPANY_PHOTOS = assetsFromCategory("Company Photos");
const STORY_PHOTO =
  COMPANY_PHOTOS.find((item) => /lse/i.test(item.filename)) ?? COMPANY_PHOTOS[0];
const COMPANY_PHOTOS_GALLERY = COMPANY_PHOTOS.filter(
  (item) => item.relativePath !== STORY_PHOTO?.relativePath,
);
const TEAM_PHOTOS = assetsFromCategory("Team Photos");
const TEAM_MEMBERS = TEAM_PHOTOS.map((item) => ({
  image: item.src,
  role: item.filename.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim(),
}));
const EVENT_PHOTOS = assetsFromCategory("Event Photos");
const APPRECIATION_PHOTOS = EVENT_PHOTOS.filter((item) =>
  /apreciation|appreciation/i.test(item.subPath),
);

function cleanLabel(text: string) {
  return text
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function AboutPage() {
  const [teamCarouselApi, setTeamCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!teamCarouselApi) return;

    const interval = setInterval(() => {
      teamCarouselApi.scrollNext();
    }, 2800);

    return () => clearInterval(interval);
  }, [teamCarouselApi]);

  return (
    <>
      <PageHero
        eyebrow="Since 1980"
        title="Four decades of precision."
        subtitle="From a small Pune unit to a trusted manufacturing partner."
        image={IMG.team}
        contentClassName="max-w-6xl"
        titleClassName="lg:whitespace-nowrap lg:text-[3.2rem]"
      />

      {/* Story */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Our Story</div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
              Built on the floor, refined by every part we ship.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>{SITE.legal} began in {SITE.established} as a small jobwork shop serving local engineering firms. The founding promise was simple — make every part right the first time.</p>
              <p>Forty-five years later, that same promise drives a 35,000 sq.ft. facility in Kuruli running multi-axis CNC and VMC lines, induction hardening, and a calibrated inspection lab — all under one roof.</p>
              <p>We work directly with OEM engineering teams from prototype to mass production, taking ownership of feasibility, fixturing, process planning and traceability so our customers can focus on what they build.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]">
                <img
                  src={STORY_PHOTO?.src ?? IMG.factory}
                  alt="Laxmi Sagar Engineers facility"
                  className="h-[460px] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision/Mission/Values */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// What Drives Us</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Mission. Vision. Values.</h2>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <div className="h-full rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-primary">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            {/* <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Added From PDF Brief</div> */}
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Additional company information
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Existing content is retained. The details below are added from the official website content brief.
            </p>
          </Reveal>

          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
            {BRIEF_ADDITIONS.map((item) => (
              <StaggerItem key={item}>
                <div className="rounded-xl border border-border bg-card p-5 text-sm leading-relaxed text-muted-foreground">
                  {item}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-10 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-bold text-primary">The People Behind the Precision</h3>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {BRIEF_DIRECTOR_MESSAGES.map((person) => (
                  <article
                    key={person.name}
                    className="overflow-hidden rounded-xl border border-border bg-background"
                  >
                    <div className="flex items-center gap-4 border-b border-border bg-secondary px-5 py-4">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-border bg-card sm:h-28 sm:w-24">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-display text-2xl font-bold text-primary">{person.name}</p>
                        <p className="font-sans text-base font-semibold text-red-600">{person.role}</p>
                        {person.education ? (
                          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                            {person.education}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="px-5 py-5">
                      <p className="text-sm leading-relaxed text-muted-foreground">{person.message}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="bp-grid pointer-events-none absolute inset-0 text-white/30" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Our Journey</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">45 years, milestone by milestone.</h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-px bg-white/15 sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
                >
                  <div className="absolute left-4 top-3 h-3 w-3 -translate-x-1/2 rounded-full bg-amber ring-4 ring-primary sm:left-1/2" />
                  <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:pl-10"}`}>
                    <div className="font-mono text-2xl font-bold text-amber">{m.year}</div>
                    <p className="mt-2 text-sm text-white/75">{m.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
      {/* Certifications */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Recognised & Certified</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Certifications</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <StaggerItem key={cert.title}>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
                >
                  <Award className="h-10 w-10 flex-shrink-0 text-amber" />
                  <div>
                    <div className="font-display text-sm font-semibold uppercase tracking-wide text-primary">{cert.title}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Open PDF</div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Appreciation</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Recognition moments</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              A quick look at employee appreciation highlights from our shop-floor teams.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      {/* Team members */}
      <section className="relative overflow-hidden bg-secondary py-24">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-amber/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Team Members</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Our core team
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              The people who drive quality, production, HR and operations every day.
            </p>
          </Reveal>
          <Carousel
            setApi={setTeamCarouselApi}
            opts={{ align: "start", loop: true }}
            className="mt-10 w-full overflow-hidden sm:hidden"
          >
            <CarouselContent className="ml-0">
              {TEAM_MEMBERS.map((member) => (
                <CarouselItem key={member.role} className="basis-full pl-0">
                  <article className="group overflow-hidden rounded-2xl border border-border/70 bg-card/95 shadow-[var(--shadow-elegant)]">
                    <div className="relative aspect-[4/5] bg-gradient-to-b from-white via-slate-50 to-slate-100 p-4">
                      <img
                        src={member.image}
                        alt={member.role}
                        className="h-full w-full object-contain object-top"
                        loading="lazy"
                      />
                    </div>
                    <div className="border-t border-border/70 bg-card px-5 py-4">
                      <p className="font-display text-xl font-bold uppercase tracking-wide text-primary">
                        {cleanLabel(member.role)}
                      </p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        Laxmi Sagar Engineers
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <StaggerGroup className="mt-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.role}>
                <article className="group overflow-hidden rounded-2xl border border-border/70 bg-card/95 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 hover:border-amber/50">
                  <div className="relative aspect-[4/5] bg-gradient-to-b from-white via-slate-50 to-slate-100 p-4 md:p-5">
                    <img
                      src={member.image}
                      alt={member.role}
                      className="h-full w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                  <div className="border-t border-border/70 bg-card px-5 py-4">
                    <p className="font-display text-xl font-bold uppercase tracking-wide text-primary">
                      {cleanLabel(member.role)}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Laxmi Sagar Engineers
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>


      {/* <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Brand & Team</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Identity and people</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Verified visual assets organized for brand consistency, company presence, and team representation.
            </p>
          </Reveal>

          <div className="mt-12 space-y-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-primary">Company logos</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {LOGO_ASSETS.map((item) => (
                  <div key={item.relativePath} className="rounded-xl border border-border bg-card p-4 shadow-sm">
                    <img src={item.src} alt={item.filename} className="h-28 w-full object-contain" loading="lazy" />
                    <p className="mt-3 line-clamp-1 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      {cleanLabel(item.filename)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-primary">Company photos</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {COMPANY_PHOTOS_GALLERY.map((item) => (
                  <figure key={item.relativePath} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                    <img src={item.src} alt={item.filename} className="h-56 w-full object-cover" loading="lazy" />
                    <figcaption className="border-t border-border p-3 text-sm font-medium text-primary">{cleanLabel(item.filename)}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-primary">Team photos</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {TEAM_PHOTOS.map((item) => (
                  <figure key={item.relativePath} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                    <img src={item.src} alt={item.filename} className="h-56 w-full object-cover" loading="lazy" />
                    <figcaption className="border-t border-border p-3 text-sm font-medium text-primary">{cleanLabel(item.filename)}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
