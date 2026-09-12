import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Screen from "./Screen";
import { PrimaryButton } from "./ui";

const FLOAT_WORDS = ["the calls", "the laughs", "your voice", "random conversations", "those days", "you"];

// generate points along a parametric heart curve
function heartPoints(count, scale) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    const t = (i / count) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    pts.push({ x: x * scale, y: -y * scale });
  }
  return pts;
}

export default function MissYouAnimation({ onContinue }) {
  const canvasRef = useRef(null);
  const [stage, setStage] = useState(1); // 1 particles appear, 2 converge, 3 heart pulses
  const [textStage, setTextStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(2), 1400);
    const t2 = setTimeout(() => setStage(3), 3400);
    const t3 = setTimeout(() => setTextStage(1), 4400); // "I miss you."
    const t4 = setTimeout(() => setTextStage(2), 6400); // "More than I probably should."
    const t5 = setTimeout(() => setTextStage(3), 8600); // "I don't miss everything... I miss the little things."
    const t6 = setTimeout(() => setTextStage(4), 10800); // floating words
    const t7 = setTimeout(() => setTextStage(5), 15200); // final "I miss you" + button
    return () => [t1, t2, t3, t4, t5, t6, t7].forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function resize() {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const count = 140;
    const scale = Math.min(w, h) / 34;
    const targets = heartPoints(count, scale);
    const particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      tx: w / 2 + targets[i].x,
      ty: h / 2 + targets[i].y - 10,
      r: Math.random() * 1.6 + 0.8,
    }));

    let t = 0;
    function tick() {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);

      const converge = stage >= 2 ? Math.min(1, (t - 1.4) / 1.6) : 0;
      const pulse = stage === 3 ? 1 + Math.sin(t * 2.2) * 0.03 : 1;

      for (const p of particles) {
        let x, y;
        if (stage < 2) {
          x = p.x;
          y = p.y;
        } else {
          const cx = w / 2 + (p.tx - w / 2) * pulse;
          const cy = h / 2 + (p.ty - h / 2) * pulse;
          const ease = Math.min(1, converge);
          x = p.x + (cx - p.x) * ease;
          y = p.y + (cy - p.y) * ease;
        }
        ctx.beginPath();
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        const glow = stage === 3 ? 0.85 : 0.5;
        ctx.fillStyle = `rgba(200,168,105,${glow})`;
        ctx.shadowBlur = stage === 3 ? 8 : 0;
        ctx.shadowColor = "rgba(200,168,105,0.6)";
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    if (!prefersReducedMotion) {
      tick();
    } else {
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.tx, p.ty, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(200,168,105,0.85)";
        ctx.fill();
      }
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  return (
    <Screen particles={false} particleDensity={0} className="overflow-hidden">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center text-center">
        <AnimatePresence mode="wait">
          {textStage === 1 && (
            <TypedLine key="l1" text="I miss you." size="text-4xl sm:text-5xl" />
          )}
          {textStage === 2 && (
            <motion.div
              key="l2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-2xl"
              style={{ color: "var(--ink-soft)" }}
            >
              More than I probably should.
            </motion.div>
          )}
          {textStage === 3 && (
            <motion.div
              key="l3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="font-display flex flex-col gap-3 text-xl leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              <span>I don't miss everything…</span>
              <span>I miss the little things.</span>
            </motion.div>
          )}
          {textStage === 4 && (
            <motion.div
              key="l4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4"
            >
              {FLOAT_WORDS.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.55, duration: 0.7 }}
                  className={word === "you" ? "font-display text-2xl" : "text-lg"}
                  style={{ color: word === "you" ? "var(--gold)" : "var(--ink-muted)" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          )}
          {textStage === 5 && (
            <motion.div
              key="l5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center gap-10"
            >
              <p className="font-display text-4xl">I miss you. ❤️</p>
              <PrimaryButton onClick={onContinue}>Continue →</PrimaryButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Screen>
  );
}

function TypedLine({ text, size }) {
  return (
    <motion.h2
      initial="hidden"
      animate="visible"
      className={`font-display ${size}`}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.045, duration: 0.2 }}
        >
          {ch}
        </motion.span>
      ))}
    </motion.h2>
  );
}
