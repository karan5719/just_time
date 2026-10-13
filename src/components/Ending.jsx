import { motion } from "framer-motion";
import Screen from "./Screen";
import { GhostButton } from "./ui";
import { FINAL_MESSAGE } from "../config/content";

export default function Ending({ onReplay }) {
  return (
    <Screen particleDensity={26}>
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-sm"
          style={{ color: "var(--ink-muted)" }}
        >
          one last thing
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display mb-10 text-3xl font-medium sm:text-4xl"
        >
          Thank you for being a part of my story.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xs text-base leading-loose"
          style={{ color: "var(--ink-soft)" }}
        >
          <strong>I hope life is kind to you.</strong>
          <br />
          <strong>Always. 🤍</strong>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-sm text-sm leading-relaxed"
          style={{ color: "var(--ink-muted)" }}
        >
          {FINAL_MESSAGE}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 text-xs"
          style={{ color: "var(--ink-muted)" }}
        >
          — Himanshu
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12"
        >
          <GhostButton onClick={onReplay}>Watch it again from the start</GhostButton>
        </motion.div>
      </div>
    </Screen>
  );
}
