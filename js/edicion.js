const reloj = document.querySelector(".reloj");
document.addEventListener("DOMContentLoaded", e=>{
    setInterval(() =>{
        const hora = new Date();
        const horaCadena = hora.toString();
        reloj.innerText = hora.toLocaleDateString() + horaCadena.substring(15, 25);
    }, 1000)
});

const luz = document.querySelector(".luz");
const oscuridad = document.querySelector(".oscuridad");

const tipoLuz = localStorage.getItem("color");

const activo = document.querySelector(".activo");
activo.style.color = "red";

if (tipoLuz == "blanco") {
    luz.style.display = "none";
    oscuridad.style.display = "block";
    luminosidad();
} else {
    luz.style.display = "block";
    oscuridad.style.display = "none";
    oscurantismo();
}

luz.addEventListener("click", e=>{
    e.preventDefault();
    
    /* Manteniendo la configuración */
    localStorage.removeItem("color");
    localStorage.setItem("color", "blanco");
    luz.style.display = "none";
    oscuridad.style.display = "block";
    
    luminosidad();
});

oscuridad.addEventListener("click", e=>{
    e.preventDefault();
    
    /* Manteniendo la configuración */
    localStorage.removeItem("color");
    localStorage.setItem("color", "negro");
    luz.style.display = "block";
    oscuridad.style.display = "none";

    oscurantismo();
});



/* Menú Responsivo */

const desplegable = document.querySelector(".ignorar");
const menuResponsivo = document.querySelector(".menuResponsivo");
const pie = document.querySelector("footer");

desplegable.addEventListener("click", e=>{
    e.preventDefault();
    desplegable.classList.toggle("activo");
    menuResponsivo.classList.toggle("activo");
    pie.classList.toggle("ocultar");
});







/* Funciones */

function luminosidad(){
    
    /* De arriba para abajo */
    
    /* Cabecera */
    const cabecera = document.querySelector("header");
    const fondo = document.querySelector("main");
    fondo.style.backgroundImage = 'url("../img/edicionClaro.webp")';
    cabecera.style.backgroundColor = "white";
    cabecera.style.color = "black";
    
    /* Nudo */

    const letras = document.querySelectorAll("p");
    const titulares = document.querySelectorAll("h1");
    const secundarios = document.querySelectorAll("h2");
    const cursiva = document.querySelectorAll("i");
    const negrita = document.querySelectorAll("strong");
    const span = document.querySelectorAll("span");
    const enlaces = document.querySelectorAll("a");
    const imagenes = document.querySelectorAll("section > img");
    const botones = document.querySelectorAll("button");
    const tablas = document.querySelectorAll("th");
    const navegador = document.querySelectorAll(".menuResponsivo");
    const activo = document.querySelector(".activo");

    /* Párrafos <p> */
    letras.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        "-1px -1px 0px white, " +
        "1px -1px 0px white, " +
        "-1px 1px 0px white, " +
        "1px 1px 0px white";
    });

    /* Titulares <h1> */
    titulares.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        "-1px -1px 0px white, " +
        "1px -1px 0px white, " +
        "-1px 1px 0px white, " +
        "1px 1px 0px white";
    });

    /* Titulares <h2> */
    secundarios.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        "-1px -1px 0px white, " +
        "1px -1px 0px white, " +
        "-1px 1px 0px white, " +
        "1px 1px 0px white";
    });

    /* Cursiva <i> */
    cursiva.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        "-1px -1px 0px white, " +
        "1px -1px 0px white, " +
        "-1px 1px 0px white, " +
        "1px 1px 0px white";
    });

    /* Negrita <strong> */
    negrita.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        "-1px -1px 0px white, " +
        "1px -1px 0px white, " +
        "-1px 1px 0px white, " +
        "1px 1px 0px white";
    });

    /* Span <span> */
    span.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        "-1px -1px 0px white, " +
        "1px -1px 0px white, " +
        "-1px 1px 0px white, " +
        "1px 1px 0px white";
        e.addEventListener("mouseenter", () =>{
            e.style.color = "red";
        });

        e.addEventListener("mouseleave", () =>{
            e.style.color = "black";
        });
    });

    /* Enlaces <a> */
    enlaces.forEach(e=>{
        if (e.classList.value != "activo") {
            e.style.color = "black";
        } else {
            e.style.color = "red";
        }
        e.style.textShadow = 
        "-1px -1px 0px white, " +
        "1px -1px 0px white, " +
        "-1px 1px 0px white, " +
        "1px 1px 0px white";
        e.addEventListener("mouseenter", () =>{
            e.style.color = "red";
        });

        e.addEventListener("mouseleave", () =>{
            if (e.classList.value != "activo") {
                e.style.color = "black";
            } else {
                e.style.color = "red";
            }
        });
    });

    /* Imágenes <img> */
    imagenes.forEach(e=>{
        e.style.border = "5px solid rgb(51, 51, 51)";
    });

    /* Botones <button> */
    botones.forEach(e=>{
        e.style.color = "black";
        e.style.border = "1px solid white";
        e.style.backgroundColor = "rgb(51, 51, 51)";
        e.style.hover = "yellow";
        e.style.textShadow = 
        "-1px -1px 0px white, " +
        "1px -1px 0px white, " +
        "-1px 1px 0px white, " +
        "1px 1px 0px white";

        e.addEventListener("mouseenter", () =>{
            e.style.backgroundColor = "yellow";
        });

        e.addEventListener("mouseleave", () =>{
            e.style.backgroundColor = "rgb(51, 51, 51)";
        });
    });

    /* Todo en tablas <th>, <td> */
    tablas.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        "-1px -1px 0px white, " +
        "1px -1px 0px white, " +
        "-1px 1px 0px white, " +
        "1px 1px 0px white";
    });

    /* Menú responsivo desplegable */
    navegador.forEach(e=>{
        e.style.backgroundColor="white";
    });

    
    /* Mantener la clase .activo */

    activo.style.color = "red";

    /* Pie de página */

    const pie = document.querySelector("footer");
    pie.style.backgroundColor = "white";
    const github = document.querySelector("#github");
    const linkedin = document.querySelector("#linkedin");
    github.src = "../img/githubClaro.webp";
    linkedin.src = "../img/linkedinClaro.webp";
}


