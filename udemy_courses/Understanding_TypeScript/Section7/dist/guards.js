"use strict";
// ---------------------------------------------------------------------
// Type-based union with property checks
Object.defineProperty(exports, "__esModule", { value: true });
const fileSource = {
    path: 'some/path/to/file.csv',
};
const dbSource = {
    connectionUrl: 'some-connection-url',
};
function loadData(source) {
    // Check if source is a FileSource by checking the presence of 'path'
    if ('path' in source) {
        // source.path => open the file
        console.log(`Reading from file at: ${source.path}`);
        return;
    }
    // If not, it's assumed to be a DBSource
    console.log(`Connecting to database at: ${source.connectionUrl}`);
    // source.connectionUrl => connect to DB
}
// Example usage
loadData(fileSource); // logs file path
loadData(dbSource); // logs DB connection
function loadData2(source) {
    if (source.type === 'file') {
        console.log(`Reading from file at: ${source.path}`);
    }
    else if (source.type === 'db') {
        console.log(`Connecting to database at: ${source.connectionUrl}`);
    }
}
// Example usage
loadData2({ type: 'file', path: 'file.csv' });
loadData2({ type: 'db', connectionUrl: 'db://example.com' });
// ---------------------------------------------------------------------
// Class-based type guard using `instanceof`
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        console.log(`${this.name} joined the system.`);
    }
}
class Admin {
    permissions;
    constructor(permissions) {
        this.permissions = permissions;
    }
    scan() {
        console.log(`Scanning with permissions: ${this.permissions.join(', ')}`);
    }
}
const user = new User('Max');
const admin = new Admin(['ban', 'restore']);
function init(entity) {
    if (entity instanceof User) {
        // entity is instance of User
        entity.join();
        return;
    }
    // entity must be Admin
    entity.scan();
}
init(user); // Max joined the system.
init(admin); // Scanning with permissions: ban, restore
// Type guard predicate to check if the animal is a Cat
function isCat(animal) {
    return animal.species === 'cat';
}
function makeSound(animal) {
    if (isCat(animal)) {
        animal.meow(); // TypeScript knows this is a Cat
    }
    else {
        animal.bark(); // TypeScript knows this is a Dog
    }
}
// Example usage
const whiskers = {
    species: 'cat',
    meow: () => console.log('Meow!')
};
const rex = {
    species: 'dog',
    bark: () => console.log('Woof!')
};
makeSound(whiskers); // Meow!
makeSound(rex); // Woof!
//# sourceMappingURL=guards.js.map