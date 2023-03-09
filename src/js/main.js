$(function(){  
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

  function addClass(selector, className) {
    $(`${selector}`).addClass(className);
  }

  function removeClass(selector, className) {
    $(`${selector}`).removeClass(className);
  }
  
  function showGnb() {
    if ($winWidth > TABLET_WIDTH) {
      addClass(".header", "show");   
    }
  };

  function removeGnb() {
    if ($winWidth > TABLET_WIDTH) {
      removeClass(".header", "show");    
    }
  };

  function onBars (){
    addClass(".nav", "on");
  }
  
  function closeBars (){
    removeClass(".nav", "on");
  }
  
  function openDepth2() {
    removeClass(".depth1", "on");
    $(this).addClass("on");
  }

  function scrollFixedHeader() {
    if($(window).scrollTop() > 1) {
      addClass(".header", "scroll");
    } else {
      removeClass(".header", "scroll");
    }
  }  

  function openDoor() {
    visibleScreen = $(window).scrollTop() + $(window).height() - ($(window).height() / 3);
    if(visibleScreen > $(".banner-sec").offset().top){
      addClass(".banner-sec", "on");
    };
  }

  function addClassTabOn() {
    $(".tab li").on("click", function(){
      removeClass(".tab li", "on");
      $(this).addClass("on");
    });
  }

  function addClassPointerOn() {
    $(".now-sec .img-box").on("mouseenter", function(){
      addClass(".cursor", "on");
    });
    $(".now-sec .img-box").on("mouseleave", function(){
      removeClass(".cursor", "on");
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
  }

  $( window ).on( "load", function() {
    $(".top-btn").on("click", toTop);
  });
  
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
  };

  init();
  event();

});