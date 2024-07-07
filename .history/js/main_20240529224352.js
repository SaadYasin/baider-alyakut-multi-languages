const navTriggerBtn = document.querySelector('#nav-trigger-btn') 
const navMenu = document.querySelector('#nav-menu')

// Event listeners

navTriggerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('nav-is-open')
})

// Swiper
const swiper = new Swiper('.swiper', {}