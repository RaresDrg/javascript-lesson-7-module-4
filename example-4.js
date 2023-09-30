/* Example 4 - Arrow functions

Make the code refactoring using arrow functions.
*/

const createProduct = (partialProduct, callback) => {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
}

const logProduct = (product) => console.log(product);
const logTotalPrice = (product) => console.log(product.price * product.quantity)


createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍎", price: 30, quantity: 3 }, logTotalPrice);

createProduct({ name: "🍋", price: 20, quantity: 5 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);