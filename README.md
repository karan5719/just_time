# For You — a private interactive site

A cinematic, single-page experience built with React, Vite, Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can host anywhere (Vercel, Netlify, GitHub Pages, etc.) — no backend needed.

## Everything you'll want to edit lives in one file

`src/config/content.js` — the name that unlocks the site, photo captions, evidence cards, the conversation, and the Overthinking Department text all live here. You shouldn't need to touch any component code to change the content.

Set the unlock name here:
```js
export const TARGET_NAME = "YOUR_NAME_HERE";
```

## Adding photos

Drop images into `public/images/` named `memory-01.jpg` through `memory-05.jpg` (or edit the filenames/list in `content.js` if you want a different count or naming).

## Notes on the "face verification"

It's a purely visual animation — a scanning circle, grid, and status text built with CSS/SVG/Framer Motion. It never requests camera, microphone, or any biometric permission, and never claims to have scanned anything real. That's stated on-screen during the sequence.

## Structure

```
src/
  App.jsx                    # the stage state machine driving the whole flow
  config/content.js          # ALL editable copy, name, photos, timing
  components/
    NameGate.jsx              # screen 01 — name entry
    WrongName.jsx             # screen 02 — wrong name outcome
    FaceVerification.jsx      # screens 03 — confirmed + fake scan sequence
    VerificationResult.jsx    # screen 04 — result card
    GratitudeSection.jsx      # screen 05 — "For You"
    MissYouAnimation.jsx      # screen 06 — particle heart + "I miss you"
    MemoryGallery.jsx         # screen 07 — photo gallery
    EvidenceCards.jsx         # screen 08 + 15 — funny evidence + closing beat
    OverthinkingDepartment.jsx# screen 09 — the case files
    ConversationSection.jsx   # screen 17 — message bubbles
    FinalNote.jsx             # screen 18 — final note + quiet close
    Ending.jsx                # screen 11 — playful open-ended ending
    ParticleField.jsx / RevealText.jsx / Screen.jsx / ui.jsx  # shared primitives
```

## What I didn't have to build from

The brief mentioned an existing `love-heart-animation.zip`. It wasn't attached, so `MissYouAnimation.jsx` is a from-scratch canvas particle system that forms a heart shape and pulses — swap it out if you find the original files.
