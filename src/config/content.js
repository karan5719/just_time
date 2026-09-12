// ─────────────────────────────────────────────────────────────
// EVERYTHING YOU'D WANT TO EDIT LIVES IN THIS FILE.
// Change the name, captions, messages, photos, colors, or timing
// here — you should never need to touch component code.
// ─────────────────────────────────────────────────────────────

// The only name that unlocks the site. Comparison is trim + lowercase.
export const TARGET_NAME = "Teju";

// Drop files at /public/images/memory-01.jpg ... memory-05.jpg
// (or edit the filenames below to match whatever you use)
export const MEMORY_PHOTOS = [
  {
    id: "memory-01",
    src: "/images/memory-01.jpg",
    caption: "Face pack on, smile still louder than everything else.\n\nEven covered in cream, you somehow looked like the whole mood.",
  },
  {
    id: "memory-02",
    src: "/images/memory-02.jpg",
    caption: "You laughing like that on a video call…\n\nand me on mute with a Nobita DP, pretending I was fine.\n\nI wasn't. I was smiling like an idiot.",
  },
  {
    id: "memory-03",
    src: "/images/memory-03.jpg",
    caption: "6 hours 44 minutes.\n\nWe didn't even notice time leaving.\n\nSome calls end.\nThis one just… stayed.",
  },
  {
    id: "memory-04",
    src: "/images/memory-04.jpg",
    caption: "That soft smile. Those curls.\n\nYou weren't even looking at the camera properly…\nand I still somehow saved the whole moment.",
  },
  {
    id: "memory-05",
    src: "/images/memory-05.jpg",
    caption: "You and your little one — tilak and all.\n\nThis photo feels like home for no reason.\nI just never deleted it.",
  },
];

export const EVIDENCE_CARDS = [
  {
    id: "ev-001",
    label: "Evidence #001",
    title: "Proof that you were actually cute.",
    detail: "Scientific research conducted by me. 🔬",
  },
  {
    id: "ev-002",
    label: "Evidence #002",
    title: "I can't believe you actually survived my attitude. 💀",
    detail: "Honestly… the patience award goes to you. 🏆😂",
  },
  {
    id: "ev-003",
    label: "Evidence #003",
    title: "Face verification result:",
    detail: "Still pretty.\n\nUnfortunately.",
  },
  {
    id: "ev-004",
    label: "Evidence #004",
    title: "Nuisance level",
    detail: "VERY HIGH.",
  },
];

// Timing constants (ms) — tune the pacing of the experience here.
export const TIMING = {
  letterReveal: 45,
  sentencePause: 900,
  screenTransition: 700,
  heartFormDuration: 3200,
};

export const CONVERSATION = [
  { from: "me", text: "Tum mujhe bhooli toh nahi ho…\npar yaad bhi nahi karti." },
  {
    from: "her",
    text: "Tumse nafrat bhi nahi hai,\naur pyaar bhi nahi karti.\n\nAgar tum mujhe message na karo,\ntoh main bhi tumhe message nahi karungi.\n\nTumhare na likhne se mujhe koi shikayat bhi nahi hogi.\n\nLekin jab tum khud message karte ho,\ntoh mujhe lagta hai tum apna self-respect\naur ego sab kuch side mein rakh kar\nabhi bhi mujhse baat kar rahe ho.\n\nAur jab tum kabhi pyaar ki baat kar dete ho,\ntoh main keh deti hoon —\n\n'Tum abhi bhi hope lekar mujhse baat kar rahe ho.'\n\nPar agar tumhe itni hi umeed hai,\ntoh phir khud ko rok kyun nahi lete?",
  },
  { from: "me", text: "Kyunki mujhe tumse kuch chahiye hi nahi." },
  { from: "her", text: "Phir baat kyun karte ho?" },
  { from: "me", text: "Pata nahi…" },
  {
    from: "me",
    text: "Shayad isliye kyunki tumse baat karna\nab bhi achha lagta hai.\n\nMain tumhe paane ki umeed mein nahi hoon,\nwarna tumhare badal jaane ka intezaar karta.\n\nMain bas tumhe bhoolna chahta hoon…\n\npar bhoolne ke liye tumse nafrat karna\nmujhse kabhi hua hi nahi.\n\nTum kehti ho main hope lekar baat karta hoon,\npar sach toh ye hai —\n\nMain tumhara hona nahi chahta,\nbas tumhe bilkul ajnabi bhi nahi kar paata.\n\nTum meri zindagi mein ho bhi nahi,\nphir bhi kahin na kahin reh jaati ho.\n\nAur shayad isi liye\njab tum khud kabhi message nahi karti,\ntab bhi main tumhe message kar deta hoon.\n\nKyunki kuch logon ko paane ki khwahish nahi hoti…\n\nbas unse baat karne ki aadat\nmarne mein thoda waqt leti hai.\n\nAur tumhe pata hai sabse ajeeb baat kya hai?\n\nTum mujhe bhooli bhi nahi ho,\nyaad bhi nahi karti…\n\naur main tumhe paana bhi nahi chahta,\nphir bhi tumse door nahi ho pata.",
  },
];

