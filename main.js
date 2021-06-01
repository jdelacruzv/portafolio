const navbar_toggle = document.getElementById('navbar__toggle');
const navbar_list = document.getElementById('navbar__list');
const navbar_links = document.querySelectorAll('a.navbar__link');

//  Menu toggle 
navbar_toggle.addEventListener('click', () => {
    navbar_list.classList.toggle('show');
});

// El menu desaparece cuando se hace click a cada enlace
navbar_links.forEach(link => {
    link.addEventListener('click', () => {
        navbar_list.classList.remove('show');
    });
});