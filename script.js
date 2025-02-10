// script.js
const clues = [
    {
      clue: "Clue 1: Our faviourite mandir in mumbai? (Hint: we often visit there si_hiv_ _ay_k)",
      answer: "sidhivinayak",
      memory: {
        text: "magical!",
        image: "images/sidhivinayk.jpeg" // Replace with your image path
      }
    },
    {
      clue: "Clue 2: Sabse payara koun...? (Hint: opposite of you)",
      answer: "me",
      memory: {
        text: "Our first meeting  was magical!",
        image: "images/birthday.jpeg" // Replace with your image path
      }
    },
    {
      clue: "Clue 3: Our first out-station? (Hint:hum use nhi karte....)" ,
      answer: "kashmir",
      memory: {
        text: "You remembered!!!",
        image: "images/kashmir.jpeg" // Replace with your image path
      }
    },
    {
      clue: "Clue 4: Whose songs are our favorite ?",
      answer: "govinda",
      memory: {
        text: "Yes! 'Perfect'.",
        image: "images/cocktail.jpeg" // Replace with your image path
      }
    },
    {
      clue: "Clue 5: Last place we visited with shruti didi ? (Hint:k_r_a_)",
      answer: "karjat",
      memory: {
        text: "Yes! 'Perfect'.",
        image: "images/karjat.jpeg" // Replace with your image path
      }
    },
    {
      clue: "Clue 6: Ye rate ye mosam nadi ka kinara..... ?((Hint: a place in jind, two words))",
      answer: "rani talab",
      memory: {
        text: "Yes! 'Perfect'.",
        image: "images/rani_talab.jpeg" // Replace with your image path
      }
    },
    {
      clue: "Clue 7: Our first trip with family..... ?((Hint: a place in rajasthan))",
      answer: "jaipur",
      memory: {
        text: "Yes! 'Perfect'.",
        image: "images/jaipur.jpeg" // Replace with your image path
      }
    },
    {
      clue: "Clue 8: Our favourite color..... ?",
      answer: "green",
      memory: {
        text: "Yes! 'Perfect'.",
        image: "images/green.jpeg" // Replace with your image path
      }
    },
  ];
  
  let currentClueIndex = 0;
  const clueElement = document.getElementById("clue");
  const answerInput = document.getElementById("answer-input");
  const submitBtn = document.getElementById("submit-btn");
  const resultElement = document.getElementById("result");
  const memoryContainer = document.getElementById("memory-container");
  const memoryImage = document.getElementById("memory-image");
  const memoryText = document.getElementById("memory-text");
  const heartContainer = document.getElementById("heart-container");
 const backgroundMusic = document.getElementById("background-music");

  // Display the first clue
  clueElement.textContent = clues[currentClueIndex].clue;
  // Play background music when the page loads
  window.onload = () => {
    const backgroundMusic = document.getElementById("background-music");
  
    document.body.addEventListener("click", () => {
      backgroundMusic.play().catch(error => console.log("Autoplay blocked:", error));
    }, { once: true });
  
    // setInterval(() => {
    //   createHearts();
    // }, 2000);
  };

  submitBtn.addEventListener("click", () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = clues[currentClueIndex].answer;
  
    if (userAnswer === correctAnswer) {
      resultElement.textContent = "Correct! Unlocking a memory...";
      displayMemory(clues[currentClueIndex].memory);
      createHearts(); // Trigger heart animation

      // Move to the next clue
      currentClueIndex++;
      if (currentClueIndex < clues.length) {
        setTimeout(() => {
          clueElement.textContent = clues[currentClueIndex].clue;
          resultElement.textContent = "";
          answerInput.value = "";
          memoryContainer.style.display = "none";
        }, 3000);
      } else {
        resultElement.textContent = "Congratulations! You've found all the treasures!";
        submitBtn.disabled = true;
   setTimeout(() => {
    console.log("redirect")
    window.location.href = "letter.html"; 
    // Redirect to the love letter page
      }, 3000);
      }
    } else {
      resultElement.textContent = "Oops! Try again.";
    }
  });
  
  function displayMemory(memory) {
    memoryImage.src = memory.image;
    memoryText.textContent = memory.text;
    memoryContainer.style.display = "block";
  }


//  function createHearts() {
//   for (let i = 0; i < 20; i++) {
//     const heart = document.createElement("div");
//     heart.classList.add("heart");

//     // Random horizontal position (full screen width)
//     heart.style.left = `${Math.random() * window.innerWidth}px`;

//     // Random vertical position (start from bottom of the screen)
//     heart.style.bottom = `${Math.random() * 20}px`; // Start near the bottom

//     // Random size for variety
//     const size = Math.random() * 20 + 10; // Between 10px and 30px
//     heart.style.width = `${size}px`;
//     heart.style.height = `${size}px`;

//     // Random animation delay
//     heart.style.animationDelay = `${Math.random() * 0.5}s`;

//     heartContainer.appendChild(heart);

//     // Remove hearts after animation ends
//     heart.addEventListener("animationend", () => {
//       heart.remove();
//     });
//   }
// }


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

  

