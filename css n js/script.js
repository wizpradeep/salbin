// JavaScript for typewriter effect
const textElement = document.querySelector(".myNameIsSalbin");
const textToType = "SALBIN"; // The text you want to type out
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    textElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 200); // Adjust typing speed here (in milliseconds)
  }
}

// Start typing when the page loads
window.addEventListener("DOMContentLoaded", () => {
  typeText();
});

const bar = document.querySelector(".fa-bars");
const dropDown = document.querySelector(".dropDown");
const closeBtn = document.getElementById("close");

bar.addEventListener("click", () => {
  dropDown.style.display = "block";
  bar.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  dropDown.style.display = "none";
  bar.style.display = "block";
});

const fybtn = document.getElementById("fybtn");
const fyaudio = document.getElementById("fyaudio");

fybtn.addEventListener("click", function () {
  fyaudio.play();
});
