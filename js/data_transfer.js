"use strict";

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;    // ссылка на объект

copy.a = 10;

console.log(copy);
console.log(obj);

function copyObject(mainObj) {
    let res = {};

    for (let key in mainObj) {
        res[key] = mainObj[key];
    }

    return res;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyObject(numbers);

newNumbers.a = 10;
newNumbers.c.x = 666;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'h', 54];
const newArray = oldArray.slice();  // oldStandart (ES6)


newArray[1] = 'fsdfsdf';
console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);        // ES9

const array = ['a', 'b'];

const arrayCopy = [...array];

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};

