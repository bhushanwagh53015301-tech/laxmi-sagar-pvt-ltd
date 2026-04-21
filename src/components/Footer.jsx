import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Award } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-amber font-display text-xl font-bold text-amber-foreground">
                LS
              </div>
              <div>
                <div className="font-display text-lg font-bold tracking-wide">LAXMI SAGAR</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Engineers Pvt Ltd
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.tagline} — Four decades of precision machining for India's leading OEMs in
              automotive, off-highway and industrial sectors.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/70 transition-colors hover:text-amber"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-amber" />
                <a href={`tel:${SITE.phone}`} className="hover:text-amber">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-amber" />
                <a href={`mailto:${SITE.email}`} className="hover:text-amber">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              Certifications
            </h4>
            <div className="mt-5 space-y-3">
              {["ISO 9001:2015", "Udyam Registered", "MSME Certified"].map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm"
                >
                  <Award className="h-4 w-4 text-amber" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {SITE.legal}. All rights reserved.</div>
          <div className="font-mono">CIN: {SITE.cin}</div>
        </div>
      </div>
    </footer>
  );
}
