
// =====================================
// SECTION 5 – Person Decorator with Extra Behavior + Method Autobinding
// =====================================
// This section demonstrates:
// 1. A class decorator that adds new properties and logs instance creation
// 2. A method decorator that auto-binds 'this' context for class methods
//    (so you don’t need to do it manually in the constructor)

console.log('\nSECTION 5 - Person Decorator with Extra Behavior\n');

// ------------------------------
// CLASS DECORATOR – Adds properties and logs creation
// ------------------------------
function personDecorator<T extends new (...args: any[]) => any>(
    target: T,
    ctx: ClassDecoratorContext
) {
    console.log(`[personDecorator] Decorating class: ${target.name}`);

    return class extends target {
        age = 35;

        constructor(...args: any[]) {
            super(...args);
            console.log('[personDecorator] A new Person instance created!');
        }
    }
}

// ------------------------------
// METHOD DECORATOR – Autobinds the method to the instance
// ------------------------------
// This is useful if you're using methods as callbacks (e.g., in event listeners)

function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
    console.log(`[autobind] Decorating method: ${String(ctx.name)}`);

    ctx.addInitializer(function(this: any) {
        this[ctx.name] = this[ctx.name].bind(this);
    });
}

// ------------------------------
// APPLYING DECORATORS
// ------------------------------
@personDecorator
class Person {
    name = 'Max';

    // Before using @autobind, you would write:
    //
    // constructor() {
    //     this.greet = this.greet.bind(this);
    // }

    @autobind
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

// ------------------------------
// TESTING
// ------------------------------
const chris = new Person();

// Extract the method and call it separately
const greetFn = chris.greet;
greetFn(); // Still works correctly thanks to @autobind