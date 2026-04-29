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
      { title: "Contact Laxmi Sagar Engineers - Get a Quote in 48 Hours" },
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

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const complianceRows = [
    { label: "CIN", value: SITE.compliance.cin },
    { label: "UDYAM", value: SITE.compliance.udyam },
    { label: "IEC", value: SITE.compliance.iec },
    { label: "GST", value: SITE.compliance.gst },
    { label: "PAN", value: SITE.compliance.pan },
  ];

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
        title="Talk to our team."
        subtitle="Share your requirement and get a response within 48 hours."
        image={IMG.contact}
        contentClassName="max-w-6xl"
        titleClassName="lg:whitespace-nowrap lg:text-[3.2rem]"
      />

      <section className="bg-background py-14 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Get in Touch</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">Reach our team</h2>
            <p className="mt-4 text-muted-foreground">Procurement, engineering or new business - pick the channel that works for you.</p>

            <div className="mt-10 space-y-5">
              <InfoCard icon={MapPin} title="Visit Us" lines={[SITE.address]} />
              <InfoCard
                icon={Phone}
                title="Call Us"
                lines={SITE.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="hover:text-primary">
                    {phone}
                  </a>
                ))}
              />
              <InfoCard icon={Mail} title="Email Us" lines={[SITE.email]} href={`mailto:${SITE.email}`} />
              <InfoCard icon={Clock} title="Working Hours" lines={[`Daily: ${SITE.workingHours}`, `${SITE.weeklyOff}: Off`]} />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
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
                    <option value="partnership">Supplier Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {/* <div className="sm:col-span-2">
                  <Field label="Subject" name="subject" required />
                </div> */}
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

      <section className="bg-secondary py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-amber"> Find Us</div>
            <h2 className="mt-3 font-sans text-3xl font-bold text-primary sm:text-4xl">Find Us</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elegant)]">
              <p className="text-sm text-muted-foreground">{SITE.address}</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.49244753788!2d73.85285739999999!3d18.7315282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c94b07b62b87%3A0x544a4028ff069fe!2sLaxmi%20Sagar%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1776935388742!5m2!1sen!2sin"
                width="600"
                height="450"
                className="mt-6 h-[380px] w-full rounded-xl border border-border"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laxmi Sagar Engineers Pvt Ltd map location"
              />
              <a
                href={SITE.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Open in Google Maps
              </a>
            </div>
          </Reveal>

          {/* <Reveal delay={0.15}>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-elegant)] sm:p-8">
              <h3 className="font-sans text-2xl font-bold text-primary sm:text-3xl">Compliance Snapshot (Brief)</h3>
              <div className="mt-6 space-y-4">
                {complianceRows.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-secondary px-4 py-3 font-mono text-sm tracking-[0.22em] text-primary sm:px-6 sm:py-4 sm:text-base"
                  >
                    {item.label}: {item.value}
                  </div>
                ))}
              </div>
            </div>
          </Reveal> */}
        </div>
      </section>
    </>
  );
}

/**
 * @param {{ icon: any, title: string, lines: any[], href?: string }} props
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
        {lines.map((line, idx) => (
          <div key={idx} className="mt-1 text-sm text-foreground">{line}</div>
        ))}
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
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
