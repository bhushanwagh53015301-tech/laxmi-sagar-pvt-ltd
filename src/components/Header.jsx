import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import brandLogo from "@/assets/Company Logo/L2_No BG_name.png";

function Logo({ scrolled = false }) {
  return (
    <Link to="/" className="group flex items-center">
      <div
        className={`overflow-hidden rounded-md border ${
          scrolled
            ? "border-border bg-white"
            : "border-white/35 bg-white/95 shadow-sm backdrop-blur"
        }`}
      >
        <img
          src={brandLogo}
          alt="Laxmi Sagar Engineers"
          className="h-10 w-auto sm:h-11"
        />
      </div>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Logo scrolled={scrolled} />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: `${scrolled ? "text-primary" : "text-amber"} after:scale-x-100`,
              }}
              inactiveProps={{
                className: scrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white/85 hover:text-white",
              }}
              className="relative px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider transition-colors after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-amber after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            to="/contact"
            className="sheen rounded-md bg-amber px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-amber-foreground shadow-[var(--shadow-amber)] transition-transform hover:-translate-y-0.5"
          >
            Request Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`rounded-md border p-3 shadow-sm backdrop-blur lg:hidden ${
            scrolled
              ? "border-border bg-background/90 text-foreground"
              : "border-white/20 bg-primary/35 text-white"
          }`}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-primary/60 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col overflow-hidden border-l border-white/10 bg-primary text-primary-foreground shadow-2xl lg:hidden"
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_24%,rgba(10,26,47,0.94))]" />
              <div className="bp-grid pointer-events-none absolute inset-0 text-white/15" />
              <div className="flex items-center justify-between border-b border-border p-5">
                <Logo scrolled />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-white/15 bg-white/5 p-2 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="relative flex flex-1 flex-col gap-1 p-5">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      to={item.to}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "border-amber/30 bg-white/12 text-amber" }}
                      className="block rounded-md border border-transparent px-4 py-3 font-display text-base font-semibold uppercase tracking-wider text-white/90 transition-colors hover:border-white/10 hover:bg-white/8 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="relative border-t border-white/10 p-5">
                <Link
                  to="/contact"
                  className="block rounded-md bg-amber px-4 py-3 text-center font-display text-sm font-semibold uppercase tracking-wider text-amber-foreground"
                >
                  Request Quote
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
