import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import brandLogo from "@/assets/Company Logo/L3_No BG_No_NAME.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={brandLogo} alt="Laxmi Sagar Engineers" className="h-12 w-auto object-contain sm:h-14" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.tagline} with dependable machining quality for automotive and industrial OEMs.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
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
            <ul className="mt-4 space-y-3 text-sm text-white/70">
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
              Compliance Snapshot
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>CIN: {SITE.compliance.cin}</li>
              <li>UDYAM: {SITE.compliance.udyam}</li>
              <li>GST: {SITE.compliance.gst}</li>
              <li>PAN: {SITE.compliance.pan}</li>
              <li>IEC: {SITE.compliance.iec}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} {SITE.legal}. All rights reserved.</div>
          
        </div>
      </div>
    </footer>
  );
}
