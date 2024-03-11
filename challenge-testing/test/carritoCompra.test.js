const carritoCompra = require("./index");

describe("Test para la clase CarritoCompra", () => {
  product1 = {
    name: "Mesa",
    price: 100,
    quantity: 1,
  };
  product2 = {
    name: "Silla",
    price: 200,
    quantity: 1,
  };

  it("CarritoCompra debe ser una clase", () => {
    // expect(carritoCompra).toBeInstanceOf(Object);
    expect(typeof carritoCompra.prototype.constructor).toBe("function");
  });

  it("carrito debe ser una instancia de CarritoCompra", () => {
    const carrito = new carritoCompra();
    expect(carrito).toBeInstanceOf(carritoCompra);
  });

  it("Debe tener el método constructor() que inicializa el carrito como un array vacío", () => {
    const { carrito } = new carritoCompra();
    expect(carrito).toEqual([]);
    expect(carrito).not.toEqual([{ product1 }]);
  });

  it("Debe tener el método agregarProducto(producto)", () => {
    const carrito = new carritoCompra();
    expect(typeof carrito.agregarProducto).toBe("function");
  });

  it("Debe tener el método calcualarTotal()", () => {
    const carrito = new carritoCompra();
    expect(typeof carrito.calcularTotal).toBe("function");
  });

  it("Debe tener el método aplicarDescuento(porcentaje)", () => {
    const carrito = new carritoCompra();
    expect(typeof carrito.aplicarDescuento).toBe("function");
  });

  it("El método agregarProducto(producto) debe agregar un producto a carrito", () => {
    const carrito = new carritoCompra();

    // Se agrega producto
    carrito.agregarProducto(product1);

    expect(carrito.carrito).toEqual([product1]);
  });

  it("El método calcularTotal() debe retornar la suma total de los productos en el carrito", () => {
    const carrito = new carritoCompra();
    carrito.agregarProducto(product1);
    const totalEsperado = product1.price * product1.quantity;
    expect(carrito.calcularTotal()).toEqual(totalEsperado);
  });

  it("El método aplicarDescuento(porcentaje) debe aplicar un descuento al total de la compra", () => {
    const carrito = new carritoCompra();
    carrito.agregarProducto(product1);
    carrito.agregarProducto(product2);

    const subtotal =
      product1.price * product1.quantity + product2.price * product2.quantity;
    const porcentaje = 10;
    const totalConDescuentoEsperado = subtotal - subtotal * (porcentaje / 100);
    const total = carrito.aplicarDescuento(porcentaje);

    expect(total).toEqual(totalConDescuentoEsperado);
  });
});
