const words = ["Designer", "Photographer", "Developer", "Freelancer"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  document.getElementById("typing").textContent = currentWord.slice(0,charIndex);

  if (!isDeleting && charIndex === currentWord.length) {
    // Pause before deleting
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    // Move to next word and reset
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  // Control typing speed
  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

// Start the effect
typeEffect();
