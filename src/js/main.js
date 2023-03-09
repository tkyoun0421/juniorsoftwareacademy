$(function(){
  console.log("@");
  var $winWidth = $(window).width();
  let visibleScreen =  0;
  const TABLET_WIDTH = 1200;
  const MOBILE_WIDTH = 768;

  // 반응형 이벤트
  function resizeEvent() {
    $(window).resize(function(){
      $winWidth = $(window).width();
      if ($winWidth < TABLET_WIDTH) {
        addClassLoginBlind();
      } else {
        removeClassLoginBlind();
        closeBars();
      }
    });
  }

  // 스크롤 이벤트
  function scrollEvent(){
    $(window).scroll(function(){
      openDoor();
      scrollFixedHeader();
    });
  };

  // 새로고침 감지 이벤트
  function refreshEvent() {
    $(window).on('load', function(){
      openDoor();
      scrollFixedHeader();
    });
  }

  function addClassLoginBlind() {
    $(".spot-menu .login span").addClass("blind");
  }

  function removeClassLoginBlind() {
    $(".spot-menu .login span").removeClass("blind");
  }

  function addClassHeaderScroll() {
    $(".header").addClass("scroll");
  }

  function removeClassHeaderScroll() {
    $(".header").removeClass("scroll");
  }
  
  function showGnb() {
    if ($winWidth > TABLET_WIDTH) {
      $(".header").addClass("show");     
    }
  };

  function removeGnb() {
    if ($winWidth > TABLET_WIDTH) {
      $(".header").removeClass("show");      
    }
  };

  function onBars (){
    $(".nav").addClass("on");
  }
  
  function closeBars (){
    $(".nav").removeClass("on");
  }
  
  function openDepth2() {
    $(".depth1").removeClass("on");
    $(this).addClass("on");
  }

  function scrollFixedHeader() {
    if($(window).scrollTop() > 1) {
      addClassHeaderScroll();
    } else {
      removeClassHeaderScroll();
    }
  }  

  function openDoor() {
    visibleScreen = $(window).scrollTop() + $(window).height() - ($(window).height() / 3);
    if(visibleScreen > $(".banner-sec").offset().top){
      $(".banner-sec").addClass("on");
    };
  }

  function addClassTabOn() {
    $(".tab li").on("click", function(){
      $(".tab li").removeClass("on");
      $(this).addClass("on");
    });
  }

  function addClassPointerOn() {
    $(".now-sec .img-box").on("mouseenter", function(){
      $(".cursor").addClass("on");
    });
    $(".now-sec .img-box").on("mouseleave", function(){
      $(".cursor").removeClass("on");
    });
  }

  function movePointer(e) {
    if ($(".cursor").hasClass("on")) {
      $(".cursor").css({
        "left" : e.pageX,
        "top" : e.pageY
      });
    }
  }

  function toTop() {
    $("html,body").animate({
      scrollTop: 0}
      , "fast");
    console.log("$");
  }

  
  // 실행
  function init() {
    scrollFixedHeader();
    openDoor();
    refreshEvent();
    scrollEvent();
    resizeEvent();
    addClassTabOn();
    addClassPointerOn();
  }

  // 이벤트
  function event() {
    $(".bars").on("click", onBars);
    $(".gnb").mouseenter(showGnb);
    $(".depth-bg").mouseenter(showGnb);
    $(".depth-bg").mouseleave(removeGnb);
    $(".gnb").mouseleave(removeGnb);
    $(".gnb a").focus(showGnb);
    $(".header a").focus(addClassHeaderScroll);
    $(".header").blur(removeClassHeaderScroll);
    $(".spot-menu button").focus(removeGnb);    
    $(".spot-menu").focus(addClassHeaderScroll);    
    $(".spot-menu").blur(removeClassHeaderScroll);    
    $(".close").on("click", closeBars);
    $(".depth1").on("click", openDepth2);
    $(window).on("mousemove", movePointer);
    $(".top-btn").on("click", toTop);
  };

  init();
  event();

});