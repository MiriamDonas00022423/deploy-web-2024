
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}


if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}


const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


function scrollHeader() {
  const header = document.getElementById('header')
  if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const swiperBenefits = new Swiper('.benefits__swiper', {
  loop: true,
  spaceBetween: '32',
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  }

});

let mixerItems = mixitup('.items__content', {
  selectors: {
    target: '.items__card'
  },
  animation: {
    duration: 300
  }
});

const linkItems = document.querySelectorAll('.featured__item');

function activeFeatured() {
  linkItems.forEach(l => l.classList.remove('active-featured'))
  this.classList.add('active-featured');
}
linkItems.forEach(l => l.addEventListener('click', activeFeatured))

let swiperTestimonial = new Swiper('.testimonial__swiper', {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1500: {
      slidesPerView: 3,
      centeredSlides: false,
    }
  }

});


document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');

  const tooltips = document.querySelectorAll('.description__tooltip');

  tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', function () {

      const title = this.querySelector('.description__tooltip-text').textContent;
      let text = '';


      switch (title) {
        case 'HDMI and USB Connectivity':
          text = 'HDMI ports enable connection of external devices such as gaming consoles, Blu-ray players, and sound systems.';
          break;
        case 'Slim and Stylish Design':
          text = 'Fit seamlessly into any viewing environment without taking up too much space.';
          break;
        case 'Voice Assistants':
          text = 'Such as Amazon Alexa, Google Assistant, or Apple Siri allows you to control the TV with voice commands';
          break;
        case 'Preset Picture Modes':
          text = 'Adjust the picture settings to enhance viewing based on the type of content.';
          break;
      }


      modalTitle.textContent = title;
      modalText.textContent = text;


      modal.style.display = 'block';
    });
  });


  modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('subscribe-form');
  const emailInput = document.getElementById('email');
  const message = document.getElementById('form-message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();


    message.textContent = '';


    const email = emailInput.value.trim();
    if (!email) {
      message.textContent = 'Email address is required.';
      return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      message.textContent = 'Please enter a valid email address :).';
      return;
    }

    message.textContent = 'Thank you for subscribing!';
    message.style.color = 'green';


    emailInput.value = '';
  });
});

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive);


const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,


})

sr.reveal('.footer, .items__filters')
sr.reveal('.home__title, .section__title', { delay: 600 });
sr.reveal('.cta-button', { origin: 'buttom' })
sr.reveal('.description__tooltip', { origin: 'right' });
sr.reveal('.items__card', { interval: 100 });

let parallax = new Rellax('.parallax');



