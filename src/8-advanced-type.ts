/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 */

// use case : transform existing interface to new interface without modify existing interface

interface User {
    id: number;
    name: string;
    age?: number;
    createdAt: Date;
}

// many things to change interface

// function CreateUser(data: User) {}
// function CreateUser(data: Readonly<User>) {}

// partial make all property not require
// function CreateUser(data: Partial<User>) {}

// require make all property require
// function CreateUser(data: Required<User>) {}

//read only can't cange the property
// function CreateUser(data: Readonly<User>) {
//     data.id = 123
// }

//pick select property that can i get
// function CreateUser(data: Pick<User, "id" | "name">) {}

//omit opposite from pick
function CreateUser(data: Omit<User, "age" | "name">) {}

CreateUser({
    id: 1,
    // name: 'doe',
    // age: 20,
    createdAt: new Date(),
});

/**
 * Record  => Record<K,T>
 */
/*

/*
usecase : object of object
  {
    propA: {id,name,age},
    propB: {id,name,age}
  }
*/

// type Response = Record<'id' | 'name', string>;
type Response = Record<string, string | number>;

const message: Response = {
  id: '1',
  name: 'Lutfi',
  address: '',
  age: 23
}

// case 2
type Users = Record<string, User>;
const allUsers: Users = {
    "1": { id: 1, name: 'Lutfi', createdAt: new Date(), age: 20},
    "2": { id: 2, name: 'Maulana', createdAt: new Date(), age: 20}
}

/**
 * Extract => Extract<T, U>
 * Exclude => Exclude<T, U>
 */

 interface Post {
   id: string;
   title: string;
   createdAt: Date; 
 }

//  type ExtType = Extract<"id"|"name", "id" | "title">
 type ExtType = Extract<keyof User, keyof Post>
 type ExcType = Exclude<keyof User, keyof Post>

 type MyNewType = Record<string, ExtType>;