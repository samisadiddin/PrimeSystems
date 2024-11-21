document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Adjust threshold as needed
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });
});

// Mobile menu
// Select elements
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const fullscreenMenu = document.querySelector('.fullscreen-menu');

// Open the menu
menuBtn.addEventListener('click', () => {
  fullscreenMenu.classList.add('active');
});

// Close the menu
closeBtn.addEventListener('click', () => {
  fullscreenMenu.classList.remove('active');
});

// Optional: Close menu when clicking outside
fullscreenMenu.addEventListener('click', (e) => {
  if (e.target === fullscreenMenu) {
    fullscreenMenu.classList.remove('active');
  }
});

