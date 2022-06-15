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
    section.classList.remove('active');
    continer.classList.remove('active');
    section3.classList.remove('active');
    section4.classList.remove('active');
    section5.classList.remove('active');
  });
}







// cards-section

const cardsSection = `
<section class="section-3">
      
      <div class="card" id="cards">
        <div class="photo">
          <img
            class="work-img"
            src="Microverse-Student-Project-1/img2.png"
            alt="card-img"
          />
        </div>
        <div class="left-block">
          <div class="primary-text">
            <h2 class="project-title">Tonic</h2>
            <div class="frame-2">
              <div class="Client">
                <h2 class="CANPOY">CANPOY</h2>
                <i class="counter fa-solid fa-circle"></i>
                <div class="Role"><h2 class="back-end">Back End Dev</h2></div>
                <i class="counter fa-solid fa-circle"></i>
                <div class="Role"><h2 class="back-end">2022</h2></div>
              </div>
            </div>
          </div>
          <div class="information">
            <p class="des-text">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
          </div>

          <ul class="tags">
            <li class="tag"><a class="html" href="">html</a></li>
            <li class="tag"><a class="html" href="">CSS</a></li>
            <li class="tagj"><a class="html" href="">JavaScript</a></li>
          </ul>

          <div class="action">
            <button class="normal" type="button">See Project</button>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="photo">
          <img
            class="work-img work-img1"
            src="Microverse-Student-Project-1/img3.png"
            alt="card-img"
          />
        </div>
        <div class="left-block left-block1">
          <div class="primary-text">
            <h2 class="project-title">Multi-Post Stories</h2>
            <div class="frame-2">
              <div class="Client">
                <h2 class="CANPOY">CANPOY</h2>
                <i class="counter fa-solid fa-circle"></i>
                <div class="Role"><h2 class="back-end">Back End Dev</h2></div>
                <i class="counter fa-solid fa-circle"></i>
                <div class="Role"><h2 class="back-end">2022</h2></div>
              </div>
            </div>
          </div>
          <div class="information">
            <p class="des-text">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
          </div>

          <ul class="tags">
            <li class="tag"><a class="html" href="">html</a></li>
            <li class="tag"><a class="html" href="">CSS</a></li>
            <li class="tagj"><a class="html" href="">JavaScript</a></li>
          </ul>

          <div class="action">
            <button class="normal" type="button">See Project</button>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="photo">
          <img
            class="work-img"
            src="Microverse-Student-Project-1/img4.png"
            alt="card-img"
          />
        </div>
        <div class="left-block">
          <div class="primary-text">
            <h2 class="project-title">Tonic</h2>
            <div class="frame-2">
              <div class="Client">
                <h2 class="CANPOY">CANPOY</h2>
                <i class="counter fa-solid fa-circle"></i>
                <div class="Role"><h2 class="back-end">Back End Dev</h2></div>
                <i class="counter fa-solid fa-circle"></i>
                <div class="Role"><h2 class="back-end">2022</h2></div>
              </div>
            </div>
          </div>
          <div class="information">
            <p class="des-text">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
          </div>

          <ul class="tags">
            <li class="tag"><a class="html" href="">html</a></li>
            <li class="tag"><a class="html" href="">CSS</a></li>
            <li class="tagj"><a class="html" href="">JavaScript</a></li>
          </ul>

          <div class="action">
            <button class="normal" type="button">See Project</button>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="photo">
          <img
            class="work-img work-img1"
            src="Microverse-Student-Project-1/img5.png"
            alt="card-img"
          />
        </div>
        <div class="left-block left-block1">
          <div class="primary-text">
            <h2 class="project-title">Multi-Post Stories</h2>
            <div class="frame-2">
              <div class="Client">
                <h2 class="CANPOY">CANPOY</h2>
                <i class="counter fa-solid fa-circle"></i>
                <div class="Role"><h2 class="back-end">Back End Dev</h2></div>
                <i class="counter fa-solid fa-circle"></i>
                <div class="Role"><h2 class="back-end">2022</h2></div>
              </div>
            </div>
          </div>
          <div class="information">
            <p class="des-text">
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
          </div>

          <ul class="tags">
            <li class="tag"><a class="html" href="">html</a></li>
            <li class="tag"><a class="html" href="">CSS</a></li>
            <li class="tagj"><a class="html" href="">JavaScript</a></li>
          </ul>

          <div class="action">
            <button class="normal" type="button">See Project</button>
          </div>
        </div>
      </div>
    </section>
`

const divi = document.createElement("div");

divi.innerHTML = cardsSection

document.getElementById("section2").after(divi)
