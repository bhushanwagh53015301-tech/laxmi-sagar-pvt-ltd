import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import companyLogo from "@/assets/Company Logo/L3_No BG_No_NAME.png";

export function Preloader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.84, 0] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
        >
          <div className="bp-grid pointer-events-none absolute inset-0 text-white/40" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="oklch(0.78 0.16 70)"
                  strokeWidth="2"
                  strokeDasharray="289"
                  initial={{ strokeDashoffset: 289 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </svg>
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-20 w-20 sm:h-24 sm:w-24"
              >
                <img
                  src={companyLogo}
                  alt="Laxmi Sagar Engineers logo"
                  className="h-full w-full object-contain"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="font-display text-sm font-semibold uppercase tracking-[0.4em] text-white">
                Laxmi Sagar
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-amber">
                Engineers Pvt Ltd
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
