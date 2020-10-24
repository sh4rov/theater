(() => {
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

  const btnOpen = document.querySelector('.header__btn-menu');
  const btnClose = document.querySelector('.mobile-menu__btn-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const classMenuOpen = 'mobile-menu_open';
  const mql = window.matchMedia("(max-width: 768px)");

  function removeClassMenuOpen() {
    mobileMenu.classList.remove(classMenuOpen)
  }

  btnOpen.addEventListener('click', () => {
    mobileMenu.classList.add(classMenuOpen)
  })
  btnClose.addEventListener('click', removeClassMenuOpen)

  
  function setupForWidth(e) {
    if (e.matches) {
      removeClassMenuOpen;
    }
  }

  mql.addEventListener(setupForWidth);


})()