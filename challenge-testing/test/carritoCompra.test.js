// Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras.
// La clase debe tener los siguientes métodos:
//
// constructor(): Inicializa el carrito como un array vacío.
//
// agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
//
// calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
//
// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

const carritoCompra = require("./index");

describe("Test para la clase CarritoCompra", () => {
  it("CarritoCompra debe ser una clase", () => {
    expect(carritoCompra).toBeInstanceOf(Object);
  });

  it("Debe tener el método constructor() que inicializa el carrito como un array vacío", () => {
    const carrito = new carritoCompra();
    expect(carrito.carrito).toEqual([]);
  });

  it("Debe tener el método agregarProducto(producto)", () => {
    const carrito = new carritoCompra();
    expect(carrito.agregarProducto).toBeDefined();
  });

  it("Debe tener el método calcualarTotal()", () => {
    const carrito = new carritoCompra();
    expect(carrito.calcularTotal).toBeDefined();
  });
  it("Debe tener el método aplicarDescuento(porcentaje)", () => {
    const carrito = new carritoCompra();
    expect(carrito.aplicarDescuento).toBeDefined();
  });
  it("El método agregarProducto(producto) debe agregar un producto a carrito", () => {
    const carrito = new carritoCompra();
    carrito.agregarProducto({ name: "Mesa", price: 100 });
    expect(carrito.carrito).toEqual([{ name: "Mesa", price: 100 }]);
  });
  it("El método calcularTotal() debe retornar la suma total de los productos en el carrito", () => {
    const carrito = new carritoCompra();
    carrito.agregarProducto({ name: "Mesa", price: 100 });
    carrito.agregarProducto({ name: "Silla", price: 200 });
    expect(carrito.calcularTotal()).toBe(300);
  });
  it("El método aplicarDescuento(porcentaje) debe aplicar un descuento al total de la compra", () => {
    const carrito = new carritoCompra();
    carrito.agregarProducto({ name: "Mesa", price: 100 });
    carrito.agregarProducto({ name: "Silla", price: 200 });
    expect(carrito.aplicarDescuento(10)).toBe(270);
  });
});
