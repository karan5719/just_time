import { motion } from "framer-motion";
import Screen from "./Screen";
import { PrimaryButton } from "./ui";
import { CONVERSATION } from "../config/content";

export default function ConversationSection({ onContinue }) {
  return (
    <Screen scrollable particleDensity={12} className="items-start">
      <div className="mx-auto flex max-w-md flex-col items-center py-10">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display mb-14 text-center text-2xl font-medium"
        >
          💭 And then there's this…
        </motion.h1>

        <div className="flex w-full flex-col gap-4">
          {CONVERSATION.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16, x: msg.from === "me" ? 16 : -16 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className="max-w-[85%] whitespace-pre-line rounded-2xl px-5 py-3.5 text-left text-[14.5px] leading-relaxed sm:text-[15px]"
                style={{
                  background: msg.from === "me" ? "var(--wine)" : "var(--bg-panel-2)",
                  color: msg.from === "me" ? "var(--ink)" : "var(--ink-soft)",
                  borderTopRightRadius: msg.from === "me" ? 4 : undefined,
                  borderTopLeftRadius: msg.from === "her" ? 4 : undefined,
                  border: msg.from === "her" ? "1px solid var(--line)" : "none",
                }}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <PrimaryButton onClick={onContinue}>Continue →</PrimaryButton>
        </motion.div>
      </div>
    </Screen>
  );
}
