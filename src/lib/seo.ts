import { SITE } from "@/lib/site";

type SeoEntry = {
  title: string;
  description: string;
  keywords: string;
};

export const DEFAULT_OG_IMAGE = `${SITE.url}/brand-logo.jpg`;

export const SEO_BY_PATH: Record<string, SeoEntry> = {
  "/": {
    title: "Precision CNC Machining & Forging in Pune | Laxmi Sagar Engineers",
    description:
      "Laxmi Sagar Engineers Pvt Ltd delivers precision CNC machining, forging, and induction hardening for automotive and industrial OEMs from Pune.",
    keywords:
      "Laxmi Sagar Engineers, CNC machining Pune, forging jobwork Pune, precision machined components, automotive OEM supplier, induction hardening",
  },
  "/about": {
    title: "About Laxmi Sagar Engineers | 40+ Years Manufacturing Legacy",
    description:
      "Learn about Laxmi Sagar Engineers Pvt Ltd, our manufacturing journey, leadership, certifications, and long-standing OEM partnerships.",
    keywords:
      "about Laxmi Sagar Engineers, precision engineering company Pune, ISO 9001 certified manufacturer, forged components manufacturer India",
  },
  "/capabilities": {
    title: "Manufacturing Capabilities | CNC, VMC, Forging & Inspection",
    description:
      "Explore our integrated capabilities: CNC turning, VMC machining, induction hardening, inspection systems, and traceable production workflows.",
    keywords:
      "CNC turning capabilities, VMC machining, forging and machining, precision component manufacturing, industrial machining services India",
  },
  "/quality": {
    title: "Quality & Product Systems | ISO 9001:2015 Manufacturing",
    description:
      "Discover our product quality systems, inspection controls, traceability practices, and component expertise built for reliable OEM supply.",
    keywords:
      "quality control manufacturing, ISO 9001:2015, product quality systems, traceability in machining, precision components supplier",
  },
  "/careers": {
    title: "Careers at Laxmi Sagar Engineers | Join Our Manufacturing Team",
    description:
      "Apply for careers in CNC machining, quality, production, and HR. Build your manufacturing career with a process-driven team in Pune.",
    keywords:
      "manufacturing jobs Pune, CNC operator jobs, quality inspector jobs, engineering careers Pune, Laxmi Sagar careers",
  },
  "/contact": {
    title: "Contact Laxmi Sagar Engineers | Enquiry & RFQ",
    description:
      "Contact Laxmi Sagar Engineers Pvt Ltd for RFQ, jobwork, and manufacturing enquiries. Reach our Pune plant by phone, email, or map.",
    keywords:
      "contact Laxmi Sagar Engineers, RFQ machining Pune, forging enquiry, manufacturing supplier contact India",
  },
};

export function getSeoByPath(pathname: string): SeoEntry {
  return SEO_BY_PATH[pathname] ?? SEO_BY_PATH["/"];
}
