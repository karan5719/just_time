import { motion } from "framer-motion";

/**
 * Splits a block of text into lines (on \n) and reveals them one at a time,
 * staggered, as they scroll into view. Empty lines become breathing room.
 */
export default function RevealText({
  text,
  className = "",
  lineClassName = "",
  stagger = 0.09,
  once = true,
}) {
  const lines = text.split("\n");

  return (
    <div className={className}>
      {lines.map((line, i) =>
        line.trim() === "" ? (
          <div key={i} className="h-3 sm:h-4" aria-hidden="true" />
        ) : (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.7, delay: i * stagger, ease: [0.22, 1, 0.36, 1] }}
            className={lineClassName}
          >
            {line}
          </motion.p>
        )
      )}
    </div>
  );
}
