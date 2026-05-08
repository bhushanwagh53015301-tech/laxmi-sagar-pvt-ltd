import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import brandLogo from "@/assets/Company Logo/L3_No BG_No_NAME.png";

function Logo({ scrolled = false }) {
  return (
    <Link to="/" className="group flex items-center">
      <img
        src={brandLogo}
        alt="Laxmi Sagar Engineers"
        className={`w-auto object-contain transition-all ${scrolled ? "h-10 sm:h-11" : "h-11 sm:h-12"}`}
      />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [useLightDesktopNav, setUseLightDesktopNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const syncHeaderState = () => {
      setScrolled(window.scrollY > 8);

      const probeY = window.innerWidth >= 1024 ? 88 : 72;
      const probeX = Math.round(window.innerWidth / 2);
      const elements = document.elementsFromPoint(probeX, probeY);
      const contentElement = elements.find(
        (element) =>
          !element.closest("header") &&
          !(element instanceof HTMLHtmlElement) &&
          !(element instanceof HTMLBodyElement),
      );

      setUseLightDesktopNav(Boolean(contentElement?.closest(".bg-primary")));
    };

    const onScroll = () => syncHeaderState();

    syncHeaderState();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location.pathname]);

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
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 shadow-sm backdrop-blur-xl transition-all duration-300 lg:border-b-0 lg:bg-transparent lg:shadow-none ${
        scrolled
          ? "lg:border-b lg:border-border/80 lg:bg-background/92 lg:shadow-sm lg:backdrop-blur-2xl"
          : ""
        }`}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center px-4 sm:h-20 sm:px-6 lg:px-8">
        <div className="justify-self-start">
          <Logo scrolled={scrolled} />
        </div>

        <nav className="hidden items-center justify-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: `${scrolled ? (useLightDesktopNav ? "text-white" : "text-primary") : "text-amber"} after:scale-x-100`,
              }}
              inactiveProps={{
                className: scrolled
                  ? useLightDesktopNav
                    ? "text-white/85 hover:text-white"
                    : "text-foreground/80 hover:text-primary"
                  : "text-white/85 hover:text-white",
              }}
              className="relative px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider transition-colors after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-amber after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className={`justify-self-end rounded-md border p-3 shadow-sm backdrop-blur lg:hidden ${
            scrolled
              ? "border-border bg-background/90 text-foreground"
              : "border-white/20 bg-primary/25 text-white"
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
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed inset-0 z-50 flex min-h-dvh flex-col overflow-y-auto bg-primary text-primary-foreground shadow-2xl lg:hidden"
            >
              <div className="pointer-events-none absolute inset-0 bg-primary/96" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_24%,rgba(10,26,47,0.98))]" />
              <div className="bp-grid pointer-events-none absolute inset-0 text-white/10" />
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">
                <Logo scrolled />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-white/15 bg-white/5 p-2 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="relative z-10 flex flex-1 flex-col gap-2 px-4 py-6 sm:px-5">
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
                      className="block rounded-xl border border-white/10 bg-white/5 px-4 py-4 font-display text-lg font-semibold uppercase tracking-[0.18em] text-white/95 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
