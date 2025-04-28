// ---------------------------------------------------------------------
// Type-based union with property checks

type FileSource = { path: string };
const fileSource: FileSource = {
    path: 'some/path/to/file.csv',
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
    connectionUrl: 'some-connection-url',
};

// Union type representing either a FileSource or DBSource
type Source = FileSource | DBSource;

function loadData(source: Source) {
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
loadData(dbSource);   // logs DB connection

// ---------------------------------------------------------------------
// Alternative using discriminated union with 'type' field

type FileSource2 = { type: 'file', path: string };
type DBSource2 = { type: 'db', connectionUrl: string };

type Source2 = FileSource2 | DBSource2;

function loadData2(source: Source2) {
    if (source.type === 'file') {
        console.log(`Reading from file at: ${source.path}`);
    } else if (source.type === 'db') {
        console.log(`Connecting to database at: ${source.connectionUrl}`);
    }
}

// Example usage
loadData2({ type: 'file', path: 'file.csv' });
loadData2({ type: 'db', connectionUrl: 'db://example.com' });


// ---------------------------------------------------------------------
// Class-based type guard using `instanceof`

class User {
    constructor(public name: string) {}

    join() {
        console.log(`${this.name} joined the system.`);
    }
}

class Admin {
    constructor(private permissions: string[]) {}

    scan() {
        console.log(`Scanning with permissions: ${this.permissions.join(', ')}`);
    }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
    if (entity instanceof User) {
        // entity is instance of User
        entity.join();
        return;
    }

    // entity must be Admin
    entity.scan();
}

init(user);  // Max joined the system.
init(admin); // Scanning with permissions: ban, restore

// ---------------------------------------------------------------------
// Custom type guard using a predicate function

type Cat = {
    species: 'cat';
    meow: () => void;
};

type Dog = {
    species: 'dog';
    bark: () => void;
};

type Animal = Cat | Dog;

// Type guard predicate to check if the animal is a Cat
function isCat(animal: Animal): animal is Cat {
    return animal.species === 'cat';
}

function makeSound(animal: Animal) {
    if (isCat(animal)) {
        animal.meow(); // TypeScript knows this is a Cat
    } else {
        animal.bark(); // TypeScript knows this is a Dog
    }
}

// Example usage
const whiskers: Cat = {
    species: 'cat',
    meow: () => console.log('Meow!')
};

const rex: Dog = {
    species: 'dog',
    bark: () => console.log('Woof!')
};

makeSound(whiskers); // Meow!
makeSound(rex);      // Woof!

