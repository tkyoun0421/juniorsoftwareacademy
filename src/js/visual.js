
// 변수 선언
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const autoplayStop = document.querySelector(".btn-autoplay");
const $autoSwiperStopBtn = $('.btn-control.stop');
const $autoSwiperPlayBtn = $('.btn-control.play');

var swiper = new Swiper(".visual-swiper", {

  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction", 
  },
  navigation: {
    nextEl: ".btn-swiper-prev",
    prevEl: ".btn-swiper-next",
  },
  on: {    
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
    }
  }  
});

function autoSwiperStop() {
  swiper.autoplay.resume();
  swiper.autoplay.stop();
  $autoSwiperStopBtn.css('display', 'none');
  $autoSwiperPlayBtn.css('display', 'block');  
}

function autoSwiperPlay() {
  swiper.autoplay.start();
  swiper.autoplay.resume();
  $autoSwiperPlayBtn.css('display', 'none');  
  $autoSwiperStopBtn.css('display', 'block');  
}

function init() {
  $autoSwiperStopBtn.on("click", autoSwiperStop);
  $autoSwiperPlayBtn.on("click", autoSwiperPlay);
}

init();