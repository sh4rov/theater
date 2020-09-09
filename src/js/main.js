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

const projectsSwiper = new Swiper('.projects__swiper-container', {
  slidesPerView: 4,
  loop: true,
})