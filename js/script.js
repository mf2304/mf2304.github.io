const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay:{
    disableOnInteraction: false,
    reverseDirection: false,
    pauseOnMouseEnter: true,
    delay: 1500
  }
});