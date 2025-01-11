const usuario = "wildfireOfMine"
const url = `https://api.github.com/users/${usuario}/repos`;


document.addEventListener("DOMContentLoaded", ()=>{
    const lista = document.getElementById("repositorio");
    const ficha = document.getElementById("ficha");
    const reloj = document.querySelector(".reloj");

    setInterval(() =>{
        const hora = new Date();
        const horaCadena = hora.toString();
        reloj.innerText = hora.toLocaleDateString() + horaCadena.substring(15, 25);
    }, 1000)

    fetch(url)
    .then(response=>response.json())
    .then(data =>{
        data.forEach(element => {

            const enlace = document.createElement("a");
            enlace.href = element.html_url;
            enlace.target = "_blank";
            enlace.innerHTML = element.name;
            const descripcion = document.createElement("p");
            descripcion.innerText = element.description;
            const fecha = document.createElement("p");
            fecha.innerText = element.updated_at;

            const fila = document.createElement("tr");
            const nombre = document.createElement("td");
            const descr = document.createElement("td");
            const fechaPub = document.createElement("td");

            nombre.appendChild(enlace);
            descr.appendChild(descripcion);
            if (descr.innerText === "") {
                descr.innerText = "-";
            }
            fechaPub.appendChild(fecha);
            fila.appendChild(nombre);
            fila.appendChild(descr);
            fila.appendChild(fechaPub);
            ficha.appendChild(fila);
        });
    })
    .catch(error =>{
        console.log(error);
    });
});