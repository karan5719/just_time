import { motion } from "framer-motion";

export function GlassCard({ children, className = "", ...props }) {
  return (
    <motion.div
      className={`rounded-2xl border backdrop-blur-xl ${className}`}
      style={{
        background: "rgba(22, 18, 19, 0.55)",
        borderColor: "var(--line)",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function PrimaryButton({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors ${className}`}
      style={{
        background: "var(--wine)",
        color: "var(--ink)",
        boxShadow: "0 0 0 1px rgba(243,237,228,0.08), 0 8px 30px -10px rgba(138,59,63,0.6)",
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function GhostButton({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2, borderColor: "var(--gold)" }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-medium tracking-wide transition-colors ${className}`}
      style={{
        borderColor: "var(--line)",
        color: "var(--ink-soft)",
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function Eyebrow({ children }) {
  return (
    <p
      className="mb-4 text-xs tracking-[0.2em]"
      style={{ color: "var(--ink-muted)" }}
    >
      {children}
    </p>
  );
}
