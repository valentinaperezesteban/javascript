// function buscar(id) {
//     let idProducto = productos.find((producto)=> producto.id === parseInt(id))
//     return idProducto
// }

// function finalizarCompra() {
//     if (carrito.length === 0) {
//         alert("El carrito se encuentra vacío.")
//         return
//     }
//     const ventas = new Compra(carrito)
//     alert("El total de tu compra es de: $ " + ventas.obtenerTotalCarrito())
//     let respuesta = confirm("Deseas confimar tu pago?")
//     if (respuesta === true) {
//         alert("Felicidades! Tu compra ha sido confirmada!\nMuchas gracias por confiar en nuestros productos💙")
//         carrito.length = 0
//     }
// }

// function comprarProductos() {
//     let id = prompt("Hola! Bienvenido a La Roche Posay. Qué producto deseas comprar?\nIngrese su id correspondiente😁")
//         if (!parseInt(id)) {
//             alert("Error en el id ingresado, el número no existe.")
//             let respuesta = confirm("Deseas intentar de nuevo?")
//                 if (respuesta === true) {
//                     comprar()
//                 }
//                 return
//         }
//     let producto = buscar(id)
//         if (producto === undefined) {
//             alert("Error en el id ingresado, el número no existe.")
//             let respuesta = confirm("Deseas intentar de nuevo?")
//                 if (respuesta === true) {
//                     comprarProductos()
//                 }
//                 return
//         }
//         alert(producto.nombre + ' se encuentra en stock💙 y cuesta: $' + producto.importe + ' y ya ha sido agregado al carrito.')
//         carrito.push(producto)

//         let seguir = confirm("Desea agregar más productos al carrito?")
//         if (seguir === true) {
//         comprarProductos();
//         } else {
//         let fin = confirm("Perfecto!😁 Desea ver el total de su compra?\n(Se agregaran $450 del costo de servicio.)")
//         finalizarCompra();
//     }
// }
