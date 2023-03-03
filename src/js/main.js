$(function(){

  var $winWidth = $(window).width();
  const TABLET_WIDTH = 1200;
  const MOBILE_WIDTH = 768;

  $(window).resize(function(){
    $winWidth = $(window).width();

    if($winWidth < TABLET_WIDTH) {
      $(".spot-menu .login span").addClass("blind");
      scrollLogoChange();      
    } else {
      $(".spot-menu .login span").removeClass("blind");
    }
    if($winWidth > TABLET_WIDTH) {
      closeBars();
    }

    if($winWidth > MOBILE_WIDTH) {
      if ($(".header").hasClass("show")) {
        blackKakao()  
      } else {
        whiteKakao()
      }
    } else {
      $(".header .spot-menu .kakao").css({'display': 'none'});
    }
  });
  
  function showGnb() {
    if ($winWidth > TABLET_WIDTH) {
      $(".header").addClass("show");      
      $(".header").removeClass("scroll");
      changeColorKakao();
    }
    toggleLogoColor();
  };

  function removeGnb() {
    if ($winWidth > TABLET_WIDTH) {
      $(".header").removeClass("show");      
      changeColorKakao();
    }
    toggleLogoColor();
  };

  function toggleLogoColor() {
    if ($(".header").hasClass("show")) {
      $(".logo img").removeClass("hidden");
      $(".logo img").even().addClass("hidden");
    } else {
      $(".logo img").removeClass("hidden");
      $(".logo img").odd().addClass("hidden");
    }    
  }

  function scrollLogoChange() {
    if ($(".header").hasClass("scroll")) {
      $(".logo img").removeClass("hidden");
      $(".logo img").even().addClass("hidden");
    } else {
      $(".logo img").removeClass("hidden");
      $(".logo img").odd().addClass("hidden");
    }
  }

  function changeColorKakao() {
    if ($(".header").hasClass("show")) {
      blackKakao();
    } else {
      whiteKakao();
    }
  }

  function blackKakao() {
    $(".header .spot-menu .kakao").eq(0).css({'display': 'none'});
    $(".header .spot-menu .kakao").eq(1).css({'display': 'block'});
  }

  function whiteKakao() {
    $(".header .spot-menu .kakao").eq(0).css({'display': 'block'});
    $(".header .spot-menu .kakao").eq(1).css({'display': 'none'});
  }

  function onBar (){
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
        scrollLogoChange();       
        blackKakao(); 
      } else {
        $(".header").removeClass("scroll");
        scrollLogoChange();
        whiteKakao();
      }
    });
  }
  
  // 실행
  function init() {
    scrollFixedHeader();
  }

  function event() {
    $(".bars").on("click", onBar);
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