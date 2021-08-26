const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product");

describe("Cart", () => {
  test("constructor sets item to empty array", () => {
    const cart = new Cart();
    expect(cart.items).toEqual([]);
  });
  test("constructors add item to the array", () => {
    const cart = new Cart();
    cart.add(new Product("Cherries", 4.75, true));
    expect(cart.items).toEqual([new Product("Cherries", 4.75, true)]);
  });
  test("constructors adds two items to the array", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 6.5, true));
    cart.add(new Product("Chicken", 8.5, false));
    expect(cart.items).toEqual([
      new Product("Fish", 6.5, true),
      new Product("Chicken", 8.5, false),
    ]);
  });
  test("get item count returns length of array", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 6.5, true));
    cart.add(new Product("Chicken", 8.5, false));
    //let numberOfCartItems = cart.getItemCount()
    expect(cart.getItemCount()).toBe(2);
  });
  test("returns sum of price of products in array", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 6.5, true));
    cart.add(new Product("Chicken", 8.5, false));
    expect(cart.getTotalBeforeTax()).toBeCloseTo(15);
  });
  test("returns sum including tax", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 6.5, true));
    cart.add(new Product("Chicken", 8.5, false));
    expect(cart.getTotalWithTax()).toBeCloseTo(15.65);
  });
  test("returns difference of both tax methods", () => {
    const cart = new Cart();
    cart.add(new Product("Fish", 6.5, true));
    cart.add(new Product("Chicken", 8.5, false));
    expect(cart.getTax()).toBeCloseTo(0.65);
  });
});
