import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-md bg-primary text-primary-foreground">
        <span className="font-display text-xl font-bold tracking-tighter">LS</span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-amber" />
      </div>
      <div className="hidden flex-col leading-tight sm:flex">
        <span className="font-display text-lg font-bold tracking-wide text-primary">
          LAXMI SAGAR
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Engineers Pvt Ltd
        </span>
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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary after:scale-x-100" }}
              inactiveProps={{ className: "text-foreground/80 hover:text-primary" }}
              className="relative px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider transition-colors after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-amber after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="sheen rounded-md bg-amber px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider text-amber-foreground shadow-[var(--shadow-amber)] transition-transform hover:-translate-y-0.5"
          >
            Request Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-md p-2.5 text-foreground lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
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
              className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-background lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-border p-5">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 p-5">
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
                      activeProps={{ className: "bg-secondary text-primary" }}
                      className="block rounded-md px-4 py-3 font-display text-base font-semibold uppercase tracking-wider text-foreground transition-colors hover:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="border-t border-border p-5">
                <Link
                  to="/contact"
                  className="block rounded-md bg-amber px-4 py-3 text-center font-display text-sm font-semibold uppercase tracking-wider text-amber-foreground"
                >
                  Request Quote
                </Link>
                <a
                  href={`tel:${SITE.phone}`}
                  className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="h-4 w-4" /> {SITE.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
