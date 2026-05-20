import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Target, Eye, ArrowRight, Linkedin } from "lucide-react";
import { IMG, SITE } from "@/lib/site";
import { assetsFromCategory } from "@/lib/localAssets";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import ownerPhoto from "@/assets/owner.webp";
import dattatrayPhoto from "@/assets/Dattatray.jpeg";
import kasturiPhoto from "@/assets/Kasturi.jpeg";
import laxmikantPhoto from "@/assets/Laxmikant.webp";
import tejasPhoto from "@/assets/tejas.jpeg";
import ourStoryPhoto from "@/assets/Company Photos/WhatsApp Image 2026-04-08 at 6.08.05 PM (1).png";
import isoCertificateFile from "@/assets/iso-certificate.pdf";
import zedCertificateFile from "@/assets/zed-certificate.pdf";
import isoCertificatePreview from "@/assets/certificate/ISO Certificate_page-0001.jpg";
import zedCertificatePreview from "@/assets/certificate/ZED Certificate_page-0001.jpg";
import recognitionCertificateImage from "@/assets/certificate/certificate.jpeg";
import recognitionAwardImage from "@/assets/certificate/award.jpeg";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const VALUES = [
  { icon: Target, title: "Mission", text: "To deliver world-class machined and forged components - on-time, within tolerance, with full documentation - so our OEM customers can build without second-guessing their supply chain." },
  { icon: Eye, title: "Vision", text: "To be the most trusted precision machining and forging jobwork partner for safety-critical automotive and industrial components in India - recognised for consistency, traceability, and zero-defect delivery." },
];

const MILESTONES = [
  {
    year: "1980",
    text: "Laxmi Sagar Industries established in Bhosari MIDC, Pune by Mr. Dattatray S. Rokhade - beginning a manufacturing journey rooted in mechanical discipline and shop-floor expertise.",
  },
  {
    year: "1997",
    text: "Formally registered as Laxmi Sagar Engineers, expanding into heavy forging jobwork and CNC precision machining for the automotive sector.",
  },
  {
    year: "2000s",
    text: "Long-term supply relationships established with leading domestic OEMs in commercial vehicles, tractors, and heavy equipment. ISO 9001 quality systems implemented - formalising the standards the shop floor had already been working to.",
  },
  {
    year: "2020",
    text: "Reconstituted as Laxmi Sagar Engineers Pvt Ltd - a structured new chapter of institutional growth. Fleet scaled to 25+ CNC and VMC machines at the Kuruli, Chakan plant.",
  },
  {
    year: "2027-28",
    text: "Planned expansion to 40,000+ sq. ft. with four new capability lines: Horizontal Machining Centres (HMC), Broaching Machines, Special Purpose Machines (SPM) for complex operations, and Furnace Tempering - broadening the scope of precision jobwork we can offer to OEM partners.",
  },
];
const BRIEF_DIRECTOR_MESSAGES = [
  {
    name: "Laxmikant Rokhade",
    role: "Managing Director",
    education: "Diploma in Mechanical Engineering",
    photo: laxmikantPhoto,
    message:
      "With deep mechanical expertise and long shop-floor experience, he leads manufacturing operations and strategic direction. His leadership ensures each component meets strict OEM expectations. Under his guidance, the company has scaled from a small job shop into a full-fledged precision machining and forging facility.",
  },
  {
    name: "Dattatray Rokhade",
    role: "Director",
    photo: dattatrayPhoto,
    message:
      "A first-generation entrepreneur from Ranibennur who moved to Pune to build a lasting industrial enterprise. He started in maintenance at Paranjpe Engineering Foundry, then established Laxmi Sagar Industries in Bhosari in 1980. Over four decades, his hands-on expertise in operations and industrial processes has shaped the company's culture of discipline and ownership.",
  },
  {
    name: "Kasturi Rokhade",
    role: "Director",
    photo: kasturiPhoto,
    message:
      "A key force behind the enterprise since its early years. She founded Reasonable Tools in Bhosari MIDC to support Pune's industrial ecosystem with tooling and consumables. Her entrepreneurial focus and operational support have played an important role in the group's diversified and stable growth.",
  },
  {
    name: "Tejas Rokhade",
    role: "Director",
    education: "MBA in Business Analytics (UK)",
    photo: tejasPhoto,
    message:
      "Representing the third generation, he brings a data-driven and globally oriented approach. He is focused on technology-led efficiency, international market expansion, and positioning Laxmi Sagar Engineers as a preferred Tier-1 and Tier-2 supplier. His vision includes Industry 4.0 practices and capacity expansion.",
  },
];

