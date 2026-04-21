import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

/**
 * @param {{ to?: string, href?: string, children: any, variant?: string, className?: string }} props
 */
export function MagneticButton(props) {
  const { to, href, children, variant = "amber", className = "" } = props;
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    setPos({ x: x * 0.25, y: y * 0.25 });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider transition-shadow sheen";
  const styles =
    variant === "amber"
      ? "bg-amber text-amber-foreground shadow-[var(--shadow-amber)] hover:shadow-[0_15px_50px_-10px_oklch(0.78_0.16_70/0.6)]"
      : variant === "outline"
        ? "border-2 border-white/70 text-white hover:bg-white hover:text-primary"
        : "bg-primary text-primary-foreground shadow-[var(--shadow-elegant)]";

  const inner = (
    <motion.span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.span>
  );

  if (to) return <Link to={to}>{inner}</Link>;
  if (href) return <a href={href}>{inner}</a>;
  return inner;
}
