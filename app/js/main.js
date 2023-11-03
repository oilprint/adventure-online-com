const swiper = new Swiper('.swiper', {
  speed: 1500,
  loop: true,
  grabCursor: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  // mousewheel: true,
  autoplay: {
        delay: 1200,
        pauseOnMouseEnter: true,
      },
  spaceBetween: 18,
  parallax:true, 
  keyboard: {
        enabled: true,
      },
});