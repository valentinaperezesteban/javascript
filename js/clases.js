class Compra {
    constructor(carrito) {
        this.carrito = carrito;
    }

    obtenerTotalCarrito() {
        return this.carrito.reduce(
            (total, producto) => total + producto.importe,
            +servicePage
        );
    }

    confirmarCompra() {
        const total = this.obtenerTotalCarrito();
        Swal.fire({
            title: 'Do you want to confirm your payment? $450 of the service cost was added.',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Congratulations!',
                    'Your purchase has been confirmed! Thank you very much for trusting in our products💙',
                    'success'
                )
                carrito.length = 0;
                guardarCarrito();
                mostrarCarrito();
            }
        })
    }
}


function finalizarCompra() {
    if (carrito.length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The cart is empty.',
            footer: '<a href="">You must add products to finalize the purchase.</a>'
        });
        return;
    }
    const ventas = new Compra(carrito);
    ventas.confirmarCompra();
}