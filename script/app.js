$(document).ready(function() {

$('.main_content').infiniteScroll({
  // options
  path: '.pagination__next',
  append: '.center',
  history: false,
});
});

   
   

    function classToggle() {
        const navs = document.querySelectorAll('.navSection')
        
        navs.forEach(nav => nav.classList.toggle('.hamburgerShow_burgerExpand'));
      }
      document.querySelector('.hamburger')
        .addEventListener('click', classToggle);