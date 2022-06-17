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

// cards-objects

const allCards = [
  {
    name: 'Tonic',
    description: `A daily selection of privately personalized reads; no
      accounts or sign-ups required.`,
    image: 'Microverse-Student-Project-1/img2.png',
    technologies: ['html', 'CSS', 'JabaScript'],
    live: 'https://alzubair98.github.io/code-review/',
    source: 'https://github.com/Alzubair98/code-review.git',
  },
  {
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no
      accounts or sign-ups required.`,
    image: 'Microverse-Student-Project-1/img3.png',
    technologies: ['html', 'CSS', 'JabaScript'],
    live: 'https://alzubair98.github.io/code-review/',
    source: 'https://github.com/Alzubair98/code-review.git',
  },
  {
    name: 'Tonic',
    description: `A daily selection of privately personalized reads; no
      accounts or sign-ups required.`,
    image: 'Microverse-Student-Project-1/img4.png',
    technologies: ['html', 'CSS', 'JabaScript'],
    live: 'https://alzubair98.github.io/code-review/',
    source: 'https://github.com/Alzubair98/code-review.git',
  },
  {
    name: 'Profesional Art Printing Data',
    description: `A daily selection of privately personalized reads; no
      accounts or sign-ups required. has been the industry's
      standard`,
    image: 'Microverse-Student-Project-1/img5.png',
    technologies: ['html', 'CSS', 'JabaScript'],
    live: 'https://alzubair98.github.io/code-review/',
    source: 'https://github.com/Alzubair98/code-review.git',
  },
];

// cards-section

const popUpCard = `
  <div class='full-card-cont'>
   <div class="full-card">
      <div class="card-text-cont">
        <h2 class="card-title">Tonic</h2>
        <button class="card-xbutton"><i class="full-card-xmark fa-solid fa-xmark"></i></button>
      </div>
      <div class="card-CANOPY">
        <h3 class="CANOPY-text-card CANPOY">CANOPY</h3>
        <i class="counter counter1 fa-solid fa-circle"></i>
        <h3 class="back-end back-end-full-card">Back End Dev</h3>
        <i class="counter counter1 fa-solid fa-circle"></i>
        <h3 class="back-end back-end-full-card">2022</h3>
      </div>
      <div class="card-img-continer">
        <img class="full-card-img" src="Microverse-Student-Project-1/img2.png" alt="">
      </div>
      <div class="second-part">
        <div class="full-card-first-div">
          <h3 class="second-part-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</h3>        
        </div>
        <div class="full-card-second-div">
          <ul class="tags full-card-tags">
            <li class="tag full-card-tag"><a class="html" href="">html</a></li>
            <li class="tag full-card-tag"><a class="html" href="">CSS</a></li>
            <li class="tagj full-card-tag"><a class="html" href="">JavaScript</a></li>
          </ul>
          <div class="hr-full-card">
            <hr class="full-card-hr">
          </div>
          <div class="full-card-buttons">
            <button class="full-card-button normal">See Live <i class="fa-solid fa-eye"></i></button>
            <button class="full-card-button normal">See Source <i class="fa-brands fa-github-alt"></i> </button>
          </div>
        </div>          
      </div>     
    </div>
  </div>
`;

const firstCard = `
    
      <div class="card" id="cards">
        <div class="photo">
          <img
            class="work-img"
            src=""
            alt="card-img"
          />
        </div>
        <div class="left-block">
          <div class="primary-text">
            <h2 class="project-title"></h2>
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
              
            </p>
          </div>

          <ul class="tags">
            <li class="tag"><a class="html" href=""></a></li>
            <li class="tag"><a class="html" href=""></a></li>
            <li class="tagj"><a class="html" href=""></a></li>
          </ul>

          <div class="action">
            <button class="normal apper" type="button">See Project</button>
          </div>
        </div>
      </div>`;

const secondCard = `
      <div class="card">
        <div class="photo">
          <img
            class="work-img work-img1"
            src=""
            alt="card-img"
          />
        </div>
        <div class="left-block left-block1">
          <div class="primary-text">
            <h2 class="project-title"></h2>
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
              
            </p>
          </div>

          <ul class="tags">
            <li class="tag"><a class="html" href=""></a></li>
            <li class="tag"><a class="html" href=""></a></li>
            <li class="tagj"><a class="html" href=""></a></li>
          </ul>

          <div class="action">
            <button class="normal apper" type="button">See Project</button>
          </div>
        </div>
      </div>`;
const thirdCard = `
      <div class="card">
        <div class="photo">
          <img
            class="work-img"
            src=""
            alt="card-img"
          />
        </div>
        <div class="left-block">
          <div class="primary-text">
            <h2 class="project-title"></h2>
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
              
            </p>
          </div>

          <ul class="tags">
            <li class="tag"><a class="html" href=""></a></li>
            <li class="tag"><a class="html" href=""></a></li>
            <li class="tagj"><a class="html" href=""></a></li>
          </ul>

          <div class="action">
            <button class="normal apper" type="button">See Project</button>
          </div>
        </div>
      </div>`;
const forthCard = `
      <div class="card">
        <div class="photo">
          <img
            class="work-img work-img1"
            src=""
            alt="card-img"
          />
        </div>
        <div class="left-block left-block1">
          <div class="primary-text">
            <h2 class="project-title"></h2>
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
              
            </p>
          </div>

          <ul class="tags">
            <li class="tag"><a class="html" href=""></a></li>
            <li class="tag"><a class="html" href=""></a></li>
            <li class="tagj"><a class="html" href=""></a></li>
          </ul>

          <div class="action">
            <button class="normal apper" type="button">See Project</button>
          </div>
        </div>
      </div>
`;

window.addEventListener('load', () => {
  document.getElementById('section3').innerHTML = firstCard
   + secondCard
   + thirdCard
   + forthCard;

  //
  allCards.forEach((cardsData, index) => {
    const cardsSection = document.getElementById('section3').children[index];
    cardsSection.querySelector('img').setAttribute('src', cardsData.image);
    cardsSection.querySelector('h2').textContent = cardsData.name;
    cardsSection.querySelector('p').textContent = cardsData.description;
    cardsSection.querySelectorAll('a').forEach((link, item) => {
      link.textContent = cardsData.technologies[item];
    });
  });

  const popUpDiv = document.createElement('section');
  popUpDiv.classList.add('theCard', 'hide');
  popUpDiv.innerHTML = popUpCard;
  document.getElementById('section3').before(popUpDiv);

  const closePopup = document.querySelector('.full-card-xmark');
  const wholeCard = document.querySelector('.theCard');
  const buttons = document.getElementById('section3').querySelectorAll('button');
  const fullBody = document.body;
  for (let b = 0; b < buttons.length; b += 1) {
    buttons[b].addEventListener('click', () => {
      wholeCard.classList.toggle('hide');
      fullBody.classList.toggle('active');
    });
  }

  closePopup.addEventListener('click', () => {
    wholeCard.classList.toggle('hide');
    fullBody.classList.toggle('active');
  });
});

const form = document.getElementById('contact-information');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.elements.usermail;
  const emailText = email.value;
  const errorMsg = document.querySelector('.error');
  if (emailText !== emailText.toLowerCase()) {
    errorMsg.classList.add('active');
  } else {
    form.submit();
    errorMsg.classList.remove('active');
  }
});


// local storage 

const username = form.elements.username;
const theEmail = form.elements.usermail;
const userMsg = form.elements.usermsg;


// local storage

form.addEventListener('input', ()=>{
  const theInputs = {
    Name: username.value,
    Email: theEmail.value,
    msg: userMsg.value,
  }
  const allData = JSON.stringify(theInputs);
  localStorage.setItem('data', allData);
});

function reTakeData() {
  if (localStorage.getItem('data')){
    const fullData = JSON.parse(localStorage.getItem('data'));
    username.value = fullData.Name;
    userMsg.value = fullData.msg;
    theEmail.value = fullData.Email;
  }
}

reTakeData();