// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in");

function checkFade() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

// Form submission alert
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! We'll get back to you soon.");
});
