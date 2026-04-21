import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/site";
import { assetsFromCategory, groupBySubPath } from "@/lib/localAssets";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Team & Events | Laxmi Sagar Engineers" },
      {
        name: "description",
        content:
          "Team and event moments from Laxmi Sagar Engineers, Pune. Culture, people, and workplace highlights from our manufacturing operations.",
      },
      { property: "og:title", content: "Gallery | Team & Events | Laxmi Sagar Engineers" },
      {
        property: "og:description",
        content:
          "Explore team and event photos from Laxmi Sagar Engineers.",
      },
      { property: "og:image", content: IMG.team },
      { name: "twitter:image", content: IMG.team },
    ],
  }),
  component: GalleryPage,
});

const TEAM_PHOTOS = assetsFromCategory("Team Photos");
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

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Team & Events"
        subtitle="People and culture moments from across our plant, teams, and celebrations."
        image={IMG.team}
      />

      {/* <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Team</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Our team moments</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_PHOTOS.map((item) => (
              <figure
                key={item.relativePath}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
              >
                <img
                  src={item.src}
                  alt={`Team photo at Laxmi Sagar Engineers: ${cleanLabel(item.filename)}`}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Events</div>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary sm:text-4xl">Event highlights</h2>
          </Reveal>

          <div className="mt-10 space-y-10">
            {Object.entries(EVENTS_BY_TYPE).map(([groupName, photos]) => (
              <div key={groupName}>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-primary">{cleanGroupName(groupName)}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{photos.length} photos</p>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {photos.map((photo) => (
                    <figure
                      key={photo.relativePath}
                      className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]"
                    >
                      <img
                        src={photo.src}
                        alt={`Event photo at Laxmi Sagar Engineers: ${cleanLabel(photo.filename)}`}
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