const DIRECTOR_LINKEDIN: Record<string, string> = {
  "Tejas Rokhade": "https://www.linkedin.com/in/tejasrokhade",
  "Laxmikant Rokhade": "https://www.linkedin.com/search/results/all/?keywords=Laxmikant%20Rokhade",
};

function getLinkedInLink(name: string) {
  return DIRECTOR_LINKEDIN[name];
}

const CERTIFICATIONS = [
  { title: "ISO 9001:2015", file: isoCertificateFile, preview: isoCertificatePreview },
  { title: "ZED Certificate", file: zedCertificateFile, preview: zedCertificatePreview },
];

const DIRECTORS = [
  { name: "Mr. Rajesh Sagar", role: "Managing Director", img: IMG.director1, bio: "30+ years on the shop floor. Drives operations, customer relationships and process discipline." },
  { name: "Mr. Amit Sagar", role: "Director - Engineering", img: IMG.director2, bio: "Mechanical engineer leading new-process induction, automation and quality systems." },
];

const LOGO_ASSETS = assetsFromCategory("Company Logo");
const COMPANY_PHOTOS = assetsFromCategory("Company Photos");
const STORY_PHOTO =
  COMPANY_PHOTOS.find((item) => /lse/i.test(item.filename)) ?? COMPANY_PHOTOS[0];
const COMPANY_PHOTOS_GALLERY = COMPANY_PHOTOS.filter(
  (item) => item.relativePath !== STORY_PHOTO?.relativePath,
);
const TEAM_PHOTOS = assetsFromCategory("Team Photos");
const CORE_TEAM_NAMES = [
  "Shrushti Kolhe",
  "Pooja Dantrao",
  "Ranjan Epili",
  "Shubham Yedake",
];
const TEAM_MEMBERS = TEAM_PHOTOS.map((item) => ({
  image: item.src,
  role: item.filename.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").trim(),
})).map((member, index) => ({
  ...member,
  name: CORE_TEAM_NAMES[index] ?? "Laxmi Sagar Engineers",
}));
const EVENT_PHOTOS = assetsFromCategory("Event Photos");
const APPRECIATION_PHOTOS = EVENT_PHOTOS.filter((item) =>
  /apreciation|appreciation/i.test(item.subPath),
);
const ABOUT_EVENT_HIGHLIGHT_FILES = [
  "APRECIATION-1",
  "APRECIATION-2",
  "APRECIATION-3",
  "APRECIATION-4",
];
const ABOUT_EVENT_HIGHLIGHTS = EVENT_PHOTOS.filter((item) =>
  ABOUT_EVENT_HIGHLIGHT_FILES.includes(item.filename.replace(/\.[^.]+$/, "").toUpperCase()),
);
const AWARDS_GALLERY = [
  {
    id: "recognition-certificate",
    src: recognitionCertificateImage,
    alt: "Recognition certificate at Laxmi Sagar Engineers",
    fit: "contain" as const,
  },
  {
    id: "recognition-award",
    src: recognitionAwardImage,
    alt: "Recognition award at Laxmi Sagar Engineers",
    fit: "contain" as const,
  },
  ...ABOUT_EVENT_HIGHLIGHTS.map((photo) => ({
    id: photo.relativePath,
    src: photo.src,
    alt: `Event celebration at Laxmi Sagar Engineers: ${cleanLabel(photo.filename)}`,
    fit: "cover" as const,
  })),
];

