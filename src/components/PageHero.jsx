import { motion } from "framer-motion";

export function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-primary pb-16 pt-28 text-primary-foreground sm:pb-20 sm:pt-32">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-25" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", opacity: 0.85 }}
        />
        <div className="bp-grid absolute inset-0 text-white/30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-amber">
              <span className="h-1 w-1 rounded-full bg-amber" />
              {eyebrow}
            </div>
          )}
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
