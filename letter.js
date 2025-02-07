const typedText = document.getElementById("typed-text");

const loveLetter = `
My dearest Biba,

From the moment we met, my life has been filled with joy and warmth. 
Every moment with you feels like a treasure, and I cherish every memory we've created together.

You are my sunshine on cloudy days, my rock in times of trouble, and my greatest adventure. 
I am so grateful to have you in my life, and I look forward to all the beautiful moments yet to come.

Forever and always,
Your loving Bibli
`;

const options = {
  strings: [loveLetter],
  typeSpeed: 50, // Typing speed in milliseconds
  showCursor: false, // Hide the blinking cursor
  onComplete: () => {
    // Add a heart animation or confetti effect here if desired
  },
};

const typed = new Typed(typedText, options);

window.onload = () => {
    const backgroundMusic = document.getElementById("background-music");
  
    document.body.addEventListener("click", () => {
      backgroundMusic.play().catch(error => console.log("Autoplay blocked:", error));
    }, { once: true });
  
    setInterval(() => {
      createHearts();
    }, 2000);
  };
//   const backgroundMusic = document.getElementById("background-music");
  
  function createHearts() {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.classList.add("heart");
  
      // Ensure hearts can appear across the full width of the screen
      heart.style.left = `${Math.random() * 100}vw`;
  
      // Start near the bottom with a slight variation
      heart.style.bottom = `${Math.random() * 100}vh`;
  
      // Random size for variety
      const size = Math.random() * 20 + 10; // Between 10px and 30px
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
  
      // Random animation delay for a natural effect
      heart.style.animationDelay = `${Math.random() * 0.5}s`;
  
      document.body.appendChild(heart); // Ensure it appends to the full page
  
      // Remove hearts after animation ends
      heart.addEventListener("animationend", () => {
        heart.remove();
      });
    }
  }
  