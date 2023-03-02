$(function(){

  // 뷰포트 반응형
  $(window).resize(function(){
    if($(window).width() < 1600) {
      $(".spot-menu a span").eq(0).addClass("blind");
    } else {
      $(".spot-menu a span").eq(0).removeClass("blind")
    }
  });
  
  // gnb 보여주기 기능
  function showGnb() {
    $(".header").addClass("show");
    $(".header .logo img").odd().removeClass("hidden");
    $(".header .logo img").even().addClass("hidden");
    $(".header .spot-menu a").eq(1).css({'display': 'none'});
    $(".header .spot-menu a").eq(2).css({'display': 'block'});
  };

  function removeGnb() {
    $(".header").removeClass("show");
    $(".header .logo img").even().removeClass("hidden");
    $(".header .logo img").odd().addClass("hidden");
    $(".header .spot-menu a").eq(1).css({'display': 'block'});
    $(".header .spot-menu a").eq(2).css({'display': 'none'});
  };

  $(".nav").mouseenter(showGnb);

  $(".nav").mouseleave(removeGnb);

  $(".gnb a").focus(showGnb);
  $(".spot-menu a").focus(removeGnb);

});