const heroSwiper = new Swiper('.hero__swiper-container', {
  spaceBetween: 20,
  speed: 400,
  grabCursor: true,
  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.hero__nav-btn_next',
    prevEl: '.hero__nav-btn_prev',
  },
});

// Open and close mobil-menu

const btn_open = document.querySelector('.header__btn-menu');
const btn_close = document.querySelector('.mobile-menu__btn-close');
const mobile_menu = document.querySelector('.mobile-menu');

function toggle_menu () {
  btn_open.addEventListener('click', () => {
    mobile_menu.classList.add('mobile-menu_open')
  })
  
  btn_close.addEventListener('click', () => {
    mobile_menu.classList.remove('mobile-menu_open')
  })
}

toggle_menu();