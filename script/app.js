$(document).ready(function() {

$('.main_content').infiniteScroll({
  // options
  path: '.pagination__next',
  append: '.center',
  history: false,
});
});

// sticky header


$(window).scroll(function(){
  var sticky = $('.single-nav'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});
   

