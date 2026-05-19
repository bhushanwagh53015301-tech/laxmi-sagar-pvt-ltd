import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "@/lib/site";
import { DEFAULT_OG_IMAGE, getSeoByPath } from "@/lib/seo";

function upsertMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, value: Record<string, unknown>) {
  let el = document.head.querySelector(`#${id}`) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(value);
}

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageSeo = getSeoByPath(pathname);
    const canonical = `${SITE.url}${pathname === "/" ? "" : pathname}`;

    document.title = pageSeo.title;

    upsertMeta("description", pageSeo.description);
    upsertMeta("keywords", pageSeo.keywords);
    upsertMeta("robots", "index, follow, max-image-preview:large");
    upsertMeta("author", SITE.legal);
    upsertMeta("theme-color", "#0f2547");

    upsertMeta("og:type", "website", "property");
    upsertMeta("og:site_name", SITE.name, "property");
    upsertMeta("og:title", pageSeo.title, "property");
    upsertMeta("og:description", pageSeo.description, "property");
    upsertMeta("og:url", canonical, "property");
    upsertMeta("og:image", DEFAULT_OG_IMAGE, "property");

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", pageSeo.title);
    upsertMeta("twitter:description", pageSeo.description);
    upsertMeta("twitter:image", DEFAULT_OG_IMAGE);

    upsertLink("canonical", canonical);

    upsertJsonLd("schema-organization", {
      "@context": "https://schema.org",
      "@type": "ManufacturingBusiness",
      name: SITE.legal,
      alternateName: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/brand-logo.png`,
      image: DEFAULT_OG_IMAGE,
      email: SITE.email,
      telephone: SITE.phone,
      areaServed: "IN",
      foundingDate: `${SITE.established}-01-01`,
      slogan: SITE.tagline,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Sr No 622/2, Near Saint Gobain Sekurit Ltd, Village Kuruli, Taluka Khed",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "410501",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.linkedin.com/company/laxmi-sagar-engineers/",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: SITE.email,
          telephone: SITE.phone,
          areaServed: "IN",
          availableLanguage: ["en", "hi", "mr"],
        },
      ],
    });

    upsertJsonLd("schema-website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      inLanguage: "en-IN",
      publisher: {
        "@type": "Organization",
        name: SITE.legal,
      },
    });

    upsertJsonLd("schema-webpage", {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: pageSeo.title,
      description: pageSeo.description,
      url: canonical,
      inLanguage: "en-IN",
      isPartOf: {
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.url,
      },
    });
  }, [pathname]);

  return null;
}
