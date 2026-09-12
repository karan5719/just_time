import { motion } from "framer-motion";
import Screen from "./Screen";
import { GhostButton } from "./ui";

export default function WrongName({ onRetry }) {
  return (
    <Screen particleDensity={16}>
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 14 }}
          className="font-display mb-6 text-4xl font-semibold sm:text-5xl"
          style={{ color: "var(--wine-soft)" }}
        >
          OOPS. 🚨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-2 text-lg"
        >
          Wrong person detected.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mb-2 text-lg"
          style={{ color: "var(--ink-soft)" }}
        >
          This website was definitely not made for you. 😭
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-10 text-sm"
          style={{ color: "var(--ink-muted)" }}
        >
          Emotional damage: Avoided successfully.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.6 }}
        >
          <GhostButton onClick={onRetry}>Try another name</GhostButton>
        </motion.div>
      </div>
    </Screen>
  );
}
