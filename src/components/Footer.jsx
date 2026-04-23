import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import brandLogo from "@/assets/Company Logo/L2_No BG_name.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex overflow-hidden rounded-md border border-white/20 bg-white p-1">
              <img src={brandLogo} alt="Laxmi Sagar Engineers" className="h-12 w-auto sm:h-14" />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.tagline} with dependable machining quality for automotive and industrial OEMs.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-white/70 transition-colors hover:text-amber">
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
                <div className="flex flex-col gap-1">
                  {SITE.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="hover:text-amber">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-amber" />
                <a href={`mailto:${SITE.email}`} className="hover:text-amber">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 text-amber" />
                <a href={SITE.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-amber">
                  Open Map
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              Business Hours
            </h4>
            <div className="mt-5 space-y-3">
              {[`Daily: ${SITE.workingHours}`, `${SITE.weeklyOff}: Off`].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-sm"
                >
                  <Clock className="h-4 w-4 text-amber" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
          <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            Compliance Snapshot
          </div>
          <div className="mt-3 grid gap-2.5 text-xs text-white/80 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono">CIN: {SITE.compliance.cin}</div>
            <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono">UDYAM: {SITE.compliance.udyam}</div>
            <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono">IEC: {SITE.compliance.iec}</div>
            <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono">GST: {SITE.compliance.gst}</div>
            <div className="rounded-md border border-white/10 bg-white/5 px-3 py-2 font-mono">PAN: {SITE.compliance.pan}</div>
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