export const OVERTHINKING_CASES = [
  {
    id: "case-001",
    label: "CASE #001",
    title: "THE BEGINNING",
    body: "Kabhi-kabhi main sochne lagta hoon ki humare beech jo kuch bhi hua,\n\nkya woh sab bas tumhare random decisions the?\n\nYa kahin na kahin tumne pehle se kuch socha tha,\n\nkuch feel kiya tha,\n\nya kuch aisa tha jo main kabhi samajh hi nahi paaya?\n\nEspecially jab tum mujhe un cheezon ke baare mein batati thi,\n\ntoh pata nahi kyun mera dimaag un baaton ko baar-baar replay karne lagta hai.\n\nMain unhi moments ko alag-alag angles se sochta rehta hoon —\n\n\"Ye aise kyun hua?\"\n\n\"Us waqt tumhare mind mein kya chal raha hoga?\"\n\n\"Jo tumne kaha, kya woh genuinely us waqt feel karti thi?\"\n\n\"Ya main bas us cheez ka matlab apni taraf se kuch aur nikal raha hoon?\"\n\nI know, maybe ye sab sirf meri overthinking hai.\n\nAur ho sakta hai iska koi deep reason ho hi na.\n\nBut whenever you tell me something about that time,\n\nmy mind starts connecting random dots again.",
  },
  {
    id: "case-002",
    label: "CASE #002",
    title: "THE THINGS YOU TOLD ME",
    body: "Jab tum mujhe uss time ki kuch baatein batati thi…\n\nkya tum genuinely woh sab feel karti thi?\n\nYa main hi un moments ko baar-baar soch kar\n\nunmein aise meanings dhoondhta raha\n\njo shayad kabhi the hi nahi?\n\nMaybe I understood everything correctly.\n\nMaybe I didn't.\n\nMaybe some things meant exactly what I thought they meant…\n\nand maybe some didn't.\n\nI honestly don't know.",
  },
  {
    id: "case-003",
    label: "CASE #003",
    title: "THE 10TH → 12TH MYSTERY",
    body: "10th standard mein hum ek-dusre ko almost roz dekhte the.\n\nHum 10–12 ghante tak phone calls par baat karte the.\n\nItna time saath tha,\n\nitni baatein thi,\n\nitni familiarity thi…\n\nPhir bhi us waqt mujhe tumse aaj jaisi attachment feel nahi hoti thi.\n\nHaan, main aaj bhi us waqt ko bhool nahi paaya hoon.\n\nWoh memories mere liye important hain.\n\nLekin unhe yaad karne ka tareeka bhi alag hai.\n\n10th ka woh time mujhe yaad hai,\n\nlekin 12th ke baad wala tumhara phase mujhe mehsoos hota hai.",
  },
  {
    id: "case-004",
    label: "CASE #004",
    title: "THE AFTER 12TH MYSTERY",
    body: "12th ke baad pata nahi mere andar kya badal gaya.\n\nBaatein pehle se bahut kam ho gayi thi.\n\n10–12 ghante ki calls kuch hi ghanton tak reh gayi.\n\nKabhi video calls,\n\nkabhi chats,\n\nkabhi thodi si baat…\n\naur phir apni-apni zindagi mein busy.\n\nHum us period mein mile bhi the.\n\nPhir bhi pata nahi kyun —\n\njitna waqt tumhare saath kam hua,\n\nutni hi meri attachment badhti gayi.\n\nYe baat mujhe aaj tak samajh nahi aati.\n\n10th mein tum meri zindagi ka ek bahut bada hissa thi,\n\nphir bhi main tumhare bina rehne ki soch sakta tha.\n\nAur 12th ke baad…\n\njab tum meri life mein physically aur emotionally utni present bhi nahi thi,\n\ntab pata nahi kab tum meri aadat se badhkar\n\nmeri feelings ka ek permanent hissa ban gayi.",
  },
  {
    id: "case-question",
    label: "",
    title: "THE QUESTION I KEEP COMING BACK TO",
    body: "Kabhi sochta hoon —\n\nAgar attachment time se hoti hai,\n\ntoh mujhe 10th mein sabse zyada attached hona chahiye tha.\n\nAgar attachment milne se hoti hai,\n\ntoh mujhe un dino mein zyada attached hona chahiye tha jab hum mile the.\n\nAgar attachment baaton se hoti hai,\n\ntoh mujhe us waqt attached hona chahiye tha jab hum 10–12 ghante roz baat karte the.\n\nPhir aisa kyun hua ki jab baatein kam hui,\n\nmilna kam hua,\n\nwaqt kam hua…\n\ntab main tumse aur zyada judta chala gaya?",
  },
  {
    id: "case-005",
    label: "CASE #005",
    title: "THE FORGETTING PROBLEM",
    body: "Pata hai, aisa nahi hai ki main tumhe bhoolna nahi chahta.\n\nSach toh ye hai ki main bahut baar koshish kar chuka hoon…\n\nbas mujhse ho nahi paa raha.\n\nMaine apni zindagi mein bahut kuch chhod diya —\n\ndrinking,\n\nsmoking,\n\naur bhi bahut si cheezein.\n\nLekin ek cheez hai jo main chah kar bhi nahi chhod paa raha…\n\ntumhe yaad karna.\n\nPata hai mujhe bhi ki bahut waqt ho gaya hai.\n\nItna waqt ki shayad mujhe kab ka move on kar jaana chahiye tha.\n\nAur aisa bhi nahi hai ki maine try nahi kiya.\n\nBas pata nahi kyun…\n\nmujhse ye ho hi nahi paa raha.\n\nShayad tum mujhe utna yaad bhi nahi karti hogi.\n\nAur honestly, main us baat ko respect karta hoon.\n\nMujhe lagta hai shayad tumhare liye move on karna\n\nmujhse zyada easy raha hoga.\n\nLekin jo cheez main aaj tak samajh nahi paaya, woh ye hai —\n\nmain kyun nahi kar paa raha?",
  },
  {
    id: "case-006",
    label: "CASE #006",
    title: "THE REAL MYSTERY",
    body: "Ek aur sach hai…\n\nMere saath kisi ne kabhi waise treat nahi kiya jaise tumne kiya.\n\nPehle mujhe tumhari value\n\naur tumhari care ki shayad utni samajh nahi thi.\n\nAur ye baat mujhe khud bhi ajeeb lagti hai.\n\nShayad isi liye main khud ko samajh nahi paa raha.\n\nMain bas ye samajhne ki koshish karta rehta hoon —\n\ntum mere liye itni important kab ho gayi,\n\njab mujhe khud pata bhi nahi chala?",
  },
];
