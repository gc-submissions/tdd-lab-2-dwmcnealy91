const Product = require("../src/js/Product");

describe("Product", () => {
  test("apple, 2.50, taxable", () => {
    const product = new Product("apple", 2.5, true);
    expect(product.name).toBe("apple");
    expect(product.price).toBe(2.5);
    expect(product.taxable).toBe(true);
  });
  test("orange, 1.25, false (not taxable)", () => {
    const product = new Product("orange", 1.25, false);
    expect(product.name).toBe("orange");
    expect(product.price).toBe(1.25);
    expect(product.taxable).toBe(false);
  });
  test("orange, 1.00 is 1.10 after tax, on taxable product", () => {
    const product = new Product("orange", 1.0, true);
    expect(product.getPriceWithTax()).toBeCloseTo(1.1);
  });
  test("apple, 3.00, returns original price on non taxable product", () => {
    const product = new Product("apple", 3.0, false);
    expect(product.getPriceWithTax()).toBe(3.0);
  });
});
