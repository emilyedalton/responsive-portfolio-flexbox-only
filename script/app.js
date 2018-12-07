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
   

    function classToggle() {
        const navs = document.querySelectorAll('.navSection')
        
        navs.forEach(nav => nav.classList.toggle('.hamburgerShow_burgerExpand'));
      }
      document.querySelector('.hamburger')
        .addEventListener('click', classToggle);