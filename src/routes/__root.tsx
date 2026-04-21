import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
  useRouterState,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Preloader } from "@/components/Preloader";
import { PageTransition } from "@/components/PageTransition";
import { Toaster } from "@/components/ui/sonner";
import { IMG, SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold uppercase tracking-wider text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-amber px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-amber-foreground transition-transform hover:-translate-y-0.5"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Laxmi Sagar Engineers | Precision Forged. Precision Machined." },
      {
        name: "description",
        content:
          "Laxmi Sagar Engineers Pvt Ltd: 45+ years of precision CNC, VMC, induction hardening and forging job-work for India's automotive and off-highway OEMs.",
      },
      { name: "author", content: SITE.legal },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#0f3460" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@laxmisagar" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Laxmi Sagar Engineers | Precision Forged. Precision Machined." },
      {
        property: "og:description",
        content:
          "45+ years delivering forged and machined components for automotive and industrial OEM applications.",
      },
      { property: "og:image", content: IMG.heroForge },
      {
        name: "twitter:title",
        content: "Laxmi Sagar Engineers | Precision Forged. Precision Machined.",
      },
      {
        name: "twitter:description",
        content: "Precision CNC, VMC, hardening and inspection under one roof in Kuruli, Pune.",
      },
      { name: "twitter:image", content: IMG.heroForge },
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "stylesheet", href: appCss }
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const canonicalUrl = `${SITE.url}${pathname === "/" ? "" : pathname}`;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legal,
    url: SITE.url,
    logo: IMG.heroForge,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 12, MIDC, Kuruli, Tal. Khed",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "410501",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="min-h-screen">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster richColors position="top-right" />
    </>
  );
}
