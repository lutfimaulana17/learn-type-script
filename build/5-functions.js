"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y, z, a = 0) {
    return x + y + a;
}
console.log(add(2, 90));
const addEx = function (x, y) {
    return x + y;
};
console.log(addEx(34, 56));
const addArrow = (x, y) => x + y;
console.log(addArrow(67, 11));
const hello = (name) => console.log("hello " + name);
hello('lutfi');
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(str);
request('https://google.com', fn);
function submitContact(firstName, lastName, languange = 'english', gender) {
    return {
        firstName,
        lastName,
        languange,
        ...(gender && { gender })
    };
}
let result = submitContact('Lutfi', 'Maulana', 'Indonesia');
console.log(result);
function fruitsCollection(item, ...restItems) {
    return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 123);
function CT(param) {
    return param;
}
function CT_generic(param) {
    return param;
}
CT_generic('hello');
CT_generic(123);
function CT_Overload(params) {
    return params;
}
CT_Overload('Hello');
CT_Overload(123);
