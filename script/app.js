$(document).ready(function() {
    $('.main_content').jscroll({
    autoTriggerUntil: 2,
    });
    });

    function classToggle() {
        const navs = document.querySelectorAll('.navSection')
        
        navs.forEach(nav => nav.classList.toggle('.hamburgerShow_burgerExpand'));
      }
      document.querySelector('.hamburger')
        .addEventListener('click', classToggle);