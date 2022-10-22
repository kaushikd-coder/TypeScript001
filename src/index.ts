//Types of Functions
const sum = (a: number, b: number): number /* (return type) */ => {
    return a + b;
};

console.log(sum(6, 6));

// Types of Integer
let num: number = 330;
//Types of String
let name1: string;
name1 = "Kaushik";
//Types of Boolean
let isTrue: boolean = true;

//Types of Array
let arr: string[] = ["Joe", "laden", "Taimur"];

//enum Types
enum Weekdays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday = Weekdays.Monday - 1,
}

console.log(Weekdays[5]);

//Types of Objects

type Fruit = {
    name: string;
    color: string;
    price: number;
};

let fruits1: Fruit = {
    name: "Apple",
    color: "Red",
    price: 100,
};

let fruits2: Fruit = {
    name: "Apple",
    color: "Red",
    price: 100,
};

console.log(fruits1.color, fruits2.price);

//Types of Array and tuples
let fruits: string[] = ["apple", "mango", "Infinity"];

// but in case of tuples we can define the exact length of that array
let fruits3: [string, number] = ["apple", 100];
console.log(fruits[7], fruits3[1]);

// union type
const name = (id: number | string) => {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
};
name("kaushik");

// interface
interface Child {
    name: string;
    age?: number | null;
    isAdult: boolean;
    hobbies?: string[] | null;
}

interface Adult extends Child {
    isMarried: boolean;
}

let person: Child = {
    name: "Kaushik",
    age: 2,
    isAdult: false,
    hobbies: ["sleeping", "playing"],
};

let person2: Adult = {
    name: "Kaushik",
    // age: 20,
    isMarried: false,
    isAdult: true,
    hobbies: ["coding", "reading"],
};

function getPrice(prsn: number) {
    return prsn + 10;
}

console.log(getPrice(person2.age!));

class Property {
    protected x: number; //* These are the properties of this class
    protected y: number;

    constructor(x: number, y: number) {
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

    setX(value: number) {
        (this.x = value), (this.y = value);
    }
}

const ans = new Property(12, 34); //* Instance of the class Property
ans.setX(56);
console.log(ans.getX());

// Generics

let arrNum = [23, 34, 5, 6, 67, 78, 79];
let arrStr = ["kaushik", "laden", "taimur"];

function generics <T>(arr: T[]): T {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
};

let result = generics(arrNum)
// result = generics(arrStr);
console.log(result);

type prsn = {
    firstName:string
    lastName: string
}
const details : prsn = {
    lastName:"Das",
    firstName:'Kaushik'
}

function getGenerics<O extends Object,K extends keyof O>(obj: O, Key: K){
    return obj[Key]
}
console.log(getGenerics(details,'firstName'))
export { }; // it basically marks the file as an external module and prevents the variables from being global
