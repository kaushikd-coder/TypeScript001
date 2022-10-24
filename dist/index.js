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
name1 = "Kaushik";
//Types of Boolean
let isTrue = true;
//Types of Array
let arr = ["Joe", "laden", "Taimur"];
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
    name: "Apple",
    color: "Red",
    price: 100,
};
let fruits2 = {
    name: "Apple",
    color: "Red",
    price: 100,
};
console.log(fruits1.color, fruits2.price);
//Types of Array and tuples
let fruits = ["apple", "mango", "Infinity"];
// but in case of tuples we can define the exact length of that array
let fruits3 = ["apple", 100];
console.log(fruits[7], fruits3[1]);
// union type
const name = (id) => {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
};
name("kaushik");
let person = {
    name: "Kaushik",
    age: 2,
    isAdult: false,
    hobbies: ["sleeping", "playing"],
};
let person2 = {
    name: "Kaushik",
    // age: 20,
    isMarried: false,
    isAdult: true,
    hobbies: ["coding", "reading"],
};
function getPrice(prsn) {
    return prsn + 10;
}
console.log(getPrice(person2.age));
class Property {
    constructor(x, y) {
        //* these are the parameters of this class
        this.x = x;
        this.y = y;
    }
    getX() {
        return {
            x: this.x,
            y: this.y,
        };
    }
    setX(value) {
        (this.x = value), (this.y = value);
    }
}
const ans = new Property(12, 34); //* Instance of the class Property
ans.setX(56);
console.log(ans.getX());
// Generics
let arrNum = [23, 34, 5, 6, 67, 78, 79];
let arrStr = ["kaushik", "laden", "taimur"];
function generics(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
;
let result = generics(arrNum);
// result = generics(arrStr);
console.log(result);
const details = {
    lastName: "Das",
    firstName: 'Kaushik'
};
function getGenerics(obj, Key) {
    return obj[Key];
}
console.log(getGenerics(details, 'firstName'));
