document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const menuButton = document.querySelector('.menu-btn');
  const closeButton = document.querySelector('.close-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const logoMobileMenu = document.querySelector('.logo-mobile-menu');
  const nav = mobileMenu.querySelector('nav');

  // Function to open mobile menu
  function openMenu() {
      mobileMenu.style.display = 'flex';
      setTimeout(() => {
          mobileMenu.classList.add('active');
          logoMobileMenu.classList.add('show');
          nav.classList.add('show');
      }, 50); // Delay allows display change to be processed
  }

  // Function to close mobile menu
  function closeMenu() {
      logoMobileMenu.classList.remove('show');
      nav.classList.remove('show');
      mobileMenu.classList.remove('active');

      // Delay the hiding of the menu to allow transition
      setTimeout(() => {
          mobileMenu.style.display = 'none';
      }, 300); // Matches the slide-up duration
  }

  // Add event listeners for opening and closing the menu
  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
});

