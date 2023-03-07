$(function(){

  var $winWidth = $(window).width();
  let visibleScreen =  0;
  const TABLET_WIDTH = 1200;
  const MOBILE_WIDTH = 768;

  $(window).resize(function(){
    $winWidth = $(window).width();

    if($winWidth < TABLET_WIDTH) {
      $(".spot-menu .login span").addClass("blind");
    } else {
      $(".spot-menu .login span").removeClass("blind");
    }
    if($winWidth > TABLET_WIDTH) {
      closeBars();
    }

  });

  function addClassScroll() {
    $(".header").addClass("scroll");
  }

  function removeClassScroll() {
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
    $(window).scroll(function() {
      if($(window).scrollTop() > 1) {
        addClassScroll();
      } else {
        removeClassScroll();
      }
    });
  }

  function openDoor() {
    $(window).scroll(function(){
      visibleScreen = $(window).scrollTop() + $(window).height() - ($(window).height() / 3);
      if(visibleScreen > $(".banner-sec").offset().top){
        $(".banner-sec").addClass("on");
        console.log("@");
      }
    });
  }
  
  // 실행
  function init() {
    scrollFixedHeader();
    openDoor();
  }

  function event() {
    $(".bars").on("click", onBars);
    $(".gnb").mouseenter(showGnb);
    $(".depth-bg").mouseenter(showGnb);
    $(".depth-bg").mouseleave(removeGnb);
    $(".gnb").mouseleave(removeGnb);
    $(".gnb a").focus(showGnb);
    $(".header a").focus(addClassScroll);
    $(".header").blur(removeClassScroll);
    $(".spot-menu button").focus(removeGnb);    
    $(".spot-menu").focus(addClassScroll);    
    $(".spot-menu").blur(removeClassScroll);    
    $(".close").on("click", closeBars);
    $(".depth1").on("click", openDepth2);
  };

  init();
  event();

});