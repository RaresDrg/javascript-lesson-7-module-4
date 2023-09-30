/*Example 1 - Function callback

Write the following functions:

- `createProduct(obj, callback)` - accepts a product object without an id, and also
  callback. The function creates a product object by adding a unique identifier to it in
  property `id` and calls the callback passing it the created object.
- `logProduct(product)` - callback accepting a product object and logging it to
  console
- `logTotalPrice(product)` - callback receiving product object and logging
  the total value of the item in the console
*/

function createProduct(obj, callback) {      //* Higher Order Function  //
  const product = {
    id: Date.now(),
    ...obj,
  }

  callback(product);
}

function logProduct(product) {               //* Callback Function  //
  console.log(product);
}

function logTotalPrice(product) {            //* Callback Function  //
  console.log(product.price * product.quantity)
}


createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍎", price: 30, quantity: 3 }, logTotalPrice);

createProduct({ name: "🍋", price: 20, quantity: 5 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);