// ---------------------------------------------------------------------
// Classes in TypeScript

// A basic class with properties and a constructor
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const me = new User('Chris', 40);
console.log(me); // Output: User { name: 'Chris', age: 40 }


// ---------------------------------------------------------------------
// public, private, readonly

class Pet {
    public species: string[] = [];       // Public property - accessible and changeable from outside
    readonly type: string;               // Readonly property - can be set once in constructor only

    // 'name' is public (shortcut for this.name = name)
    // 'age' is private - not accessible from outside the class
    constructor(public name: string, private age: number, type: string) {
        this.type = type;
    }

    // Public method to display pet information
    info() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);         // age is private but accessible inside the class
        console.log(`Type: ${this.type}`);
        console.log(`Species: ${this.species.join(', ') || 'None'}`);
    }
}

const max = new Pet('Max', 2, 'Labrador');
max.species.push('Dog', 'Canis'); // Accessing and modifying public property
console.log(max);                 // Displays object structure
max.info();                       // Calls the method to show pet info

// max.type = 'Husky';            // ❌ Error: Cannot assign to 'type' because it is a read-only property
// console.log(max.age);          // ❌ Error: 'age' is private and only accessible within class 'Pet'