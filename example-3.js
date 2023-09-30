/*Example 3 - Function callback

Write a function `each(array, callback)` that takes as its first parameter
array, and the second - a function that will be applied to each element of the array.
The each function must return a new array whose elements will be the results
of callback call.
*/

// *for //

function each(array, callback) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray
}


// *for...of //

function each(array, callback) {
  const newArray = [];

  for (const item of array) {
    newArray.push(callback(item));
  }
  return newArray;
}


// *for.Each //

function each(array, callback) {
  const newArray = [];

  array.forEach((element) => {              
    newArray.push(callback(element));
  });

  return newArray;
}


console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);


// ^Putem crea si o functie propriu-zisa, sau o constanta cu valoarea respectiva //

function multiplyByTwo(value) {
  return value * 2;
}

const multiplyByTwoV2 = function (value) {
  return value * 2;
}

console.log(each([64, 49, 36, 25, 16], multiplyByTwo));   
console.log(each([64, 49, 36, 25, 16], multiplyByTwoV2));
// console.log(each( [64, 49, 36, 25, 16], function (value) { return value * 2; } ));