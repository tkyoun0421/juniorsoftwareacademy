const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const autoplayStop = document.querySelector(".btn-autoplay");

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

function autoplayToggle() {
  const autoplayBtn = document.querySelector(".btn-autoplay i");
  swiper.autoplay.resume();
  if (autoplayBtn.classList.contains('fa-pause')) {
    autoplayBtn.classList.remove('fa-pause');
    autoplayBtn.classList.add('fa-play');
    swiper.autoplay.stop();
  } else {
    autoplayBtn.classList.remove('fa-play');
    autoplayBtn.classList.add('fa-pause');
    swiper.autoplay.start();
  }
}

autoplayStop.addEventListener("click", autoplayToggle);