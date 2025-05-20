// =====================================
// SECTION 1 – Basic Class Decorator
// =====================================
// A simple decorator that just logs when a class is decorated.

console.log('\nSECTION 1 - Basic Class Decorator\n');

function logger(target: any, ctx: ClassDecoratorContext) {
    console.log(`Target:`, target);
    console.log(`target.name:`, target.name);
    console.log('Context:', ctx);
}

@logger
class AuthService {
    login(user: string, password: string) {
        console.log(`${user} is attempting to log in...`);
    }
}

// =====================================
// SECTION 2 – Class Decorator that Adds Metadata
// =====================================
// This decorator extends a class and adds new properties to each instance.

console.log('\nSECTION 2 - Class Decorator that Adds Metadata\n');

function addMetadata<T extends new (...args: any[]) => any>(
    target: T, 
    ctx: ClassDecoratorContext
) {
    console.log(`[addMetadata] Decorating class: ${target.name}`);

    return class extends target {
        createdAt = new Date();
        version = '1.0.0';
    }
}

@addMetadata
class ConfigLoader {
    configFile = 'app.config.json';

    load() {
        console.log(`Loading config from ${this.configFile}`);
    }
}

const loader = new ConfigLoader();
console.log('ConfigLoader instance:', loader);
loader.load();


// =====================================
// SECTION 3 – Component Decorator (Factory Pattern)
// =====================================
// This simulates how frontend frameworks like Angular use @Component
// It's a decorator **factory** – a function that returns a decorator.
// It allows passing arguments to the decorator (e.g., the CSS selector).

console.log('\nSECTION 3 - Component Decorator (Factory Pattern)\n');

// This is the factory that takes a selector like '#app' or '.header'
function Component(selector: string) {
    // This is the actual class decorator returned by the factory
    return function (target: Function) {
        console.log(`[Component] Mounting ${target.name} to ${selector}`);
    }
}

// Now we use the decorator on a class
@Component('#app')
class HeaderComponent {
    render() {
        console.log('Rendering HeaderComponent...');
    }
}

const header = new HeaderComponent();
header.render();


// =====================================
// SECTION 4 – Decorator that Logs Instance Creation
// =====================================
// Wraps the constructor and logs every time a new instance is created.

console.log('\nSECTION 4 - Decorator that Logs Instance Creation\n');

function LogCreation<T extends new (...args: any[]) => any>(target: T) {
    return class extends target {
        constructor(...args: any[]) {
            console.log(`Creating new instance of ${target.name}`);
            super(...args);
        }
    };
}

@LogCreation
class ApiService {
    constructor(private baseUrl: string) {}

    getData() {
        console.log(`Fetching from ${this.baseUrl}`);
    }
}

const api = new ApiService('https://example.com');
api.getData();
