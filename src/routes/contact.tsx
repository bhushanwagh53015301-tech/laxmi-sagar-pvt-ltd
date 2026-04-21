import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { IMG, SITE } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Laxmi Sagar Engineers — Get a Quote in 48 Hours" },
      {
        name: "description",
        content:
          "Send us your drawings, target volume and tolerances. Our engineering team responds with a feasibility note and indicative pricing within 48 hours.",
      },
      { property: "og:title", content: "Contact Laxmi Sagar Engineers" },
      {
        property: "og:description",
        content:
          "Reach our team in Kuruli, Pune. Phone, email, address, map and an enquiry form for new RFQs.",
      },
      { property: "og:image", content: IMG.contact },
      { name: "twitter:image", content: IMG.contact },
    ],
  }),
  component: ContactPage,
});

const BRIEF_ADDRESS =
  "Sr No 622/2, Near Saint Gobain Sekurit Ltd, Village Kuruli, Taluka Khed, Pune – 410501, Maharashtra, India";

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Enquiry sent", {
        description: "We'll get back to you within 24 hours.",
      });
      e.target.reset();
    }, 900);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your component."
        subtitle="Share a drawing or part requirement — we'll respond with a feasibility note and indicative pricing within 48 working hours."
        image={IMG.contact}
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] lg:px-8">
          {/* Info */}
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Get in Touch</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">Reach our team</h2>
            <p className="mt-4 text-muted-foreground">
              Procurement, engineering or new business — pick the channel that works for you.
            </p>

            <div className="mt-10 space-y-5">
              <InfoCard icon={MapPin} title="Visit Us" lines={[SITE.address, BRIEF_ADDRESS]} />
              <InfoCard icon={Phone} title="Call Us" lines={[SITE.phone]} href={`tel:${SITE.phone}`} />
              <InfoCard icon={Mail} title="Email Us" lines={[SITE.email]} href={`mailto:${SITE.email}`} />
              <InfoCard icon={Clock} title="Working Hours" lines={["Mon – Sat: 9:00 AM – 6:30 PM", "Mon – Sat: 9:00 AM – 6:00 PM (Brief)", "Sunday: Closed"]} />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10"
            >
              <h3 className="font-sans text-2xl font-bold text-primary">Send an enquiry</h3>
              <p className="mt-1 text-sm text-muted-foreground">All fields marked * are required.</p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" required />
                <div className="sm:col-span-2">
                  <label className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                    Enquiry Type <span className="text-amber">*</span>
                  </label>
                  <select
                    name="enquiryType"
                    required
                    defaultValue=""
                    className="mt-2 h-11 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-amber"
                  >
                    <option value="" disabled>Select enquiry type</option>
                    <option value="general">General Enquiry</option>
                    <option value="rfq">Request for Quote</option>
                    <option value="jobwork">Jobwork Enquiry</option>
                    <option value="partnership">Partnership / Vendor Registration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Field label="Subject" name="subject" required />
                </div>
              </div>

              <div className="mt-5">
                <label className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                  Your Message <span className="text-amber">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Part name, target volume, tolerances, materials..."
                  className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-amber"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="sheen mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-amber px-6 py-3.5 font-sans text-sm font-semibold uppercase tracking-wider text-amber-foreground shadow-[var(--shadow-amber)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Sending..." : (
                  <>
                    Send Enquiry <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber">// Find Us</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">Our facility in Kuruli, Pune</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
              <iframe
                title="Laxmi Sagar Engineers location"
                src="https://www.google.com/maps?q=Kuruli,+Khed,+Pune,+Maharashtra&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/**
 * @param {{ icon: any, title: string, lines: string[], href?: string }} props
 */
function InfoCard(props) {
  const { icon: Icon, title, lines, href } = props;
  const content = (
    <div className="group flex gap-5 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-amber hover:shadow-[var(--shadow-elegant)]">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-amber text-amber-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-amber">{title}</div>
        {lines.map((l) => (
          <div key={l} className="mt-1 text-sm text-foreground">{l}</div>
        ))}
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
        {label} {required && <span className="text-amber">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 h-11 w-full rounded-md border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-amber"
      />
    </div>
  );
}

