/* =============================================================
   ✏️  EDIT THIS FILE to change every word in the app.
   Save it, then refresh the page. No other file needs changing.

   Tips:
   - {her} is swapped for herName, {you} for yourName.
   - Add or remove buttons in "actions". Each one needs:
       icon     – an emoji
       label    – text on the button (keep it short, ~20 letters)
       points   – how much gussa it removes (gussa starts at 100)
       messages – what shows up when she taps it (picked at random,
                  no repeats until all have been shown)
   - Keep the commas and quotes. If the page shows an error,
     a comma or quote is missing.
   ============================================================= */
window.CONFIG = {
  herName: "Pyaari",
  yourName: "Tumhara Hero 😎",

  pageTitle: "{her} ke liye 💕",
  title: "Sorry {her} 🥺",
  subtitle: "Pta hai meri {her} gussa hai... Sorry, galti meri thi. Ab se main gussa nahi karunga, promise. 🤞 Bas ye buttons dabao aur mujhe ek mauka do. 🙏",
  intro: "Har button mein thoda sa sorry chhupa hai. Dabao na please 👇",

  meterLabel: "Gussa level",

  // Her face changes as gussa goes down. Keep the rows from high to low.
  // The first row where gussa >= angerAtLeast is the one shown.
  moods: [
    { angerAtLeast: 85, face: "😡", label: "Full Jwalamukhi mode 🌋" },
    { angerAtLeast: 65, face: "😤", label: "Gussa abhi bhi naak pe hai" },
    { angerAtLeast: 45, face: "😒", label: "Soch rahi hai... maaf karun ya nahi" },
    { angerAtLeast: 25, face: "🙂", label: "Hasi rok rahi hai 🤭" },
    { angerAtLeast: 1,  face: "😊", label: "Bas thoda sa aur!" },
    { angerAtLeast: 0,  face: "🥰", label: "Mood ekdum set! ✨" },
  ],

  actions: [
    {
      icon: "🙏", label: "Sorry suno", points: 15,
      messages: [
        "Sorry {her}. Galti ho gayi. Bahut badi wali. Meri aukaat se bhi badi. 🙏",
        "Main galat tha. Haan, likh ke de raha hoon. Screenshot le lo, court mein kaam aayega. 📸",
        "Sorry × 1000. Ginti mat karna, beech mein bhool jaogi aur phir se gussa ho jaogi.",
        "Kaan pakad ke sorry. 50 uthak-baithak bhi kar loon? Bas ek baar bolo. 🙇",
        "Haan main idiot hoon. Par tumhara idiot hoon. Return policy nahi hai, sorry. 😅",
      ],
    },
    {
      icon: "🤗", label: "Jhappi lo", points: 12,
      messages: [
        "*Ek lambi wali jaadu ki jhappi* 🤗 Ab gussa thoda kam hua?",
        "Jhappi delivered ✅ Refund nahi milega. Extra jhappi bilkul free hai.",
        "Ye jhappi tab tak chalegi jab tak tum muskura nahi deti. Main wait kar raha hoon. Abhi bhi. Haan, abhi bhi. 🤗",
      ],
    },
    {
      icon: "🌹", label: "Phool lo", points: 10,
      messages: [
        "🌹🌹🌹 Poora bouquet tumhare liye. Phool wale bhaiya bhi pooch rahe the, 'Itna bada kaand kiya kya?'",
        "Roses are red, galti meri thi, ye sach hai. Phool le lo please, mera dil bhi saath hai. 🌹",
        "Gulab tumhare liye. Kaante maine rakh liye. Deserve karta hoon. 🥀",
      ],
    },
    {
      icon: "🍫", label: "Chocolate lo", points: 10,
      messages: [
        "Dairy Milk Silk. Badi wali. Share karne ki koi zaroorat nahi. 🍫",
        "Chocolate kha lo, gussa pighal jayega. Science hai ye. Maine WhatsApp pe padha tha. 🔬",
        "Meri saari chocolate ab tumhari. Woh bhi jo maine almirah mein chhupa ke rakhi thi. 🤫",
      ],
    },
    {
      icon: "💌", label: "Tareef suno", points: 8,
      messages: [
        "Gusse mein bhi koi itna cute kaise lag sakta hai? Ye illegal hona chahiye. 🚨",
        "Tum duniya ki sabse smart, sabse funny aur sabse sundar ladki ho. Ye main nahi, Google bol raha hai. 😌",
        "Tumhari smile dekh ke chaand bhi bolta hai, 'Bhai main chalta hoon.' 🌙",
        "Main tumhare level ka nahi hoon, pata hai. Phir bhi tumne mujhe choose kiya. Lucky toh main hi hoon. 🍀",
      ],
    },
    {
      icon: "🍕", label: "Khana mangwao", points: 12,
      messages: [
        "Pizza order ho gaya. Extra cheese. Koi bahas nahi. 🍕",
        "Jab vapis aaunga, sabse pehle golgappe party. Tum jitne kahogi utne. Main ginti nahi karunga, promise. 🥟",
        "Biryani aa rahi hai. Leg piece tumhara. Haan, dono. 🍗",
        "Jab vapis aaunga, sabse pehle dinner date. Jagah tum chuno, bill main bharunga. Wallet ro raha hai, par main nahi. 💸",
      ],
    },
    {
      icon: "🤝", label: "Promise lo", points: 10,
      messages: [
        "Promise: tumhari baat dhyan se sununga. Phone side mein rakh ke. 📵",
        "Promise: ab 'hmm' aur 'k' mein reply nahi karunga. Poora paragraph likhunga. ✍️",
        "Promise: 'Kuch nahi hua' ka matlab samajh jaunga ki kuch toh hua hai. 🕵️",
        "Promise: tum hamesha first ho. Cricket match se bhi pehle. Haan, World Cup se bhi. 🏏",
      ],
    },
    {
      icon: "🙈", label: "Tum sahi thi", points: 20,
      messages: [
        "Tum sahi thi. Main galat tha. Aaj ki date calendar mein laal pen se mark kar lo. 📅",
        "Official announcement 📢: {her} sahi thi. {you} galat tha. Ye announcement 3 baar repeat hoga.",
        "Tum hamesha sahi hoti ho. Pata nahi main ye baar baar kyun bhool jata hoon. Badaam khane padenge. 🥜",
      ],
    },
  ],

  // Shown when gussa reaches 0.
  finalQuestion: "Toh... maaf kar diya? 🥺",
  yesButton: "Haan 💖",
  noButton: "Nahi",
  // The "Nahi" button runs away and changes to these, one after another.
  noButtonTexts: [
    "Pakka?", "Pakka pakka?", "Ek baar aur soch lo 🤔", "Please na 🥺",
    "Itna bhi kya gussa?", "Main ro dunga 😭", "Galat button hai ye!",
    "Pakad ke dikhao 😜", "Ye button kaam hi nahi karta 😎",
  ],

  celebrationTitle: "Yayyy! Maafi mil gayi! 🥳",
  celebrationMessage: "Thank you {her}, mujhe itna jhelne ke liye. Tum best ho, aur main duniya ka sabse lucky ladka hoon. I love you! Jab vapis aaunga, sabse pehle dinner date, meri taraf se. ❤️",
  celebrationEmoji: ["💖", "💕", "🌹", "✨", "🥰", "🎉", "🥳"],
  startOver: "Ab bhi gussa hai? 🥺",
};
