const menuIcon = document.querySelector('.hamburger');
const hamburger = document.querySelector('.header-wrapper');
const body = document.querySelector('body');


menuIcon.addEventListener('click', () => {
  hamburger.classList.toggle('change');
  if (hamburger.classList.contains('change') === true) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = 'auto';
  }
});