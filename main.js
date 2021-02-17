// ---------------> Efecto del header cuando se hace scroll --------------->
let hiden_name = document.querySelector('.hidden-name');

function showScroll() {
    // Detecta la cantidad de scroll cuando se esta bajando
    let scroll_top = document.documentElement.scrollTop;
    // Distancia de la ventana hacia el elemento
    let distance = hiden_name.offsetTop;

    if((distance + 620) < scroll_top) {
        hiden_name.style.opacity = 1;
    }
    else {
        hiden_name.style.opacity = 0;
    }
}

window.addEventListener('scroll', showScroll);


// ---------------> Efecto menu hamburguesa --------------->
let btn_menu = document.querySelector('.btn-menu');
let menu_items = document.querySelector('.menu-items');

btn_menu.addEventListener('click', () => {
    btn_menu.classList.toggle('active');
    menu_items.classList.toggle('show');
});


// ---------------> Ventana no modal hoja de vida (resume) --------------->
let window_resume = document.getElementById("window-resume");
let resume = document.getElementById("resume");
let close_resume = document.getElementById("close-resume");

resume.addEventListener("click", () => {
    window_resume.classList.add("show-modal")
});

close_resume.addEventListener("click", () => {
    window_resume.classList.remove("show-modal")
});


// ---------------> Escucha el evento si esta en true o false --------------->
// Captura todos los medias queries que son de 768px para abajo
// let changes = window.matchMedia('screen and (max-width:768px)');
// changes.addEventListener('click', validation);
// validation(changes);

// function validation(event) {
//     if(event.matches) {
//         btn_menu.addEventListener('click', watchHidden);
//     }
//     else {
//         btn_menu.removeEventListener('click', watchHidden);
//     }
// }

// function watchHidden() {
//     if(menu_items.classList.contains('show')) {
//         menu_items.classList.remove('show');
//     }
//     else {
//         menu_items.classList.add('show');
//     }
// }