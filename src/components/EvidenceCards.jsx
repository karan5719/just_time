import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Screen from "./Screen";
import { GlassCard, PrimaryButton } from "./ui";
import { EVIDENCE_CARDS } from "../config/content";

export default function EvidenceCards({ onContinue }) {
  const [classifiedOpen, setClassifiedOpen] = useState(false);

  return (
    <Screen scrollable particleDensity={14} className="items-start">
      <div className="mx-auto flex max-w-xl flex-col items-center py-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-2 text-base"
          style={{ color: "var(--ink-muted)" }}
        >
          Okay, enough nostalgia.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display mb-14 text-3xl font-medium"
        >
          Here's the important stuff.
        </motion.h1>

        <div className="grid w-full gap-5 sm:grid-cols-2">
          {EVIDENCE_CARDS.map((card, i) => (
            <GlassCard
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 text-left"
            >
              <p className="mb-3 text-[11px] tracking-[0.15em]" style={{ color: "var(--gold)" }}>
                {card.label}
              </p>
              <p className="font-display text-lg">{card.title}</p>
              {card.detail && (
                <p className="mt-2 whitespace-pre-line text-sm" style={{ color: "var(--ink-soft)" }}>
                  {card.detail}
                </p>
              )}
            </GlassCard>
          ))}

          <GlassCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setClassifiedOpen(true)}
            className="cursor-pointer p-6 text-left sm:col-span-2"
          >
            <p className="font-display text-lg">🔐 This photo is classified.</p>
            <p className="mt-1 text-xs" style={{ color: "var(--ink-muted)" }}>
              (tap to attempt access)
            </p>
          </GlassCard>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-sm text-sm leading-relaxed"
          style={{ color: "var(--ink-muted)" }}
        >
          That's enough pictures.
          <br />
          Because if I keep going, this website is going to become a museum. 😭
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display mt-6 max-w-sm text-lg leading-relaxed"
        >
          But every picture here has one thing in common…
          <br />
          <br />
          At some point, you made my life a little more beautiful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <PrimaryButton onClick={onContinue}>Continue →</PrimaryButton>
        </motion.div>
      </div>

      <AnimatePresence>
        {classifiedOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setClassifiedOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="max-w-xs p-8 text-center">
                <p className="font-display text-xl">No. 😂</p>
                <p className="mt-3 text-sm" style={{ color: "var(--ink-soft)" }}>
                  You thought I'd actually reveal it?
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Screen>
  );
}
