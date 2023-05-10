// VARIABLES
const servicePage = 450
const carrito = []
const productos = []
const URL = 'js/productos.json'

const products = document.querySelector(".products")
const inputSearch = document.getElementById("inputSearch")

fetch(URL)
        .then((response)=> response.json())
        .then((data)=> productos.push(...data))
        .then(()=> cargarCard(productos))


function buscarProductos(valor) {
    return new Promise((resolve, reject) => {
        let resultado = productos.filter(producto => producto.nombre.toUpperCase().includes(valor.toUpperCase()));
        if (resultado.length > 0) {
            cargarCard(resultado);
            resolve(resultado);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No results found.',
                footer: '<a href="">It seems that this product does not exist. Please try another name.</a>'
            });
            reject('No se encontraron resultados.');
        }
    });
}

buscarProductos()
    .then(resultado => {
        cargarCard(resultado);
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No results found.',
            footer: '<a href="">It seems that this product does not exist. Please try another name.</a>'
        });
        console.error(error);
    });

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

inputSearch.addEventListener("search", (e) => {
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


recuperarCarrito()

//FUNCION PARA TERMINAR DE COMPRAR E IR A PAGAR
function finalizarCompra() {
    if (carrito.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The cart is empty.',
            footer: '<a href="">You most add products to finalize the purchase.</a>'
        })
        return
    }
    const ventas = new Compra(carrito)
    alert('Your total purchase is: $' + ventas.obtenerTotalCarrito())
    let respuesta = confirm("Do you want to confirm your payment?\n$450 of the service cost was added.")
    if (respuesta === true) {
        Swal.fire('Congratulations! Your purchase has been confirmed!\nThank you very much for trusting in our products💙')
        carrito.length = 0
    }
}