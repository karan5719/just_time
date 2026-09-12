import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import NameGate from "./components/NameGate";
import WrongName from "./components/WrongName";
import FaceVerification from "./components/FaceVerification";
import VerificationResult from "./components/VerificationResult";
import GratitudeSection from "./components/GratitudeSection";
import MissYouAnimation from "./components/MissYouAnimation";
import MemoryGallery from "./components/MemoryGallery";
import EvidenceCards from "./components/EvidenceCards";
import OverthinkingDepartment from "./components/OverthinkingDepartment";
import ConversationSection from "./components/ConversationSection";
import FinalNote from "./components/FinalNote";
import BeforeYouGo from "./components/BeforeYouGo";
import Ending from "./components/Ending";

// The full stage order. Editing this array changes the flow of the site.
const STAGES = [
  "name",
  "faceVerification",
  "verificationResult",
  "gratitude",
  "missYou",
  "gallery",
  "evidence",
  "overthinking",
  "conversation",
  "finalNote",
  "beforeYouGo",
  "ending",
];

export default function App() {
  const [stage, setStage] = useState("name");
  const [wrongAttempt, setWrongAttempt] = useState(false);

  const currentIndex = STAGES.indexOf(stage);
  const showProgress = currentIndex > 0 && !wrongAttempt;

  function goTo(next) {
    window.scrollTo(0, 0);
    setStage(next);
  }

  return (
    <div className="relative min-h-screen">
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      {showProgress && (
        <div
          className="fixed left-0 right-0 top-0 z-50 h-[2px]"
          style={{ background: "rgba(243,237,228,0.06)" }}
        >
          <div
            className="h-full transition-all duration-700 ease-out"
            style={{
              width: `${(currentIndex / (STAGES.length - 1)) * 100}%`,
              background: "linear-gradient(90deg, var(--wine), var(--gold))",
            }}
          />
        </div>
      )}

      <AnimatePresence mode="wait">
        {wrongAttempt ? (
          <WrongName key="wrong" onRetry={() => setWrongAttempt(false)} />
        ) : (
          <>
            {stage === "name" && (
              <NameGate
                key="name"
                onSuccess={() => goTo("faceVerification")}
                onFail={() => setWrongAttempt(true)}
              />
            )}
            {stage === "faceVerification" && (
              <FaceVerification key="face" onComplete={() => goTo("verificationResult")} />
            )}
            {stage === "verificationResult" && (
              <VerificationResult key="result" onContinue={() => goTo("gratitude")} />
            )}
            {stage === "gratitude" && (
              <GratitudeSection key="gratitude" onContinue={() => goTo("missYou")} />
            )}
            {stage === "missYou" && (
              <MissYouAnimation key="missYou" onContinue={() => goTo("gallery")} />
            )}
            {stage === "gallery" && (
              <MemoryGallery key="gallery" onContinue={() => goTo("evidence")} />
            )}
            {stage === "evidence" && (
              <EvidenceCards key="evidence" onContinue={() => goTo("overthinking")} />
            )}
            {stage === "overthinking" && (
              <OverthinkingDepartment key="overthinking" onContinue={() => goTo("conversation")} />
            )}
            {stage === "conversation" && (
              <ConversationSection key="conversation" onContinue={() => goTo("finalNote")} />
            )}
            {stage === "finalNote" && (
              <FinalNote key="finalNote" onDone={() => goTo("beforeYouGo")} />
            )}
            {stage === "beforeYouGo" && (
              <BeforeYouGo key="beforeYouGo" onDone={() => goTo("ending")} />
            )}
            {stage === "ending" && (
              <Ending key="ending" onReplay={() => goTo("name")} />
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
