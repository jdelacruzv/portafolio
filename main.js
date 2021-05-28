const menu_toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navbar_links = document.querySelectorAll('a.navbar__link');

//  Menu toggle 
menu_toggle.addEventListener('click', () => {
    navbar.classList.toggle('show');
});

// El menu desaparece cuando se hace click a cada enlace
navbar_links.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('show');
    });
});