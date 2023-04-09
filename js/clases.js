class Compra {
    constructor(carritoCompras) {
        this.carrito = carritoCompras
    }
    obtenerTotalCarrito() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, producto)=> acc + producto.importe, servicePage) 
        }
    }
}