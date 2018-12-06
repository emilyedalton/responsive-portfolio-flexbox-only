$(document).ready(function() {
    $('.main_content').jscroll({
    autoTriggerUntil: 3,
    });
    });
    function classToggle() {
        const navs = document.querySelectorAll('.single-nav')
        
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
      }
      document.querySelector('.hamburger')
        .addEventListener('click', classToggle);