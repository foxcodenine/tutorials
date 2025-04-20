"use strict";
// ---------------------------------------------------------------------
// Getters, Setters, and Static Members in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    pages = null;
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.title = title;
        this.author = author;
    }
    // Getter to return book info as a formatted string
    get info() {
        return `'${this.title}', by ${this.author}`;
    }
    // Setter to safely set the number of pages
    set setPages(pages) {
        if (pages < 0) {
            throw new Error('Invalid number of pages.');
        }
        this.pages = pages;
    }
    // Static property - shared across all instances
    static libraryID = 46578541296874;
    // Static method - can be called without creating an instance
    static getLibraryID() {
        return Book.libraryID;
    }
}
const book1 = new Book('The Lord of the Rings', 'J. R. R. Tolkien.');
console.log(book1.info); // Uses getter → "'The Lord of the Rings', by J. R. R. Tolkien."
book1.setPages = 1178; // Uses setter to assign pages
console.log(Book.getLibraryID()); // Calls static method → 46578541296874
// console.log(book1.getLibraryID()); // ❌ Error: static methods can't be called on instances
// ---------------------------------------------------------------------
// Extending a class (Inheritance)
class Magazine extends Book {
    issueNumber;
    constructor(title, author, issueNumber) {
        // If Book had no constructor, super() would be called without arguments like this:
        // super();
        // Call the parent constructor
        super(title, author);
        this.issueNumber = issueNumber;
        // ✅ We can access 'author' because it's protected
        this.author = this.author.toUpperCase();
        // ❌ We cannot access 'title' here because it's private in Book
        // this.title = 'New Title'; // Error
    }
    // Override the 'info' getter from Book
    get info() {
        return `${super.info} (Issue #${this.issueNumber})`;
    }
    // New method specific to Magazine
    publish() {
        console.log(`Publishing: ${this.info}`);
    }
}
const mag1 = new Magazine('Science Weekly', 'Jane Doe', 42);
console.log(mag1.info); // "'Science Weekly', by Jane Doe (Issue #42)"
mag1.publish(); // Logs: Publishing: 'Science Weekly', by Jane Doe (Issue #42)
// ---------------------------------------------------------------------
// Abstract Classes in TypeScript
// Abstract class defines a base template, but cannot be instantiated directly
class UIElement {
    identifier;
    constructor(identifier) {
        this.identifier = identifier;
    }
    // Regular method with base logic (can be shared)
    clone(targetLocation) {
        console.log(`Cloning '${this.identifier}' to ${targetLocation}`);
        // Add logic here to duplicate the element
    }
}
// Concrete class extending abstract base class
class SideDrawElement extends UIElement {
    identifier;
    position;
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
    // Required: must implement the abstract method
    render() {
        console.log(`Rendering SideDrawer '${this.identifier}' on the ${this.position} side.`);
    }
}
// const el = new UIElement('base'); // ❌ Error: Cannot create an instance of an abstract class
const drawer = new SideDrawElement('menu-drawer', 'left');
drawer.render(); // Rendering SideDrawer 'menu-drawer' on the left side
drawer.clone('bottom-left'); // Cloning 'menu-drawer' to bottom-left
//# sourceMappingURL=advanced.js.map