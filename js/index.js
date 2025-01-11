const reloj = document.querySelector(".reloj");
document.addEventListener("DOMContentLoaded", e=>{
    setInterval(() =>{
        const hora = new Date();
        const horaCadena = hora.toString();
        reloj.innerText = hora.toLocaleDateString() + horaCadena.substring(15, 25);
    }, 1000)
});

/* const color = document.querySelector(".color");
console.log(color);
const cabecera = document.querySelector("header");
console.log(cabecera);
color.addEventListener("click", e=>{
    const fondo = document.querySelector("main");
    fondo.style.backgroundImage = 'url("../img/fatesClaro.jpg")'
    cabecera.style.backgroundColor = "white";
    const letras = document.querySelectorAll("p");
    const titulares = document.querySelectorAll("h1");
    const cursiva = document.querySelectorAll("i");
    const negrita = document.querySelectorAll("strong");
    const imagenes = document.querySelectorAll("img");

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
    console.log(imagenes);
    imagenes.forEach(e=>{
        e.style.border = "5px solid rgb(51, 51, 51);"
    });
}); */