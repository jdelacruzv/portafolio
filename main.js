const hidden_par = document.querySelector('.hidden-par');
const header = document.querySelector('.header');
const btn_menu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menu_links = document.querySelectorAll('a.menu-link');
const resume = document.getElementById('resume');
const window_resume = document.getElementById('window-resume');
const body = document.querySelector('body');
const close_resume = document.getElementById('close-resume');


// ---------------> Efecto del header cuando se hace scroll --------------->
function showScroll() {
    // Detecta la cantidad de scroll cuando se esta bajando
    let scroll_top = document.documentElement.scrollTop;
    // Distancia de la ventana hacia el elemento
    let distance = hidden_par.offsetTop;

    if((distance + 450) < scroll_top) {
        hidden_par.style.opacity = 1;
        header.style.opacity = 1;
    }
    else {
        hidden_par.style.opacity = 0;
        header.style.opacity = 0;
    }
}

window.addEventListener('scroll', showScroll);


// ---------------> Efecto menu hamburguesa --------------->
btn_menu.addEventListener('click', () => {
    btn_menu.classList.toggle('active');
    menu.classList.toggle('show');
});

// El menu desaparece cuando se hace click a cada enlace
menu_links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
        btn_menu.classList.toggle('active');
    });
});


// ---------------> Ventana no modal hoja de vida (resume) --------------->
resume.addEventListener('click', () => {
    window_resume.classList.add('show-modal');
    body.style.overflow = 'hidden';

});

close_resume.addEventListener('click', () => {
    window_resume.classList.remove('show-modal')
    body.style.overflow = 'visible';
});