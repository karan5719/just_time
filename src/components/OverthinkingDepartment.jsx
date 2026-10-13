import { motion } from "framer-motion";
import Screen from "./Screen";
import RevealText from "./RevealText";
import { PrimaryButton } from "./ui";
import { FINAL_MESSAGE, OVERTHINKING_CASES } from "../config/content";

export default function OverthinkingDepartment({ onContinue }) {
  return (
    <Screen scrollable particleDensity={16} className="items-start">
      <div className="mx-auto flex max-w-xl flex-col items-center py-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 max-w-lg text-left text-[15px] leading-relaxed sm:text-base"
          style={{ color: "var(--ink-soft)", whiteSpace: "pre-line" }}
        >
          {FINAL_MESSAGE}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display mb-3 text-3xl font-medium"
        >
          🧠 The Overthinking Department
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2 text-base"
          style={{ color: "var(--ink-soft)" }}
        >
          It's just me and my overthinking mind…
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-16 max-w-sm text-sm"
          style={{ color: "var(--ink-muted)" }}
        >
          And sometimes it starts asking questions I probably shouldn't even ask.
        </motion.p>

        <div className="flex w-full flex-col gap-20">
          {OVERTHINKING_CASES.map((c) => (
            <div key={c.id} className="flex flex-col items-center">
              {c.label && (
                <p className="mb-1 text-[11px] tracking-[0.2em]" style={{ color: "var(--gold)" }}>
                  {c.label}
                </p>
              )}
              <h2 className="font-display mb-8 text-xl font-medium sm:text-2xl">
                {c.title}
              </h2>
              <RevealText
                text={c.body}
                className="flex flex-col items-center"
                lineClassName="max-w-md text-[15px] leading-relaxed sm:text-base"
                stagger={0.04}
              />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <PrimaryButton onClick={onContinue}>Continue →</PrimaryButton>
        </motion.div>
      </div>
    </Screen>
  );
}
