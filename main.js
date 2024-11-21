let botonbuscar = document.getElementById("buscar");
let texto = document.getElementById("entradatxt");
let botonelm = document.getElementById("elm")
let imagenespant = document.getElementById("imagenes")
const apikey = "TgZxRXOsLDoqEWhaeimFst2gexFfatph"

botonbuscar.addEventListener("click", () => {
    const term = texto.value
    const llamada = fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${term}&limit=9&offset=0&rating=g&lang=es&bundle =messaging_non_clips`);
    llamada 
    .then((responce) => {
        return responce.json();    
    })
    .then((results) => {
        console.log(results)
        results.data.forEach(element => {
            console.log(element.images.original.url);
            let imagen = document.createElement("img");
            imagen.setAttribute("src", element.images.original.url );
            imagenespant.appendChild(imagen)
        });
    })
    .catch((error) => {
        console.error(error.mensaje);
})
});

botonelm.addEventListener("click", () => {
    imagenespant.innerHTML = ""; 
    texto.value = "";
});