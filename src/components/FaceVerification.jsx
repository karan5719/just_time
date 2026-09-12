import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Screen from "./Screen";
import { PrimaryButton } from "./ui";

const STATUS_MESSAGES = [
  "Initializing verification...",
  "Detecting face...",
  "Checking eyes...",
  "Checking memories...",
  "Checking personality...",
  "Comparing with old memories...",
  "Almost there...",
];

export default function FaceVerification({ onComplete }) {
  const [stage, setStage] = useState("intro"); // intro -> scanning -> matched
  const [statusIndex, setStatusIndex] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (stage !== "scanning") return;

    const statusInterval = setInterval(() => {
      setStatusIndex((i) => Math.min(i + 1, STATUS_MESSAGES.length - 1));
    }, 750);

    const percentInterval = setInterval(() => {
      setPercent((p) => {
        const next = p + Math.random() * 6 + 2;
        return next >= 100 ? 100 : next;
      });
    }, 90);

    const done = setTimeout(() => setStage("matched"), 5600);

    return () => {
      clearInterval(statusInterval);
      clearInterval(percentInterval);
      clearTimeout(done);
    };
  }, [stage]);

  return (
    <Screen particleDensity={20}>
      <AnimatePresence mode="wait">
        {stage === "intro" && (
          <motion.div
            key="intro"
            exit={{ opacity: 0, y: -16 }}
            className="mx-auto flex max-w-md flex-col items-center text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display mb-4 text-3xl font-medium"
            >
              Name confirmed. ❤️
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mb-2 text-lg"
              style={{ color: "var(--ink-soft)" }}
            >
              But a name isn't enough.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-10 text-lg"
              style={{ color: "var(--ink-soft)" }}
            >
              Let's verify the face. 👀
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <PrimaryButton onClick={() => setStage("scanning")}>
                Start face verification
              </PrimaryButton>
            </motion.div>
          </motion.div>
        )}

        {stage !== "intro" && (
          <motion.div
            key="scan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mx-auto flex max-w-md flex-col items-center text-center"
          >
            <ScanRig percent={percent} matched={stage === "matched"} />

            <div className="mt-8 h-7">
              <AnimatePresence mode="wait">
                {stage === "scanning" ? (
                  <motion.p
                    key={statusIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm tracking-wide"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    {STATUS_MESSAGES[statusIndex]}
                  </motion.p>
                ) : (
                  <motion.p
                    key="matched-label"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-display text-lg font-medium"
                    style={{ color: "var(--gold)" }}
                  >
                    FACE MATCH FOUND
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {stage === "matched" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 flex flex-col items-center gap-6"
              >
                <p className="font-display text-2xl" style={{ color: "var(--wine-soft)" }}>
                  MATCH: 100% ❤️
                </p>
                <PrimaryButton onClick={onComplete}>Continue →</PrimaryButton>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px]" style={{ color: "var(--ink-muted)", opacity: 0.6 }}>
        This is a visual simulation only. No camera or biometric data is used.
      </p>
    </Screen>
  );
}

function ScanRig({ percent, matched }) {
  return (
    <div className="relative h-56 w-56 sm:h-64 sm:w-64">
      {/* rotating outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border"
        style={{ borderColor: "rgba(200,168,105,0.25)", borderStyle: "dashed" }}
      />
      {/* glowing grid circle */}
      <div
        className="absolute inset-4 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(138,59,63,0.18), transparent 70%)",
          border: "1px solid rgba(243,237,228,0.12)",
        }}
      />
      {/* grid lines */}
      <svg className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] opacity-30">
        <defs>
          <pattern id="grid" width="18" height="18" patternUnits="userSpaceOnUse">
            <path d="M 18 0 L 0 0 0 18" fill="none" stroke="var(--ink-muted)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* scan line */}
      {!matched && (
        <motion.div
          animate={{ top: ["10%", "90%", "10%"] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-4 right-4 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--gold), transparent)",
            boxShadow: "0 0 12px 2px rgba(200,168,105,0.6)",
          }}
        />
      )}

      {/* center glow */}
      <motion.div
        animate={
          matched
            ? { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.9] }
            : { scale: [1, 1.05, 1] }
        }
        transition={{ duration: matched ? 1.1 : 2, repeat: matched ? Infinity : Infinity }}
        className="absolute inset-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: matched
            ? "radial-gradient(circle, rgba(200,168,105,0.55), transparent 70%)"
            : "radial-gradient(circle, rgba(138,59,63,0.4), transparent 70%)",
          filter: "blur(4px)",
        }}
      />

      {/* percentage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-3xl font-medium">
          {Math.round(percent)}%
        </span>
      </div>
    </div>
  );
}
