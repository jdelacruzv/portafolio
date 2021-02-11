/* -------------------- Efecto del menu hamburguesa -------------------- */

// Captura todos los medias queries que son de 768px para abajo
const changes = window.matchMedia('screen and (max-width:768px)');

// Captura la clase .menu y le asigna a la variable menu
const menu_profesional = document.querySelector('.menu');

const button_hamburger = document.querySelector('#hamburger');

// Escucha el evento si esta en true o false
changes.addListener(validation); // Por revisarlo
validation(changes);

function validation(event) {
    if(event.matches) {
        button_hamburger.addEventListener('click', WatchHidden);
    }
    else {
        button_hamburger.removeEventListener('click', WatchHidden);
    }
}

function WatchHidden() {
    if(menu_profesional.classList.contains('menu_active')) {
        menu_profesional.classList.remove('menu_active');
    }
    else {
        menu_profesional.classList.add('menu_active');
    }
}

/* ---------------- Ventana no modal curriculum (resume) ---------------- */

var window_resume = document.getElementById("window-resume");
var resume = document.getElementById("resume")
var close_resume = document.getElementById("close-resume");

resume.addEventListener("click", () => window_resume.classList.add("show"));
close_resume.addEventListener("click", () => window_resume.classList.remove("show"));

/* ---------------- Validación del formulario ---------------- */




