const formatCurrency = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("currency set to 0 and returns 0", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });
  test("currency set to 1 and returns 1", () => {
    expect(formatCurrency(1)).toBe("$1.00");
  });
  test("currency set to 1.5 and returns 1.5", () => {
    expect(formatCurrency(1.5)).toBe("$1.50");
  });
  test("currency set to 0.01 and returns 0.01", () => {
    expect(formatCurrency(0.01)).toBe("$0.01");
  });
  test("currency set to 527.6789 and returns 527.68", () => {
    expect(formatCurrency(527.6789)).toBe("$527.68");
  });
  test("currency set to -1 and returns -1", () => {
    expect(formatCurrency(-1)).toBe("-$1.00");
  });
});

// describe("getCoins", () => {
//   test("add getCoins tests here");
// });
