"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = {
    health: 100
};

// john.__proto__ = soldier;       // old way of inheritance

Object.setPrototypeOf(john, soldier);

john.sayHello();

const jonny = Object.create(soldier);
jonny.sayHello();