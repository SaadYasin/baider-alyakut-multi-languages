// Language selection

// Translations
const 

const navTriggerBtn = document.querySelector('#nav-trigger-btn') 
const navMenu = document.querySelector('#nav-menu')

// Event listeners

navTriggerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-is-open')
})

// Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Breakpoints
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    960: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});

// Scroll reveal animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600,
  reset: true,
});

// Hero text reveal
sr.reveal('.hero__text', { origin: 'top' });

// Steps reveal
sr.reveal('.steps__step', { distance: '100px', interval: 100 });

// About
sr.reveal('.about__text', { origin: 'left' });
sr.reveal('.about__img', { origin: 'right', delay: 800 });

// Services
sr.reveal(".services__bg", { delay: 800 });
sr.reveal(".services__title");
sr.reveal(".services__slider", {delay: 1000});

// Work
sr.reveal(".work__title");
sr.reveal(".work__subtitle", {delay: 800});
sr.reveal(".work__grid", { delay: 800 });

// Stats
sr.reveal(".stats");
sr.reveal(".stats__item", {
  distance: '100px',
  interval: 100,
});

// News
sr.reveal(".news__title");
sr.reveal(".news__subtitle", { delay: 800 });
sr.reveal(".news__item", {
  distance: '100px',
  interval: 100,
  delay: 1000,
});

// Contact
sr.reveal(".contact__container");
sr.reveal(".contact__text", { delay: 800 });

// Footer
sr.reveal(".footer__item", {
  distance: "100px",
  interval: 100,
});
sr.reveal(".footer__copyright");
