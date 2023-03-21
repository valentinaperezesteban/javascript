let bienvenida = confirm("Bienvenid@ al mundo del cine! Te gustaría escuchar sugerencias de los expertos? 🎥");
let respuesta = prompt("Durante tu tiempo libre, elegís pasar el rato mirando series o peliculas?:").toLowerCase().trim();

if (respuesta == "series") {
    alert("Estas en el lugar correcto! Las series son fenomenales.👏🏻 Pronto te recomendaremos lo mejor de lo mejor.")
} else {
    alert("Estas en el lugar correcto! Las películas son fenomenales.👏🏻 Pronto te recomendaremos lo mejor de lo mejor.")
}

let genero = prompt("Ingrese su género favorito").toLowerCase().trim();
while(genero != "listo") {
    switch (genero) {
        case "terror":
            alert("Tobin Bell");
            break;
        case "comedia":
            alert("Adam Sandler");
            break;
        case "ciencia ficcion":
            alert("Tom Holland");
            break;
        case "amor":
            alert("Zac Efron");
            break;
        case "accion":
            alert("Dwayne Johnson");
            break;
        default:
            alert("Ingrese un género válido.")
            break;
    }
    genero = prompt("Ingrese otro género favorito para más recomendaciones!").toLowerCase().trim();
}
