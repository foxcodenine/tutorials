// Interface definition
interface Authenticatable {
    email: string;
    password: string;
    login(): void;
    logout(): void;
}

// ---------------------------------------------------------------------
// Use interface as an object type

let user: Authenticatable;

user = {
    email: 'hello@world.com',
    password: 'abc123!',
    role: 'admin', // allowed due to declaration merging
    login() {
        // logic to login user
    },
    logout() {
        // logic to logout user
    },
}

// Declaration merging: adds 'role' to the interface
interface Authenticatable {
    role: string;
}

// ---------------------------------------------------------------------
// Implementing interfaces with a class

class AuthenticatableUser implements Authenticatable {
    constructor(
        public email: string,
        public password: string,
        public role: string,
        private someOtherProp: string
    ) {}

    login(): void {
        // login logic here
    }

    logout(): void {
        // logout logic here
    }
}

// ---------------------------------------------------------------------
// Use interface as a function parameter type

function authenticate(user: Authenticatable) {
    user.login();
}

// ---------------------------------------------------------------------
// Extend interfaces

interface AuthenticatableUsername extends Authenticatable {
    username: string | number;
}

// ---------------------------------------------------------------------
// Multiple interface extension and implementation

interface Person {
    name: string;
}

interface Contactable {
    email: string;
    phone: string;
}

// Combined interface from multiple sources
interface Employee extends Person, Contactable {
    position: string;
    getContactInfo(): string;
}

// Class implementing the combined interface
class Developer implements Employee {
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public position: string
    ) {}

    getContactInfo(): string {
        return `${this.name} can be reached at ${this.email} or ${this.phone}`;
    }
}

const chris = new Developer('Chris', 'chris@company.com', '12345678', 'Software Developer');
console.log(chris.getContactInfo());
