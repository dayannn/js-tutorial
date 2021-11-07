"use strict";


// To string
// 1

console.log(typeof(String(null)));
console.log(String(null));

// 2

console.log(typeof(5 + ''));
console.log(5 + '');


// To number
// 1

console.log(typeof(Number('4')));
console.log(Number('4'));

// 2

console.log(typeof(+'5'));
console.log(+'5');

// 3

console.log(typeof(parseInt('15px', 10)));
console.log(parseInt('15px', 10));

// To boolean
// 1

/**
 * Always == false:
 * 0, '', null, undefined, NaN
 */

 let switcher = null;

 if (switcher) {
     console.log('Working...');
 }

 switcher = 1;

 if (switcher) {
     console.log('Working...');
 }

 // 2

console.log(typeof(Boolean('42')));
console.log(Boolean('42'));

// 3

console.log(typeof(!!'4444'));
console.log(!!'4444');
