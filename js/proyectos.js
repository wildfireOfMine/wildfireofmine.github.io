const usuario = "wildfireOfMine"
const url = `https://api.github.com/users/${usuario}/repos`;


document.addEventListener("DOMContentLoaded", ()=>{
    const lista = document.getElementById("repositorio");
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
        data.forEach(element => {
            console.log(element);
            console.log(element.html_url);
            const enlace = document.createElement("a");
            enlace.href = element.html_url;
            enlace.target = "_blank";
            enlace.innerHTML = element.name;
            const elemento = document.createElement("li");
            elemento.appendChild(enlace);
            lista.appendChild(elemento);
        });
    })
    .catch(error =>{
        console.log(error);
    });
});