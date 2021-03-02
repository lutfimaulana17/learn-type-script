/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/

let a;                  // undefined

let b: boolean;
b = true       // boolean

let c: number;
c = 1;            // number

let d: string;
d = "hello";        // string

let e: bigint;
e = 100n;           // big int (starting ES2020)

let f: symbol;
f = Symbol("Sym");  // symbol  (starting ES2015)


let g: () => void;
g = function () {   // function
    return null;
};

let h: null;
h = null;           // null ( special primitive )

let i: {};
i = {};  // Object Literal

let j: [];
j = [];             // array

class Product {
    // class
    //...
}
let k = new Product();

let z: any;
z = 123
z = "Haloo"
z = [1, 2, 3]

function sum(a: number, b: number): void {
    // return a + b; //must type number if not any return use void
}

let arg1 = 4;
let arg2 = 5;
let result = sum(arg1, arg2)
console.log(result)

//union
let multi: string | number;
multi = "Haloo"
multi = 123
// multi = true // if receive data boolean must declare

//type aliases
type CustomType = string | number;
let myType: CustomType;
myType = "Hello"


/********** Why is it call dynamic type / weekly typed ? ***********/

// 1. No Declaration. Type automatically set based on value at runtime
// 2. Re-Assign
// 3. with dynamic type comes great responsiblity
