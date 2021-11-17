const menuIcon = document.querySelector('.hamburger');
const hamburger = document.querySelector('.header-wrapper');


menuIcon.addEventListener('click', () => {
  hamburger.classList.toggle('change');
})