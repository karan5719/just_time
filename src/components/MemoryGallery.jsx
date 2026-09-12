import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Screen from "./Screen";
import { PrimaryButton } from "./ui";
import { MEMORY_PHOTOS } from "../config/content";

const ROTATIONS = [-4, 3, -2, 5, -3];

export default function MemoryGallery({ onContinue }) {
  const [openId, setOpenId] = useState(null);
  const openPhoto = MEMORY_PHOTOS.find((p) => p.id === openId);

  return (
    <Screen scrollable particleDensity={14} className="items-start">
      <div className="mx-auto flex max-w-2xl flex-col items-center py-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display mb-6 text-3xl font-medium sm:text-4xl"
        >
          A Few Things I Kept
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-14 max-w-sm text-base leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          You know what's funny? I never really planned to keep these. They just… stayed.
        </motion.p>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {MEMORY_PHOTOS.map((photo, i) => (
            <motion.button
              key={photo.id}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: ROTATIONS[i % ROTATIONS.length] }}
              viewport={{ once: true, margin: "-10%" }}
              whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setOpenId(photo.id)}
              className="relative w-full max-w-[160px] cursor-pointer rounded-sm bg-[#f3ede4] p-2 pb-6 text-left shadow-[0_18px_30px_-12px_rgba(0,0,0,0.6)]"
              aria-label={`Open memory photo: ${photo.caption.split("\n")[0]}`}
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#2a2223]">
                <img
                  src={photo.src}
                  alt=""
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  loading="lazy"
                />
              </div>
              <p className="font-display mt-2 truncate text-[11px] text-[#3a2f2c]">
                {photo.caption.split("\n")[0]}
              </p>
            </motion.button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8 }}
          className="font-display mt-16 max-w-sm text-lg leading-relaxed"
          style={{ color: "var(--ink-soft)" }}
        >
          Maybe that's the problem with memories.
          <br />
          They don't always need a reason to stay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12"
        >
          <PrimaryButton onClick={onContinue}>Continue →</PrimaryButton>
        </motion.div>
      </div>

      <AnimatePresence>
        {openPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-sm bg-[#f3ede4] p-3 pb-8"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-[#2a2223]">
                <img
                  src={openPhoto.src}
                  alt=""
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <p className="font-display mt-4 whitespace-pre-line px-2 text-sm text-[#3a2f2c]">
                {openPhoto.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Screen>
  );
}
