/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance
// Object literal vs Object instance

abstract class Root {
    abstract done: boolean;
}

class User extends Root {
    //properties
    id: number;
    firstname: string;
    lastName: string;
    private token: string;
    protected save: boolean;
    static MAX_FAILED_LOGIN = 2;
    private retryLogin = 0;
    done: boolean;

    //method
    login(username: string, password: string) {
        this.retryLogin += 1
        if (username === 'admin' && password === 'admin') {
            return true
        }

        if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
            return "max login attemped"
        }
        return false
    }
    register() {}

    constructor(id: number, firstname: string, lastname: string) {
        super()
        this.id = id;
        this.firstname = firstname;
        this.lastName = lastname;
        this.token = "";
        this.save = false;
        this.done = false;
    }
}

// static bisa langsung akses tanpa define kelasnya
User.MAX_FAILED_LOGIN = 3;

let myUser = new User(1, "john", "dodo");
console.log(myUser.login("", ""))
console.log(myUser.login("", ""))
console.log(myUser.login("admin", "admin"))

console.log(myUser.firstname)

class EnhacementUser extends User{
    location: string;

    constructor(location: string, id: number, firstname: string, lastname: string) {
        super(id, firstname, lastname)
        this.location = location
        this.save = true
    }
}

let myNewUser =  new EnhacementUser("Surabaya", 2, "Lutfi", "Maulana");
