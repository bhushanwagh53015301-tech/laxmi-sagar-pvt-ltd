import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import brandLogo from "@/assets/Company Logo/L1_BG_Name.JPG";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="bp-grid pointer-events-none absolute inset-0 text-white/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex overflow-hidden rounded-2xl border border-white/10 bg-white/95 p-2 shadow-sm">
              <img src={brandLogo} alt="Laxmi Sagar Engineers" className="h-12 w-auto object-contain sm:h-14" />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Precision forged and precision machined for dependable automotive and industrial OEM applications.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/laxmi-sagar-engineers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition-colors hover:border-amber hover:text-amber"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.54c0-1.32-.03-3.01-1.83-3.01-1.84 0-2.12 1.44-2.12 2.92V21h-4V9Z" />
                </svg>
              </a>
              <a
                href="https://dzicard.com/dbc/laxmi-sagar-engineers-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Save Contact"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/80 transition-colors hover:border-amber hover:text-amber"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.5-.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-13Zm2 9h5v2h-5v-2Zm2.5-7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm4.75 1h2.25v1.5h-2.25V9Zm0 3h2.25v1.5h-2.25V12Z" />
                </svg>
              </a>
            </div>
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

        <div className="mt-10 flex justify-center border-t border-white/10 pt-5 text-center text-xs text-white/50">
          <div>© {new Date().getFullYear()} {SITE.legal}. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
