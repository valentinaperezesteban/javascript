// VARIABLES
const servicePage = 450;
const carrito = [];
const productos = [];
const URL = 'js/productos.json';

const products = document.querySelector(".products");
const inputSearch = document.getElementById("inputSearch");
const carritoContainer = document.querySelector(".carrito-container");
const carritoItems = document.querySelector(".carrito-items");
const carritoTotal = document.querySelector(".carrito-total");

fetch(URL)
    .then((response) => response.json())
    .then((data) => productos.push(...data))
    .then(() => cargarCard(productos));

function buscarProductos(valor) {
    return new Promise((resolve, reject) => {
        let resultado = productos.filter((producto) =>
            producto.nombre.toUpperCase().includes(valor.toUpperCase())
        );
        if (resultado.length > 0) {
            cargarCard(resultado);
            resolve(resultado);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No results found.',
                footer: '<a href="">It seems that this product does not exist. Please try another name.</a>',
            });
            reject('No se encontraron resultados.');
        }
    });
}

buscarProductos()
    .then((resultado) => {
        cargarCard(resultado);
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No results found.',
            footer: '<a href="">It seems that this product does not exist. Please try another name.</a>',
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
            </div>`;
}

function cargarCard(array) {
    products.innerHTML = "";
    array.forEach((producto) => {
        products.innerHTML += retornarCard(producto);
    });
    activarBotones();
}

inputSearch.addEventListener("search", (e) => {
    buscarProductos(e.target.value);
});

function activarBotones() {
    const botones = document.querySelectorAll("button.buttonProduct");
    for (const boton of botones) {
        boton.addEventListener("click", () => {
            let resultadoproducto = productos.find(
                (producto) => producto.id === parseInt(boton.id)
            );
            carrito.push(resultadoproducto);
            guardarCarrito();
            mostrarCarrito();
        });
    }
}

function guardarCarrito() {
    localStorage.setItem("carritoProductos", JSON.stringify(carrito));
}

function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("carritoProductos")) || [];
}

function mostrarCarrito() {
    carritoItems.innerHTML = "";
    carritoTotal.textContent = "";

    carrito.forEach((producto) => {
        const productoElement = document.createElement("div");
        productoElement.classList.add("carrito-item");

        productoElement.innerHTML = `
      <p class="carrito-nombre">${producto.nombre}</p>
      <p class="carrito-precio">${producto.importe}</p>
      <button class="carrito-eliminar" data-id="${producto.id}">Remove</button>
    `;

        carritoItems.appendChild(productoElement);
    });

    const total = carrito.reduce(
        (accumulator, producto) => accumulator + producto.importe,
        0
    );
    carritoTotal.textContent = `Total: $${total}`;
}

carritoContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("carrito-eliminar")) {
        const id = parseInt(e.target.dataset.id);
        carrito.splice(
            carrito.findIndex((producto) => producto.id === id),
            1
        );
        guardarCarrito();
        mostrarCarrito();
    }
});

recuperarCarrito();
mostrarCarrito();