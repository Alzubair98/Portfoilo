const hamburger = document.querySelector('.button1');
const navMenu = document.querySelector('.orders');
const cross = document.querySelector('.x-button');
const link = document.querySelectorAll('.nav-link');
let i = 0;
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  cross.classList.toggle('active');
  navMenu.classList.toggle('active');
});

cross.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  cross.classList.toggle('active');
  navMenu.classList.toggle('active');
});

for (i = 0; i < link.length; i += 1) {
  link[i].addEventListener('click', () => {
    hamburger.classList.toggle('active');
    cross.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}