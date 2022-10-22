"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Types of Functions
const sum = (a, b) => {
    return a + b;
};
console.log(sum(6, 6));
// Types of Integer
let num = 330;
//Types of String
let name1;
name1 = 'Kaushik';
//Types of Boolean
let isTrue = true;
//Types of Array
let arr = ['Joe', 'laden', 'Taimur'];
//enum Types
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 0] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays[5]);
let fruits1 = {
    "name": 'Apple',
    "color": 'Red',
    "price": 100
};
let fruits2 = {
    "name": 'Apple',
    "color": 'Red',
    "price": 100
};
console.log(fruits1.color, fruits2.price);
//Types of Array and tuples
let fruits = ['apple', 'mango', 'Infinity'];
// but in case of tuples we can define the exact length of that array
let fruits3 = ['apple', 100];
console.log(fruits[7], fruits3[1]);
// union type
const name = (id) => {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
};
name('kaushik');
