/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x:number, y:number, z?:number, a = 0):number {
    return x + y + a;
}

console.log(add(2, 90))

// function expression
const addEx = function (x:number, y:number):number {
    return x + y;
};

console.log(addEx(34, 56))

// arrow function
const addArrow = (x:number, y:number):number => x + y;
console.log(addArrow(67, 11))

// function with no return value
const hello = (name:string):void => console.log("hello " + name)
hello('lutfi')

type Greeter = (message: string) => void;
// function with callback
function request(url:string, cb: Greeter){
  cb(url)
}

let fn = (str: string) => console.log(str)
request('https://google.com', fn)

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

type Contact = {
    firstName: string,
    lastName: string,
    gender?: string,
    languange: string
}


function submitContact(firstName: string, lastName:string, languange='english', gender?:string):Contact {
  return {
    firstName,
    lastName,
    languange,
    ...(gender && {gender})
  }
}

let result = submitContact('Lutfi', 'Maulana', 'Indonesia')
console.log(result)


/********** 3. Rest Parameter  ***********/
function fruitsCollection(item: string, ...restItems: (string|number)[]) {
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 123);
// console.log(fruits);


/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/

// solution 1 union
function CT(param: string | number):string | number {
  return param
}

// solution 2 generic
// tipe variable berguna deteksi tipe data dari yang manggil function ini
function CT_generic<T>(param:T):T {
  return param
}

CT_generic<string>('hello');
CT_generic<number>(123);

// solution 3 overloading
function CT_Overload(params:string):string;
function CT_Overload(params:number):number;
function CT_Overload(params:any):any {
    return params;
}

CT_Overload('Hello')
CT_Overload(123)
