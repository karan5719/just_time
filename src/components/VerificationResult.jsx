import { motion } from "framer-motion";
import Screen from "./Screen";
import { GlassCard, PrimaryButton } from "./ui";

const ROWS = [
  { label: "SMILE DETECTED", value: "✓", tone: "gold" },
  { label: "CUTENESS DETECTED", value: "✓", tone: "gold" },
  { label: "ATTITUDE", value: "⚠ Still under investigation", tone: "muted" },
  { label: "NUISANCE LEVEL", value: "VERY HIGH 💀", tone: "wine" },
  { label: "SPECIAL PERSON", value: "❤️ CONFIRMED", tone: "wine" },
];

export default function VerificationResult({ onContinue }) {
  return (
    <Screen particleDensity={20}>
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <GlassCard
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full p-8"
        >
          <p className="font-display mb-6 text-lg" style={{ color: "var(--ink-soft)" }}>
            Verification Result
          </p>
          <div className="flex flex-col divide-y" style={{ borderColor: "var(--line)" }}>
            {ROWS.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.12, duration: 0.5 }}
                className="flex items-center justify-between py-3 text-sm"
                style={{ borderColor: "var(--line)" }}
              >
                <span style={{ color: "var(--ink-muted)" }}>{row.label}</span>
                <span
                  className="font-medium"
                  style={{
                    color:
                      row.tone === "gold"
                        ? "var(--gold)"
                        : row.tone === "wine"
                        ? "var(--wine-soft)"
                        : "var(--ink-soft)",
                  }}
                >
                  {row.value}
                </span>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-10 text-lg"
          style={{ color: "var(--ink-soft)" }}
        >
          Still pretty as before.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="font-display mt-2 text-xl"
        >
          Some things really haven't changed. ❤️
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          className="mt-10"
        >
          <PrimaryButton onClick={onContinue}>Continue →</PrimaryButton>
        </motion.div>
      </div>
    </Screen>
  );
}
