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
})

// Scroll reveal animations
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 600,
  // reset: true,
})

// Hero text reveal
sr.reveal('.hero__text', { origin: 'top' })

// Steps reveal
sr.reveal('.steps__step', { distance: '100px', interval: 100 })

// About
sr.reveal('.about__text', { origin: 'left' })
sr.reveal('.about__text', { origin: 'left' })