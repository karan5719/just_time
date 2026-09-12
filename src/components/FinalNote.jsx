import { useState } from "react";
import { motion } from "framer-motion";
import Screen from "./Screen";
import RevealText from "./RevealText";
import { GhostButton } from "./ui";

const NOTE = `Main tumhe blame nahi kar raha hoon,
aur na hi chahta hoon ki tum meri baaton ko blame ki tarah lo.

Jo hua, jis tarah hua —
shayad us waqt hum dono ke liye wahi sahi tha.

Main bas apni taraf se un cheezon ko samajhne ki koshish kar raha hoon
jo aaj tak mujhe samajh nahi aayi.

Tumne kya kiya, kyun kiya —
uska jawab mujhe tumse nahi chahiye.

Main bas ye samajhna chahta hoon
ki mere andar tum itni gehri jagah bana kaise gayi
ki itna waqt beetne ke baad bhi
main tumhe apne andar se nikaal nahi paa raha.

Isliye ye sab keh raha hoon…
tumhe guilty feel karane ke liye nahi,
tumse kuch expect karne ke liye nahi,
aur na hi tumhe wapas paane ke liye.

Bas kabhi-kabhi insaan ko
apne hi dil se kuch sawaalon ke jawab chahiye hote hain.

Aur mere un sawaalon mein,
tum aaj bhi kahin na kahin ho. 🖤`;

export default function FinalNote({ onDone }) {
  return (
    <Screen particleDensity={10} scrollable>
      <div className="mx-auto flex max-w-md flex-col items-center py-16 text-center">
        <RevealText
          text={NOTE}
          className="flex flex-col items-center"
          lineClassName="text-[15px] leading-loose sm:text-base"
          stagger={0.08}
        />
        <ClosingBeat onDone={onDone} />
      </div>
    </Screen>
  );
}

function ClosingBeat({ onDone }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20%" }}
      onViewportEnter={() => setTimeout(() => setRevealed(true), 3200)}
      transition={{ duration: 0.6 }}
      className="mt-20 flex min-h-[80px] flex-col items-center gap-6"
    >
      {revealed && (
        <>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm"
            style={{ color: "var(--ink-muted)" }}
          >
            That's all.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-display text-lg"
            style={{ color: "var(--ink-soft)" }}
          >
            Or maybe… that's not all. 👀
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <GhostButton onClick={onDone}>There's still one thing →</GhostButton>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}
