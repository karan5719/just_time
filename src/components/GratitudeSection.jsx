import { motion } from "framer-motion";
import Screen from "./Screen";
import RevealText from "./RevealText";
import { PrimaryButton } from "./ui";

const PASSAGE = `I don't know if I've ever properly said this…

But thank you.

Thank you for being a part of my life.

For the conversations that lasted for hours.

For the random calls.

For the silly things we laughed about.

For the moments that probably felt ordinary to you…

but somehow stayed with me.

There are things you probably don't even remember anymore,

but I still do.

10th standard…

10–12 hours of talking somehow felt normal.

At the time, I didn't realise how special that was.

I didn't realise how much your presence would eventually mean to me.

But somewhere along the way,

you became a really important part of my life.

And regardless of where life takes us,

I'll always be grateful that,

at one point,

it was you and me.

I don't need you to remember everything.

I'm just grateful that I got to live it.`;

export default function GratitudeSection({ onContinue }) {
  return (
    <Screen scrollable particleDensity={18} className="items-start">
      <div className="mx-auto flex max-w-lg flex-col items-center py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display mb-14 text-4xl font-medium"
        >
          For You.
        </motion.h1>

        <RevealText
          text={PASSAGE}
          className="flex flex-col items-center"
          lineClassName="text-lg leading-relaxed sm:text-xl"
          stagger={0.05}
        />

        <div className="my-16 h-px w-16" style={{ background: "var(--line)" }} />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8 }}
          className="font-display max-w-sm text-xl leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          Some people stay.
          <br />
          Some people leave.
          <br />
          And then there are some people…
          <br />
          who leave, but somehow never really leave.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-8"
        >
          <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
            Okay… enough emotional stuff. 😭
            <br />
            You didn't come all this way just to read my overthinking.
            <br />
            Let's play something. 👀
          </p>
          <PrimaryButton onClick={onContinue}>Continue →</PrimaryButton>
        </motion.div>
      </div>
    </Screen>
  );
}