function cleanLabel(text: string) {
  return text
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function AboutPage() {
  const [teamCarouselApi, setTeamCarouselApi] = useState<CarouselApi>();
  const [awardsCarouselApi, setAwardsCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!teamCarouselApi) return;

    const interval = setInterval(() => {
      teamCarouselApi.scrollNext();
    }, 2800);

    return () => clearInterval(interval);
  }, [teamCarouselApi]);

  useEffect(() => {
    if (!awardsCarouselApi) return;

    const interval = setInterval(() => {
      awardsCarouselApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [awardsCarouselApi]);

  return (
    <>
      <PageHero
        eyebrow="Since 1980"
        title="Four decades of precision."
        subtitle="From Pune roots to a trusted precision manufacturing partner."
        image={IMG.team}
        contentClassName="max-w-6xl"
        titleClassName="lg:whitespace-nowrap lg:text-[3.2rem]"
      />

      {/* Story */}
      <section className="page-grid-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <Reveal className="order-2 md:order-1">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Our Story</div>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary sm:text-4xl">
              Built on the floor, refined by every part we produce.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground" style={{ textAlign: "justify" }}>
              <p>Laxmi Sagar Engineers Pvt Ltd traces its roots to 1980, when founder Mr. Dattatray S. Rokhade established Laxmi Sagar Industries in Bhosari, Pune - one of Maharashtra's earliest precision jobwork units serving the region's growing industrial base.</p>
              <p>As OEM demand grew, a second unit - Laxmi Sagar Engineers - was established in Chakan, Pune in 1997, expanding capacity for CNC machining, forging jobwork, and component supply to automotive and commercial vehicle manufacturers.</p>
              <p>In 2020, the enterprise was formally incorporated as Laxmi Sagar Engineers Pvt Ltd, marking the transition into a structured, scalable precision manufacturing company. Today, operating from a 25,000+ sq.ft. facility at Kuruli, Khed, Pune - ISO 9001:2015 certified and ZED rated - we supply safety-critical machined components to India's leading OEMs across automotive, tractor, and off-highway segments.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="order-1 md:order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-xl shadow-[var(--shadow-elegant)]">
                <img
                  src={ourStoryPhoto}
                  alt="Laxmi Sagar Engineers facility"
                  className="h-[460px] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision/Mission/Values */}
      <section className="relative overflow-hidden page-grid-surface-secondary py-10">
        <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-amber/12 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">What Drives Us</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Precision is the standard. 
              <br />
              Reliability is the outcome..
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
             Consistent output. Traceable quality. Long-term OEM partnerships - built batch by batch.
            </p>
          </Reveal>
          <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-2">
            {VALUES.map((v) => (
              <StaggerItem key={v.title}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-border/70 bg-card/95 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-[var(--shadow-elegant)] sm:p-10">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber via-amber/55 to-transparent" />
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]">
                      <v.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-primary">
                      {v.title}
                    </h3>
                    {/* <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber">
                      {v.title === "Mission" ? "Deliver Today" : "Build Tomorrow"}
                    </div> */}
                  </div>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{v.text}</p>
                  {/* <div className="mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary/70 transition-colors group-hover:text-primary">
                    Precision-led commitment
                    <ArrowRight className="h-4 w-4" />
                  </div> */}
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="page-grid-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              The People Behind the Precision
            </h2>
            <p className="mt-3 text-muted-foreground lg:whitespace-nowrap">
              Leadership shaped by hands-on manufacturing experience, operational discipline, and long-term industrial growth.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mx-auto mt-6 grid max-w-5xl gap-5">
                {BRIEF_DIRECTOR_MESSAGES.map((person) => (
                  <article
                    key={person.name}
                    className="overflow-hidden rounded-xl border border-border bg-background"
                  >
                    <div className="flex items-center gap-4 border-b border-border bg-secondary px-5 py-4">
                      <div className="h-24 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-border bg-white sm:h-28 sm:w-24">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="h-full w-full object-cover object-center"
                          loading="eager"
                          decoding="sync"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="truncate font-display text-2xl font-bold text-primary">{person.name}</p>
                          {getLinkedInLink(person.name) ? (
                            <a
                              href={getLinkedInLink(person.name)}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open LinkedIn profile for ${person.name}`}
                              className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border bg-background text-primary transition-colors hover:border-amber hover:text-amber"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          ) : null}
                        </div>
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
      <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground">
        <div className="bp-grid pointer-events-none absolute inset-0 text-white/30" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Our Journey</div>
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
      <section className="page-grid-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Recognised & Certified</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Certifications</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Quality and manufacturing standards backed by officially issued certifications.
            </p>
          </Reveal>
          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert) => (
              <StaggerItem key={cert.title}>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-[2rem] border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)] sm:p-6"
                >
                  <div className="overflow-hidden rounded-[1.75rem] border border-border bg-background p-4 sm:p-5">
                    <div className="overflow-hidden rounded-[1.5rem] bg-white">
                      <img
                        src={cert.preview}
                        alt={cert.title}
                        className="h-[520px] w-full object-contain bg-white"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="px-2 pb-1 pt-5 text-center">
                    <div className="font-display text-2xl font-bold text-primary">
                      {cert.title}
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="page-grid-surface py-20 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="order-2 md:order-1">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Awards & Achievements</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Laxmi Sagar Legacy Awards
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              Milestones, recognitions, and proud moments from our journey.
            </p>
          </Reveal>

          <Carousel
            setApi={setAwardsCarouselApi}
            opts={{ align: "start", loop: true }}
            className="mt-10 w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {AWARDS_GALLERY.map((photo) => (
                <CarouselItem
                  key={photo.id}
                  className="pl-2 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 md:pl-4"
                >
                  <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className={`h-60 w-full transition-transform duration-500 group-hover:scale-[1.03] ${
                        photo.fit === "contain" ? "bg-white object-contain p-2" : "object-cover"
                      }`}
                      loading="lazy"
                    />
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* <section className="bg-background py-16">
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
      </section> */}

      {/* Team members */}
      <section className="relative overflow-hidden page-grid-surface-secondary py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-amber/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-6 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="order-2 md:order-1">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Team Members</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">
              The people who drive quality, production, HR and operations every day.
            </p>
          </Reveal>
          <Carousel
            setApi={setTeamCarouselApi}
            opts={{ align: "start", loop: true }}
            className="mt-6 w-full overflow-hidden sm:hidden"
          >
            <CarouselContent className="ml-0">
              {TEAM_MEMBERS.map((member) => (
                <CarouselItem key={member.role} className="basis-full pl-0">
                  <article className="group overflow-hidden rounded-2xl border border-border/70 bg-card/95 shadow-[var(--shadow-elegant)]">
                    <div className="relative aspect-[1/1] overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
                      <img
                        src={member.image}
                        alt={member.role}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/10 to-transparent" />
                    </div>
                    <div className="border-t border-border/70 bg-card px-5 py-4">
                      <p className="font-display text-xl font-bold uppercase tracking-wide text-primary">
                        {cleanLabel(member.role)}
                      </p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                        {member.name}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <StaggerGroup className="mt-8 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.role}>
                <article className="group overflow-hidden rounded-2xl border border-border/70 bg-card/95 shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 hover:border-amber/50">
                  <div className="relative aspect-[1/1] overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50">
                    <img
                      src={member.image}
                      alt={member.role}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/10 to-transparent" />
                  </div>
                  <div className="border-t border-border/70 bg-card px-5 py-4">
                    <p className="font-display text-xl font-bold uppercase tracking-wide text-primary">
                      {cleanLabel(member.role)}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {member.name}
                    </p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>


      {/* <section className="bg-secondary py-16">
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




