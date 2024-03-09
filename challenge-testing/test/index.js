// // Desarrolla una clase en JavaScript llamada CarritoCompra que represente
//    un carrito de compras.
// // La clase debe tener los siguientes métodos:
// //
// // constructor(): Inicializa el carrito como un array vacío.
// //
// // agregarProducto(producto): Recibe un objeto representando un producto y
//    lo agrega al carrito.
// //
// // calcularTotal(): Calcula el total de la compra sumando los precios de todos
//    los productos en el carrito.
// //
// // aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según
//    el porcentaje especificado.

class carritoCompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto(producto) {
    this.carrito.push(producto);
  }
  calcularTotal() {
    let total = 0;
    for (const item of this.carrito) {
      total += item.price;
    }
    return total;
  }
  aplicarDescuento(porcentaje) {
    let subtotal = this.calcularTotal();
    let total = subtotal - subtotal * (porcentaje / 100);
    return total;
  }
}

module.exports = carritoCompra;
