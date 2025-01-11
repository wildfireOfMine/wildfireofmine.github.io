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
const cabecera = document.querySelector("header");
const tipoLuz = localStorage.getItem("color");
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
    localStorage.removeItem("color");
    localStorage.setItem("color", "blanco");
    luz.style.display = "none";
    oscuridad.style.display = "block";
    luminosidad();
});

oscuridad.addEventListener("click", e=>{
    e.preventDefault();
    localStorage.removeItem("color");
    localStorage.setItem("color", "negro");
    luz.style.display = "block";
    oscuridad.style.display = "none";
    oscurantismo();
});















/* Funciones */

function luminosidad(){
    const fondo = document.querySelector("main");
    fondo.style.backgroundImage = 'url("../img/fatesClaro.jpg")'
    cabecera.style.backgroundColor = "white";
    cabecera.style.color = "black";
    const letras = document.querySelectorAll("p");
    const titulares = document.querySelectorAll("h1");
    const secundarios = document.querySelectorAll("h2");
    const cursiva = document.querySelectorAll("i");
    const enlaces = document.querySelectorAll("a");
    const negrita = document.querySelectorAll("strong");
    const span = document.querySelectorAll("span");
    const imagenes = document.querySelectorAll("section > img");
    const botones = document.querySelectorAll("button");
    const activo = document.querySelector(".activo");

    const pie = document.querySelector("footer");
    pie.style.backgroundColor = "white";
    letras.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        '-1px -1px 0px white, ' +
        '1px -1px 0px white, ' +
        '-1px 1px 0px white, ' +
        '1px 1px 0px white';
    });
    titulares.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        '-1px -1px 0px white, ' +
        '1px -1px 0px white, ' +
        '-1px 1px 0px white, ' +
        '1px 1px 0px white';
    });
    cursiva.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        '-1px -1px 0px white, ' +
        '1px -1px 0px white, ' +
        '-1px 1px 0px white, ' +
        '1px 1px 0px white';
    });
    negrita.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        '-1px -1px 0px white, ' +
        '1px -1px 0px white, ' +
        '-1px 1px 0px white, ' +
        '1px 1px 0px white';
    });
    secundarios.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        '-1px -1px 0px white, ' +
        '1px -1px 0px white, ' +
        '-1px 1px 0px white, ' +
        '1px 1px 0px white';
    });
    enlaces.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        '-1px -1px 0px white, ' +
        '1px -1px 0px white, ' +
        '-1px 1px 0px white, ' +
        '1px 1px 0px white';
        e.addEventListener("mouseenter", () =>{
            e.style.color = "red";
        });

        e.addEventListener("mouseleave", () =>{
            e.style.color = "black";
        });
    });
    span.forEach(e=>{
        e.style.color = "black";
        e.style.textShadow = 
        '-1px -1px 0px white, ' +
        '1px -1px 0px white, ' +
        '-1px 1px 0px white, ' +
        '1px 1px 0px white';
        e.addEventListener("mouseenter", () =>{
            e.style.color = "red";
        });

        e.addEventListener("mouseleave", () =>{
            e.style.color = "black";
        });
    });
    botones.forEach(e=>{
        e.style.color = "black";
        e.style.border = "1px solid white";
        e.style.backgroundColor = "rgb(51, 51, 51)"
        e.style.hover = "yellow";
        e.style.textShadow = 
        '-1px -1px 0px white, ' +
        '1px -1px 0px white, ' +
        '-1px 1px 0px white, ' +
        '1px 1px 0px white';

        e.addEventListener("mouseenter", () =>{
            e.style.backgroundColor = "yellow";
        });

        e.addEventListener("mouseleave", () =>{
            e.style.backgroundColor = "rgb(51, 51, 51)";
        });
    });
    imagenes.forEach(e=>{
        e.style.border = "5px solid rgb(51, 51, 51)"
    });
    activo.style.color = "red";
}

function oscurantismo(){
    const fondo = document.querySelector("main");
        fondo.style.backgroundImage = 'url("../img/fatesOscuro.jpg")'
        cabecera.style.backgroundColor = "black";
        cabecera.style.color = "white";
        const letras = document.querySelectorAll("p");
        const titulares = document.querySelectorAll("h1");
        const secundarios = document.querySelectorAll("h2");
        const cursiva = document.querySelectorAll("i");
        const enlaces = document.querySelectorAll("a");
        const negrita = document.querySelectorAll("strong");
        const span = document.querySelectorAll("span");
        const imagenes = document.querySelectorAll("section > img");
        const botones = document.querySelectorAll("button");
        const activo = document.querySelector(".activo");
        const pie = document.querySelector("footer");
        pie.style.backgroundColor = "black";
        letras.forEach(e=>{
            e.style.color = "white";
            e.style.textShadow = 
            '-1px -1px 0px black, ' +
            '1px -1px 0px black, ' +
            '-1px 1px 0px black, ' +
            '1px 1px 0px black';
        });
        titulares.forEach(e=>{
            e.style.color = "white";
            e.style.textShadow = 
            '-1px -1px 0px black, ' +
            '1px -1px 0px black, ' +
            '-1px 1px 0px black, ' +
            '1px 1px 0px black';
        });
        cursiva.forEach(e=>{
            e.style.color = "white";
            e.style.textShadow = 
            '-1px -1px 0px black, ' +
            '1px -1px 0px black, ' +
            '-1px 1px 0px black, ' +
            '1px 1px 0px black';
        });
        negrita.forEach(e=>{
            e.style.color = "white";
            e.style.textShadow = 
            '-1px -1px 0px black, ' +
            '1px -1px 0px black, ' +
            '-1px 1px 0px black, ' +
            '1px 1px 0px black';
        });
        secundarios.forEach(e=>{
            e.style.color = "white";
            e.style.textShadow = 
            '-1px -1px 0px black, ' +
            '1px -1px 0px black, ' +
            '-1px 1px 0px black, ' +
            '1px 1px 0px black';
        });
        enlaces.forEach(e=>{
            e.style.color = "white";
            e.style.textShadow = 
            '-1px -1px 0px black, ' +
            '1px -1px 0px black, ' +
            '-1px 1px 0px black, ' +
            '1px 1px 0px black';
            e.addEventListener("mouseenter", () =>{
                e.style.color = "red";
            });

            e.addEventListener("mouseleave", () =>{
                e.style.color = "white";
            });
        });
        span.forEach(e=>{
            e.style.color = "white";
            e.style.textShadow = 
            '-1px -1px 0px black, ' +
            '1px -1px 0px black, ' +
            '-1px 1px 0px black, ' +
            '1px 1px 0px black';
            e.addEventListener("mouseenter", () =>{
                e.style.color = "red";
            });

            e.addEventListener("mouseleave", () =>{
                e.style.color = "white";
            });
        });
        botones.forEach(e=>{
            e.style.color = "white";
            e.style.border = "1px solid black";
            e.style.backgroundColor = "#efefef"
            e.style.hover = "yellow";
            e.style.textShadow = 
            '-1px -1px 0px black, ' +
            '1px -1px 0px black, ' +
            '-1px 1px 0px black, ' +
            '1px 1px 0px black';

            e.addEventListener("mouseenter", () =>{
                e.style.backgroundColor = "yellow";
            });

            e.addEventListener("mouseleave", () =>{
                e.style.backgroundColor = "rgb(172, 172, 172)";
            });
        });
        imagenes.forEach(e=>{
            e.style.border = "5px solid rgb(172, 172, 172)"
        });
        activo.style.color = "red";
}
