/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Object
 */

 interface User {
     name: string;
     age: number;
 }

 type TUser = {
    name: string;
    age: number;
 }


/**
 * Merge
 */

 interface Song {
     songName: string;
 }

 interface Song {
    artistName: string;
 }

 const mySong: Song = {
     songName: "Aserehe",
     artistName: "Lutfi"
 }

//note type can't be merge like that


/**
 * Intersection & Union
 */

type typeA = {
    id: number;
    propA: string;
}

type typeB = {
   id: number;
   propB: string;
}

//intersection
type IntersectionAB = typeA & typeB;

//union
type UnionAB = typeA | typeB;

let myData: IntersectionAB = {
    id: 1,
    propA: "Testing",
    propB: "Testing 2"
}

let myData2: UnionAB = {
    id: 1,
    propA: "Testing"
}


/**
 * Implements
 */

//  implement can be type and can be interface as well

 interface Address {
    street: string;
 }

 interface Person extends Address {
     name: string;
     age: number;
     getName(id:number): string;
 }

 class People implements Person {
    name: string;
    age: number;
    street: string;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
        this.street = '';
    }

    getName(id: number) {
        return "Okay";
    }
 }

/**
 * Extend
 */
