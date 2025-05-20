"use strict";
// =====================================
// SECTION 1 – Basic Class Decorator
// =====================================
// A simple decorator that just logs when a class is decorated.
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('\nSECTION 1 - Basic Class Decorator\n');
function logger(target, ctx) {
    console.log(`Target:`, target);
    console.log(`target.name:`, target.name);
    console.log('Context:', ctx);
}
let AuthService = (() => {
    let _classDecorators = [logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AuthService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AuthService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        login(user, password) {
            console.log(`${user} is attempting to log in...`);
        }
    };
    return AuthService = _classThis;
})();
// =====================================
// SECTION 2 – Class Decorator that Adds Metadata
// =====================================
// This decorator extends a class and adds new properties to each instance.
console.log('\nSECTION 2 - Class Decorator that Adds Metadata\n');
function addMetadata(target, ctx) {
    console.log(`[addMetadata] Decorating class: ${target.name}`);
    return class extends target {
        createdAt = new Date();
        version = '1.0.0';
    };
}
let ConfigLoader = (() => {
    let _classDecorators = [addMetadata];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ConfigLoader = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ConfigLoader = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        configFile = 'app.config.json';
        load() {
            console.log(`Loading config from ${this.configFile}`);
        }
    };
    return ConfigLoader = _classThis;
})();
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
function Component(selector) {
    // This is the actual class decorator returned by the factory
    return function (target) {
        console.log(`[Component] Mounting ${target.name} to ${selector}`);
    };
}
// Now we use the decorator on a class
let HeaderComponent = (() => {
    let _classDecorators = [Component('#app')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var HeaderComponent = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            HeaderComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        render() {
            console.log('Rendering HeaderComponent...');
        }
    };
    return HeaderComponent = _classThis;
})();
const header = new HeaderComponent();
header.render();
// =====================================
// SECTION 4 – Decorator that Logs Instance Creation
// =====================================
// Wraps the constructor and logs every time a new instance is created.
console.log('\nSECTION 4 - Decorator that Logs Instance Creation\n');
function LogCreation(target) {
    return class extends target {
        constructor(...args) {
            console.log(`Creating new instance of ${target.name}`);
            super(...args);
        }
    };
}
let ApiService = (() => {
    let _classDecorators = [LogCreation];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var ApiService = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ApiService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        baseUrl;
        constructor(baseUrl) {
            this.baseUrl = baseUrl;
        }
        getData() {
            console.log(`Fetching from ${this.baseUrl}`);
        }
    };
    return ApiService = _classThis;
})();
const api = new ApiService('https://example.com');
api.getData();
//# sourceMappingURL=1_decorators.js.map