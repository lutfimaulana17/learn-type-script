"use strict";
class Root {
}
let User = (() => {
    class User extends Root {
        constructor(id, firstname, lastname) {
            super();
            this.retryLogin = 0;
            this.id = id;
            this.firstname = firstname;
            this.lastName = lastname;
            this.token = "";
            this.save = false;
            this.done = false;
        }
        login(username, password) {
            this.retryLogin += 1;
            if (username === 'admin' && password === 'admin') {
                return true;
            }
            if (this.retryLogin >= User.MAX_FAILED_LOGIN) {
                return "max login attemped";
            }
            return false;
        }
        register() { }
    }
    User.MAX_FAILED_LOGIN = 2;
    return User;
})();
User.MAX_FAILED_LOGIN = 3;
let myUser = new User(1, "john", "dodo");
console.log(myUser.login("", ""));
console.log(myUser.login("", ""));
console.log(myUser.login("admin", "admin"));
console.log(myUser.firstname);
class EnhacementUser extends User {
    constructor(location, id, firstname, lastname) {
        super(id, firstname, lastname);
        this.location = location;
        this.save = true;
    }
}
let myNewUser = new EnhacementUser("Surabaya", 2, "Lutfi", "Maulana");
