"use strict";

const arr = [1, 2, 3, 6, 8];

console.log(arr.pop());
console.log(arr);

arr.push(10);
console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

for (let item of arr) {
    console.log(item);
}

console.log(arr.length);

// arr[99] = 'lol';

// console.log(arr.length);    // 100


arr.forEach((item, idx, arr) => {
    console.log(`${idx}: ${item} in array ${arr}`);
});

const str = prompt('write a string', '');
const products = str.split(", ");
products.sort();

console.log(products.join(";; "));