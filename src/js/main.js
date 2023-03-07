$(function(){

  var $winWidth = $(window).width();
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
        $(".header").addClass("scroll");
      } else {
        $(".header").removeClass("scroll");
      }
    });
  }
  
  // 실행
  function init() {
    scrollFixedHeader();
  }

  function event() {
    $(".bars").on("click", onBars);
    $(".gnb").mouseenter(showGnb);
    $(".depth-bg").mouseenter(showGnb);
    $(".depth-bg").mouseleave(removeGnb);
    $(".gnb").mouseleave(removeGnb);
    $(".gnb a").focus(showGnb);
    $(".spot-menu button").focus(removeGnb);    
    $(".close").on("click", closeBars);
    $(".depth1").on("click", openDepth2);
  };

  init();
  event();

});