import { motion } from "framer-motion";
import Screen from "./Screen";
import { GhostButton } from "./ui";

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
          to be continued… maybe
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display mb-10 text-3xl font-medium sm:text-4xl"
        >
          That's the whole website.
          <br />
          For now. 👀
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <GhostButton onClick={onReplay}>Watch it again from the start</GhostButton>
        </motion.div>
      </div>
    </Screen>
  );
}
