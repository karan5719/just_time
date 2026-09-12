import { motion } from "framer-motion";
import ParticleField from "./ParticleField";

export default function Screen({
  children,
  className = "",
  particles = true,
  particleDensity = 30,
  scrollable = false,
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className={`relative min-h-screen w-full ${
        scrollable ? "overflow-y-auto" : "flex items-center justify-center overflow-hidden"
      } px-6 py-16 sm:px-10 ${className}`}
      style={{ background: "var(--bg-deep)" }}
    >
      {particles && <ParticleField density={particleDensity} />}
      <div className="relative z-10 w-full">{children}</div>
    </motion.section>
  );
}
