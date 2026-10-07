export const config = {
  // Personal Details
  herName: "Sarah", // Replace with her name
  myName: "Alex",   // Replace with your name

  // Section 1: Surprise Landing
  landing: {
    title: "Someone very special has a birthday today...",
    subtitle: "And unfortunately for you... you have to deal with me.",
    buttonText: "Open Your Birthday Surprise 🎁",
  },

  // Section 2: Funny Intro
  intro: {
    message1: "Before we continue...",
    message2: "Yes, you're getting older.",
    message3: "But don't worry...",
    message4: "You're still younger than you'll be tomorrow.",
    message5: "Okay okay... I'm done bullying you.",
    message6: "Maybe.",
  },

  // Section 3: Why You Are Awesome
  reasons: [
    "Your smile",
    "Your laugh",
    "Your ability to tolerate me",
    "Your random conversations",
    "Your adorable anger",
    "Your kindness",
    "Your beautiful heart",
    "Literally... everything."
  ],

  // Section 4: Memory/Photo Section
  // Put images in /public/images/ and reference them here
  gallery: [
    { src: "/images/photo1.jpg", caption: "That time we did that thing" },
    { src: "/images/photo2.jpg", caption: "You looking cute as always" },
    { src: "/images/photo3.jpg", caption: "Our first trip together" },
    { src: "/images/photo4.jpg", caption: "Remember this?" },
    { src: "/images/photo5.jpg", caption: "My favorite picture of you" },
    { src: "/images/photo6.jpg", caption: "Pure chaos" }
  ],

  // Section 5: Relationship Statistics
  stats: {
    argumentsWonByHer: "100%",
    argumentsWonByMe: "Error 404",
    timesSheWasRight: "∞",
    timesIAdmittedSheWasRight: "Still calculating...",
    timesSheMadeMeSmile: "Too many to count ❤️",
    patienceRequiredToDealWithMe: "██████████ 100%"
  },

  // Section 6: Interactive Quiz
  quiz: [
    {
      question: "What is my favorite thing to do with you?",
      options: ["Watching movies", "Eating food", "Just talking", "Annoying you"],
      correct: 3, // Index of correct option (0-based)
      reaction: "Obviously! It's my favorite hobby. 😂"
    },
    {
      question: "Who usually apologizes first?",
      options: ["Me", "You", "Neither, we just forget about it"],
      correct: 1,
      reaction: "We both know it's you... I'm too stubborn. 😅"
    },
    {
      question: "Who is more stubborn?",
      options: ["Me", "You", "We are equally terrible"],
      correct: 2,
      reaction: "A match made in heaven! 😈"
    },
    {
      question: "Who is more likely to say 'I'm fine' when they're definitely NOT fine?",
      options: ["Me", "You", "Both of us"],
      correct: 1,
      reaction: "And then I have to guess what I did wrong for 3 hours... 🙄"
    }
  ],
  
  // Section 7: Confession
  confession: {
    part1: "Okay...",
    part2: "I've been hiding something.",
    part3: "I actually...",
    part4: "LOVE YOU. A LOT. ❤️",
    part5: "Probably more than I know how to explain."
  },

  // Section 8: Personal Letter
  letter: `Dear Sarah,

Happy Birthday ❤️

I don't think I say it enough, but having you in my life makes everything a little more fun, a little more chaotic, and a lot more meaningful.

Thank you for all the laughs, conversations, memories, random moments, and for simply being you.

I hope this year brings you everything you wish for.

And yes...

I promise to annoy you for many more birthdays.

With lots of love,
Alex ❤️`,

  // Section 9: The Birthday Cake
  cake: {
    instruction: "Make a wish...",
    buttonText: "Blow the candles 🕯️",
    celebration: "HAPPY BIRTHDAY, SARAH! 🎉❤️",
    postCelebration: "Your wish better include me."
  },

  // Section 10: Final Surprise
  final: {
    message1: "One last thing...",
    message2: "No matter how many birthdays come...",
    message3: "I'll still choose you.",
    message4: "Happy Birthday, Sarah. ❤️",
    message5: "Here's to more memories,\nmore adventures,\nmore laughter,\nmore stupid arguments,\nand a lot more love.",
    message6: "I love you ❤️"
  },

  // Secret Easter Egg
  easterEgg: {
    clicksRequired: 5,
    message: "YOU FOUND THE SECRET! 👀\n\nOkay, I have to admit...\nYou're actually the best thing that ever happened to me. Don't let it get to your head though! 😜"
  }
};
