const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 20,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hero__nav-btn_next',
    prevEl: '.hero__nav-btn_prev',
  },
});