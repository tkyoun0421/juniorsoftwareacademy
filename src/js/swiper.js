var swiper = new Swiper(".visual-swiper", {

  loop: true, // 무한 루프
  autoplay: {
    delay: 5000 //5초의 딜레이를 주고 자동 재생된다
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",    
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});