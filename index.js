const hamburger = document.querySelector('.button1');
const navMenu = document.querySelector('.orders-cont');
const cross = document.querySelector('.x-button');
const link = document.querySelectorAll('.nav-link');
const section = document.querySelector('.section-2');
const continer = document.querySelector('.header');
const section3 = document.querySelector('.section-3');
const section4 = document.querySelector('.desk-continer');
const section5 = document.querySelector('.final-section');

let i = 0;
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  section.classList.toggle('active');
  continer.classList.toggle('active');
  section3.classList.toggle('active');
  section4.classList.toggle('active');
  section5.classList.toggle('active');
});

cross.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  section.classList.toggle('active');
  continer.classList.toggle('active');
  section3.classList.toggle('active');
  section4.classList.toggle('active');
  section5.classList.toggle('active');
});

for (i = 0; i < link.length; i += 1) {
  link[i].addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    section.classList.toggle('active');
    continer.classList.toggle('active');
    section3.classList.toggle('active');
    section4.classList.toggle('active');
    section5.classList.toggle('active');
  });
}