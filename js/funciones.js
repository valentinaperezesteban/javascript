function inicio() {
    let bienvenida = confirm("Bienvenid@ al mundo del cine! Te gustaría escuchar sugerencias de los expertos? 🎥")
    let respuesta = prompt("Durante tu tiempo libre, elegís pasar el rato mirando series o peliculas?:").toLowerCase().trim()
    if (respuesta == "series") {
        alert("Estas en el lugar correcto! Las series son fenomenales.👏🏻 Pronto te recomendaremos lo mejor de lo mejor😉")
    } else {
        alert("Estas en el lugar correcto! Las películas son fenomenales.👏🏻 Pronto te recomendaremos lo mejor de lo mejor😉")
    }
}