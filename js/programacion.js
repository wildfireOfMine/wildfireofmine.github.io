const reloj = document.querySelector(".reloj");
console.log(reloj);
document.addEventListener("DOMContentLoaded", e=>{
    setInterval(() =>{
        const hora = new Date();
        const horaCadena = hora.toString();
        reloj.innerText = hora.toLocaleDateString() + horaCadena.substring(15, 25);
    }, 1000)
});

