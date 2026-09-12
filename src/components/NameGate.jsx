import { useState } from "react";
import { motion } from "framer-motion";
import Screen from "./Screen";
import { GlassCard, PrimaryButton } from "./ui";
import { TARGET_NAME } from "../config/content";

export default function NameGate({ onSuccess, onFail }) {
  const [value, setValue] = useState("");
  const [shake, setShake] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const normalized = value.trim().toLowerCase();
    const target = TARGET_NAME.trim().toLowerCase();
    if (normalized.length > 0 && normalized === target) {
      onSuccess();
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      onFail();
    }
  }

  return (
    <Screen particleDensity={22}>
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3 text-sm"
          style={{ color: "var(--ink-muted)" }}
        >
          Before we begin… 👀
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display mb-2 text-2xl font-medium sm:text-3xl"
        >
          I need to make sure this is actually you.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 mt-6 text-lg"
          style={{ color: "var(--ink-soft)" }}
        >
          What's your name?
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          onSubmit={handleSubmit}
          className="w-full"
        >
          <motion.div
            animate={shake ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-2">
              <input
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Type your name…"
                aria-label="Your name"
                className="w-full rounded-xl bg-transparent px-4 py-3 text-center text-lg outline-none placeholder:opacity-40"
                style={{ color: "var(--ink)" }}
              />
            </GlassCard>
          </motion.div>

          <div className="mt-6 flex justify-center">
            <PrimaryButton type="submit">Unlock my surprise →</PrimaryButton>
          </div>
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-xs"
          style={{ color: "var(--ink-muted)" }}
        >
          If you enter the wrong name, I'm pretending we never met. 💀
        </motion.p>
      </div>
    </Screen>
  );
}
