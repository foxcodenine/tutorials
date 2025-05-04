// =====================================
// SECTION 6 – Field Decorator Basics
// =====================================
//
// A field (property) decorator runs when a class instance is created,
// and it runs **before the constructor body executes**.
//
// You can use field decorators to:
// - Assign default values
// - Log metadata about fields
// - Validate input
// - Wrap accessors (getters/setters)
// -------------------------------------

// ------------------------------
// FIELD LOGGER – Simple debug decorator
// ------------------------------
//
// Runs when the field is initialized. Logs field name and metadata.
// Note: `target` is always `undefined` for field decorators,
// because the field has not been assigned yet.

function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
    console.log('Field logger triggered for:', ctx.name);
    console.log('Metadata:', ctx);
}

// ------------------------------
// FIELD DECORATOR FACTORY – Sets a default value
// ------------------------------
//
// Factory decorator that returns a field decorator.
// The decorator sets a default value if the field is still undefined.

function defaultValue(defaultVal: any) {
    return function (value: undefined, ctx: ClassFieldDecoratorContext) {
        // Add an initializer that sets the value before constructor runs
        ctx.addInitializer(function (this: any) {
            if (this[ctx.name] === undefined) {
                this[ctx.name] = defaultVal;
            }
        });
    };
}

// ------------------------------
// APPLYING THE FIELD DECORATOR
// ------------------------------

class User {
    // Will default to 'Anonymous' if not assigned in constructor
    @defaultValue('Anonymous')
    @fieldLogger
    name!: string;

    // Will default to 30 if not assigned in constructor
    @defaultValue(30)
    age!: number;

    constructor(name?: string, age?: number) {
        // If values are passed to the constructor, they override defaults
        if (name !== undefined) this.name = name;
        if (age !== undefined) this.age = age;
    }
}

// ------------------------------
// TESTING
// ------------------------------

const u1 = new User();
console.log(u1.name, u1.age); // "Anonymous", 30

const u2 = new User('Chris', 40);
console.log(u2.name, u2.age); // "Chris", 40

const u3 = new User('Julie');
console.log(u3.name, u3.age); // "Julie", 30
