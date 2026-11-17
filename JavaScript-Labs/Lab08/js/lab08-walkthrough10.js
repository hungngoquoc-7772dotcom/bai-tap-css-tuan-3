function Order(product, price, quantity) {
  this.product = product;
  this.price = price;
  this.quantity = quantity;
  this.total = function () { return this.price * this.quantity; };
  this.output = function () { return this.product + ": " + this.quantity + " × " + this.price + " = " + this.total(); };
}
const firstOrder = new Order("Book", 25, 2);
const secondOrder = new Order("Pen", 4, 3);
document.write(firstOrder.output() + "<br>" + secondOrder.output());
