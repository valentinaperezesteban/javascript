function iniciar() {
    let bienvenida = confirm("Bienvenid@ al mundo del cine! Te gustaría escuchar sugerencias de los expertos? 🎥")
    let respuesta = prompt("Durante tu tiempo libre, elegís pasar el rato mirando series o peliculas?:").toLowerCase().trim()
    if (respuesta == "series") {
        alert("Estas en el lugar correcto! Las series son fenomenales.👏🏻 Pronto te recomendaremos lo mejor de lo mejor😉")
    } else {
        alert("Estas en el lugar correcto! Las películas son fenomenales.👏🏻 Pronto te recomendaremos lo mejor de lo mejor😉")
    }
    let genero = prompt("Cual es su género favorito? \nTerror - Comedia - Ciencia Ficción - Romance - Acción - Drama - Suspenso - Fantasía - Musicales").toLowerCase().trim();
    while (genero != "listo") {
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
            case "romance":
                alert("Zac Efron");
                break;
            case "accion":
                alert("Dwayne Johnson");
                break;
            case "drama":
                alert("Michael Corleone");
                break;
            case "suspenso":
                alert("Leonardo DiCaprio");
                break;
            case "fantasia":
                alert("Benedict Cumberbatch");
                break;
            case "musicales":
                alert("Ryan Gosling");
                break;
            default:
                alert("Ingrese un género válido.")
                break;
        }
        genero = prompt("Ingrese otro género favorito para más recomendaciones!").toLowerCase().trim();
    }
}