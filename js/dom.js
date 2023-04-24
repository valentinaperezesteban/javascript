//VARIABLES
const servicePage = 450

const carrito = []

const productos = [
    {nombre: 'LIMPIADOR FACIAL', descripcion: "With soothing niacinamide and lipid-replenishing shea butter for nourished skin right out of the shower.", importe: 6700, imagen: "./images/producto1.webp", id: 1},
    {nombre: 'PROTECTOR SOLAR', descripcion: "Provides greater facial sun protection with a broad spectrum dry touch sunscreen (UVA, UVB) and helps protect against damage caused by some infrared rays and pollution.", importe: 7890, imagen: "./images/producto2.webp", id: 2},
    {nombre: 'CREMA MATTE', descripcion: "TOLERIANE MATTE CREAM soothes, protects and hydrates. A dermatocosmetic revolution for skin hydration. Safe, even for babies.", importe: 5670, imagen: "./images/producto3.webp", id: 3},
    {nombre: 'ACNE REPAIR', descripcion: "Fights breakouts and minimizes the appearance of marks and blemishes. All the benefits of SPF 30 protection with the well-being of a daily use moisturizer.", importe: 7800, imagen: "./images/producto4.webp", id: 4},
    {nombre: 'EXFOLIANTE', descripcion: "ULTRA FINE SCRUB gently exfoliates, soothes and purifies facial skin. In addition, it respects the physiological balance of the skin.", importe: 6500, imagen: "./images/producto5.png", id: 5},
    {nombre: 'SERUM B5', descripcion: "Is a concentrated treatment that combines an exfoliating triacid Complex (Glycolic Acid + Salicylic) with Niacinamide, to treat blemishes, marks and blackheads.", importe: 9890, imagen: "./images/producto6.webp", id: 6},
    {nombre: 'CONTORNO OJOS', descripcion: "Helps fill in and repair the skin barrier around the eyes. For tired and fragile eye contours, wrinkles and fine lines, loss of volume and elasticity", importe: 4700, imagen: "./images/producto7.webp", id: 7},
    {nombre: 'AGUA TERMAL', descripcion: "Rich in selenium and trace elements, La Roche-Posay Thermal Spring Water has scientifically proven soothing and protective properties.", importe: 9000, imagen: "./images/producto8.webp", id: 8}
]

//DOM, Eventos and LocalStorage
const products = document.querySelector(".products")
const inputSearch = document.getElementById("inputSearch")

function buscarProductos(valor) {
    let resultado = productos.filter(producto => producto.nombre.toUpperCase().includes(valor.toUpperCase()))
    resultado.length > 0 ? cargarCard(resultado) : alert("No se encontraron resultados.")
}

function retornarCard(producto) {
    return `<div class="product">
                <div class="imageProduct">
                        <img src="${producto.imagen}" alt="">
                </div>
                <div class="nameProduct">
                    <h6>${producto.nombre}</h6>
                    <p class="priceProduct">${producto.importe}</p>
                </div>
                <p class="parrafoProduct">${producto.descripcion}</p>
                <div class="stars">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="shop">
                    <button class="buttonProduct" id="${producto.id}">SHOP NOW</button>
                </div>
            </div>`
}

function cargarCard(array) {
    products.innerHTML = ""
    array.forEach((producto) => {
        products.innerHTML += retornarCard(producto)
    })
    activarBotones()
}

inputSearch.addEventListener("search", (e)=> {
    buscarProductos(e.target.value)
})


function activarBotones() {
    const botones = document.querySelectorAll("button.buttonProduct")
    for (const boton of botones) {
        boton.addEventListener("click", () => {
            let resultadoproducto = productos.find(producto => producto.id === parseInt(boton.id))
                carrito.push(resultadoproducto)
                guardarCarrito()
        })
    }
}

function guardarCarrito() {
    localStorage.setItem("carritoProductos", JSON.stringify(carrito))
}

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("carritoProductos")) || []
}

cargarCard(productos)
recuperarCarrito()

//FUNCION PARA TERMINAR DE COMPRAR E IR A PAGAR
function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito se encuentra vacío.")
        return
    }
    const ventas = new Compra(carrito)
    alert("El total de tu compra es de: $ " + ventas.obtenerTotalCarrito())
    let respuesta = confirm("Deseas confimar tu pago?\nSe agregaron $450 del costo por servicio.")
    if (respuesta === true) {
        alert("Felicidades! Tu compra ha sido confirmada!\nMuchas gracias por confiar en nuestros productos💙")
        carrito.length = 0
    }
}