import { motion } from "framer-motion";
import Screen from "./Screen";
import { GhostButton } from "./ui";

const PARAGRAPHS = [
  "Thank you for everything we shared.",
  "For all the conversations, the random calls, the laughs, the little fights, the stupid things, the serious talks, the moments we understood each other, and even the moments we didn't.",
  "Thank you for being there during a part of my life that I know I'll always remember.",
  "There are so many things from that time that probably don't mean much to you anymore… but they still mean something to me.",
  "And honestly, I don't want to change that.",
  "I don't want to rewrite our story or wonder who was right and who was wrong.",
];

export default function BeforeYouGo({ onDone }) {
  return (
    <Screen particleDensity={12} scrollable>
      <div className="mx-auto flex max-w-lg flex-col items-center py-12 text-center sm:py-20">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display mb-3 text-sm uppercase tracking-[0.2em]"
          style={{ color: "var(--gold)" }}
        >
          Before you go…
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display mb-10 text-3xl font-medium sm:text-4xl"
        >
          There’s just one last thing I want to say.
        </motion.h1>

        <div className="space-y-7 text-[15px] leading-loose sm:text-base">
          <p className="font-display text-2xl" style={{ color: "var(--gold)" }}>
            <strong>Thank you.</strong>
          </p>
          {PARAGRAPHS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <strong>It happened.</strong>
            <br />
            <strong>We happened.</strong>
            <br />
            <strong>And I'm grateful that we did.</strong>
          </p>
          <p>
            Maybe we were meant to stay in each other's lives.
            <br />
            Maybe we weren't.
            <br />
            Maybe some people are only meant to be a chapter, even when that chapter becomes one of the most memorable parts of the book.
          </p>
          <p>
            Whatever happens from here… I'll always be thankful that, at one point, I got to know you, talk to you, laugh with you, care about you, and call you an important part of my life.
          </p>
          <p>
            I don't know what you'll remember about us.
            <br />
            I don't know what you'll forget.
            <br />
            But I know what I'll remember.
            <br />
            <strong>Everything we shared.</strong>
          </p>
          <p className="font-display text-xl" style={{ color: "var(--gold)" }}>
            <strong>And for all of it—thank you. 🤍</strong>
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <GhostButton onClick={onDone}>One last thing →</GhostButton>
        </motion.div>
      </div>
    </Screen>
  );
}