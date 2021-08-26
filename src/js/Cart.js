class Cart {
  constructor() {
    this.items = [];
  }
  add(product) {
    this.items.push(product);
  }
  getItemCount() {
    return this.items.length;
  }
  getTotalBeforeTax() {
    let sum = 0;
    //could also use for loop
    this.items.forEach((product) => {
      sum += product.price;
    });
    return sum; // for each loop needs return and to be outside the loop
  }
  getTotalWithTax() {
    let sum = 0;
    //for of loop
    for (const product of this.items) {
      //calls getPriceWithTax from Product.js because class of product contains that method
      // can be accessed like a property with .notation
      sum += product.getPriceWithTax();
    }
    return sum;
  }
  getTax() {
    return this.getTotalWithTax() - this.getTotalBeforeTax();
  }
}

module.exports = Cart;
