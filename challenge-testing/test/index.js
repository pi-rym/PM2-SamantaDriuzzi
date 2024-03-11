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
      total += item.price * item.quantity;
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
