// =====================================
// SECTION – Experimental Class Decorators
// =====================================
//
// A **class decorator** runs when the class is *defined*, not instantiated.
//
// ✔ You can use it to:
// - Log metadata
// - Modify or replace constructors
// - Attach metadata or static methods
// - Inject HTML into the DOM (e.g. UIs)
// =====================================

// ------------------------------
// PLAIN CLASS DECORATOR
// ------------------------------
// Logs when the class is defined (not when instantiated).
function SimpleLogger(constructor: Function) {
    console.log('📦 SimpleLogger: Class defined!');
    console.log('Constructor:', constructor.name);
}

// ------------------------------
// FACTORY CLASS DECORATOR
// ------------------------------
// Accepts parameters and logs them.
function LoggerWithPrefix(prefix: string) {
    return function (constructor: Function) {
        console.log(`📄 LoggerWithPrefix: ${prefix}`);
        console.log('Constructor:', constructor.name);
    };
}

// ------------------------------
// DECORATOR – Renders static HTML into a DOM element
// ------------------------------
function WithTemplate(template: string, hookId: string) {
    return function (_: Function) {
        console.log('🖼️ WithTemplate applied');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}

// ------------------------------
// DECORATOR – Instantiates the class and uses instance data in the DOM
// ------------------------------
function WithPerson(name: string, hookId: string) {
    return function (constructor: any) {
        console.log('👤 WithPerson applied');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            const instance = new constructor(name); // safely passed argument
            hookEl.innerHTML = `<h1>${instance.name}</h1>`;
        }
    };
}

// ------------------------------
// USING THE DECORATORS
// ------------------------------

@SimpleLogger
@LoggerWithPrefix('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
@WithPerson('Rei', 'app')
class Person {
    name = 'Max';

    constructor(name: string) {
        this.name = name;
        console.log('🛠️ Constructor: Creating person instance...');
    }
}

// ------------------------------
// TESTING
// ------------------------------
const pers = new Person('James');
console.log(pers); // Person { name: 'James' }


/// =====================================
// SECTION – Property, Accessor, Method, Parameter Decorators
// =====================================

// ------------------------------
// Property Decorator
// ------------------------------
function Log(target: any, propertyName: string | Symbol) {
    console.log('🧱 Property Decorator!');
    console.log('Target:', target);
    console.log('Property:', propertyName);
}

// ------------------------------
// Accessor Decorator
// ------------------------------
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('🔧 Accessor Decorator!');
    console.log('Target:', target);
    console.log('Name:', name);
    console.log('Descriptor:', descriptor);
}

// ------------------------------
// Method Decorator
// ------------------------------
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('🛠️ Method Decorator!');
    console.log('Target:', target);
    console.log('Name:', name);
    console.log('Descriptor:', descriptor);
}

// ------------------------------
// Parameter Decorator
// ------------------------------
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('🧩 Parameter Decorator!');
    console.log('Target:', target);
    console.log('Method:', name);
    console.log('Parameter position:', position);
}

// ------------------------------
// CLASS: Product
// ------------------------------
class Product {

    @Log
    title: string;

    private _price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive');
        }
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}
