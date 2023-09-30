/*Example 6 - Inline Arrow Functions

Make the code refactoring using arrow functions.
*/

const each = (array, callback) => {
  const newArr = [];

  for (const item of array) {
    newArr.push(callback(item));
  }

  return newArr;
};

console.log(each([64, 49, 36, 25, 16], (value) => value * 2));
console.log(each([64, 49, 36, 25, 16], (value) => value - 10));
console.log(each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.ceil(value)));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));

console.log(`Inline arrow function: ↑`);


/*
  *Functia declarata separat:
*/

const multiplyByTwo = (value) => value * 2;
const minusTen = (value) => value - 10;
const sqrt = (value) => Math.sqrt(value);
const ceil = (value) => Math.ceil(value);
const floor = (value) => Math.floor(value);

console.log(each([64, 49, 36, 25, 16], multiplyByTwo));
console.log(each([64, 49, 36, 25, 16], minusTen));
console.log(each([64, 49, 36, 25, 16], sqrt));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], ceil));
console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], floor));

console.log(`Functia declarata separat: ↑`);