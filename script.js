// Smooth scroll for nav buttons
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form popup
function handleSubmit(event) {
  event.preventDefault();
  alert("✅ Thanks for contacting me! I’ll reply soon.");
  return false;
}

// Typing effect
const roles = [
  "12th Pass Student 🎓",
  "Future Physiotherapist (BPT) 👨‍⚕️",
  "Tech Enthusiast 🚀",
  "Creative Learner ✨"
];

let roleIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(deleteEffect, 1500);
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
