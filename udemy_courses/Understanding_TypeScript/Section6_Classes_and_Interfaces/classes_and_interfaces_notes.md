
# TypeScript: Classes and Interfaces

This document covers the lessons on **Classes** and **Interfaces** in TypeScript.

---

## 1. Classes: Basics

```typescript
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const me = new User('Chris', 40);
console.log(me); // User { name: 'Chris', age: 40 }
```

---

## 2. Public, Private, and Readonly Properties

```typescript
class Pet {
    public species: string[] = [];
    readonly type: string;

    constructor(public name: string, private age: number, type: string) {
        this.type = type;
    }

    info() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Type: ${this.type}`);
        console.log(`Species: ${this.species.join(', ') || 'None'}`);
    }
}

const max = new Pet('Max', 2, 'Labrador');
max.species.push('Dog', 'Canis');
max.info();
```

- `public`: accessible and changeable from outside.
- `private`: only accessible inside the class.
- `readonly`: can only be set once.

---

## 3. Advanced Class Features: Getters, Setters, and Static Members

```typescript
class Book {
    private pages: number | null = null;

    constructor(private title: string, protected author: string) {}

    get info(): string {
        return `'${this.title}', by ${this.author}`;
    }

    set setPages(pages: number) {
        if (pages < 0) {
            throw new Error('Invalid number of pages.');
        }
        this.pages = pages;
    }

    static libraryID = 46578541296874;

    static getLibraryID(): number {
        return Book.libraryID;
    }
}

const book1 = new Book('The Lord of the Rings', 'J. R. R. Tolkien.');
console.log(book1.info);
book1.setPages = 1178;
console.log(Book.getLibraryID());
```

- **Getter** provides a way to retrieve values.
- **Setter** provides a way to validate and assign values.
- **Static** members belong to the class, not instances.

---

## 4. Class Inheritance (Extending Classes)

```typescript
class Magazine extends Book {
    private issueNumber: number;

    constructor(title: string, author: string, issueNumber: number) {
        super(title, author);
        this.issueNumber = issueNumber;
        this.author = this.author.toUpperCase();
    }

    get info(): string {
        return `${super.info} (Issue #${this.issueNumber})`;
    }

    publish(): void {
        console.log(`Publishing: ${this.info}`);
    }
}

const mag1 = new Magazine('Science Weekly', 'Jane Doe', 42);
console.log(mag1.info);
mag1.publish();
```

- `protected` properties are accessible in subclasses.
- `private` properties are not accessible.

---

## 5. Abstract Classes

```typescript
abstract class UIElement {
    constructor(public identifier: string) {}

    clone(targetLocation: string) {
        console.log(`Cloning '${this.identifier}' to ${targetLocation}`);
    }

    abstract render(): void;
}

class SideDrawElement extends UIElement {
    constructor(public identifier: string, public position: 'left' | 'right') {
        super(identifier);
    }

    render(): void {
        console.log(`Rendering SideDrawer '${this.identifier}' on the ${this.position} side.`);
    }
}

const drawer = new SideDrawElement('menu-drawer', 'left');
drawer.render();
drawer.clone('bottom-left');
```

- Abstract classes define a blueprint.
- Abstract methods must be implemented in subclasses.

---

## 6. Interfaces

```typescript
interface Authenticatable {
    email: string;
    password: string;
    login(): void;
    logout(): void;
}
```

- Interfaces define the structure an object or class must follow.

---

### Using Interfaces as Object Types

```typescript
let user: Authenticatable;

user = {
    email: 'hello@world.com',
    password: 'abc123!',
    role: 'admin',
    login() {},
    logout() {},
};

// Declaration merging
interface Authenticatable {
    role: string;
}
```

---

### Implementing Interfaces with Classes

```typescript
class AuthenticatableUser implements Authenticatable {
    constructor(
        public email: string,
        public password: string,
        public role: string,
        private someOtherProp: string
    ) {}

    login(): void {}
    logout(): void {}
}
```

---

### Interface as a Function Parameter

```typescript
function authenticate(user: Authenticatable) {
    user.login();
}
```

---

### Extending Interfaces

```typescript
interface AuthenticatableUsername extends Authenticatable {
    username: string | number;
}
```

- You can extend one or multiple interfaces to create more complex types.

---

### Multiple Interface Extension and Class Implementation

```typescript
interface Person {
    name: string;
}

interface Contactable {
    email: string;
    phone: string;
}

interface Employee extends Person, Contactable {
    position: string;
    getContactInfo(): string;
}

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
```

---

## Summary

- Classes provide a structure with behavior.
- Interfaces define object and class shapes.
- Advanced features like inheritance, getters/setters, and abstract classes enable building scalable architectures.