function oscurantismo(){
    
    /* De arriba para abajo */
    
    /* Cabecera */
    const cabecera = document.querySelector("header");
    const fondo = document.querySelector("main");
    fondo.style.backgroundImage = 'url("../img/edicionOscuro.webp")';
    cabecera.style.backgroundColor = "black";
    cabecera.style.color = "white";
    
    /* Nudo */

    const letras = document.querySelectorAll("p");
    const titulares = document.querySelectorAll("h1");
    const secundarios = document.querySelectorAll("h2");
    const cursiva = document.querySelectorAll("i");
    const negrita = document.querySelectorAll("strong");
    const span = document.querySelectorAll("span");
    const enlaces = document.querySelectorAll("a");
    const imagenes = document.querySelectorAll("section > img");
    const botones = document.querySelectorAll("button");
    const tablas = document.querySelectorAll("th");
    const navegador = document.querySelectorAll(".menuResponsivo");
    const activo = document.querySelector(".activo");

    /* Párrafos <p> */
    letras.forEach(e=>{
        e.style.color = "white";
        e.style.textShadow = 
        "-1px -1px 0px black, " +
        "1px -1px 0px black, " +
        "-1px 1px 0px black, " +
        "1px 1px 0px black";
    });

    /* Titulares <h1> */
    titulares.forEach(e=>{
        e.style.color = "white";
        e.style.textShadow = 
        "-1px -1px 0px black, " +
        "1px -1px 0px black, " +
        "-1px 1px 0px black, " +
        "1px 1px 0px black";
    });

    /* Titulares <h2> */
    secundarios.forEach(e=>{
        e.style.color = "white";
        e.style.textShadow = 
        "-1px -1px 0px black, " +
        "1px -1px 0px black, " +
        "-1px 1px 0px black, " +
        "1px 1px 0px black";
    });

    /* Cursiva <i> */
    cursiva.forEach(e=>{
        e.style.color = "white";
        e.style.textShadow = 
        "-1px -1px 0px black, " +
        "1px -1px 0px black, " +
        "-1px 1px 0px black, " +
        "1px 1px 0px black";
    });

    /* Negrita <strong> */
    negrita.forEach(e=>{
        e.style.color = "white";
        e.style.textShadow = 
        "-1px -1px 0px black, " +
        "1px -1px 0px black, " +
        "-1px 1px 0px black, " +
        "1px 1px 0px black";
    });

    /* Span <span> */
    span.forEach(e=>{
        e.style.color = "white";
        e.style.textShadow = 
        "-1px -1px 0px black, " +
        "1px -1px 0px black, " +
        "-1px 1px 0px black, " +
        "1px 1px 0px black";
        e.addEventListener("mouseenter", () =>{
            e.style.color = "red";
        });

        e.addEventListener("mouseleave", () =>{
            e.style.color = "white";
        });
    });

    /* Enlaces <a> */
    enlaces.forEach(e=>{
        if (e.classList.value != "activo") {
            e.style.color = "white";
        } else {
            e.style.color = "red";
        }
        e.style.textShadow = 
        "-1px -1px 0px black, " +
        "1px -1px 0px black, " +
        "-1px 1px 0px black, " +
        "1px 1px 0px black";
        e.addEventListener("mouseenter", () =>{
            e.style.color = "red";
        });

        e.addEventListener("mouseleave", () =>{
            if (e.classList.value != "activo") {
                e.style.color = "white";
            } else {
                e.style.color = "red";
            }
        });
    });

    /* Imágenes <img> */
    imagenes.forEach(e=>{
        e.style.border = "5px solid rgb(172, 172, 172)";
    });

    /* Botones <button> */
    botones.forEach(e=>{
        e.style.color = "white";
        e.style.border = "1px solid black";
        e.style.backgroundColor = "#efefef"
        e.style.hover = "yellow";
        e.style.textShadow = 
        "-1px -1px 0px black, " +
        "1px -1px 0px black, " +
        "-1px 1px 0px black, " +
        "1px 1px 0px black";

        e.addEventListener("mouseenter", () =>{
            e.style.backgroundColor = "yellow";
        });

        e.addEventListener("mouseleave", () =>{
            e.style.backgroundColor = "rgb(172, 172, 172)";
        });
    });

    /* Tablas <th> */
    tablas.forEach(e=>{
        e.style.color = "white";
        e.style.textShadow = 
        "-1px -1px 0px black, " +
        "1px -1px 0px black, " +
        "-1px 1px 0px black, " +
        "1px 1px 0px black";
    });

    /* Menú responsivo desplegable */
    navegador.forEach(e=>{
        e.style.backgroundColor="black";
    });
    
    /* Mantener la clase .activo */

    activo.style.color = "red";

    /* Pie de página */

    const pie = document.querySelector("footer");
    pie.style.backgroundColor = "black";
    const github = document.querySelector("#github");
    const linkedin = document.querySelector("#linkedin");
    github.src = "../img/github.webp";
    linkedin.src = "../img/linkedin.webp";
}
