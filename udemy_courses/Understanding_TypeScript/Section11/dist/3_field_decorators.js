"use strict";
// =====================================
// SECTION 6 – Field Decorator Basics
// =====================================
// A field (property) decorator runs when a class instance is created,
// before the constructor body executes. You can use it to assign
// default values, validate, or wrap getters/setters.
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
// ------------------------------
// FIELD DECORATOR FACTORY – Sets a default value
// ------------------------------
// The target is alwasy undefined because ir un befor it's been initialized
function fieldLogger(target, ctx) {
    console.log(target);
    console.log(ctx);
}
// Usage: @defaultValue(‘some default’)
// Automatically initializes the decorated field.
function defaultValue(defaultVal) {
    // This function is the actual field decorator
    return function (value, ctx) {
        // The initializer runs before the constructor body
        ctx.addInitializer(function () {
            // Assign the default if the field is still undefined
            if (this[ctx.name] === undefined) {
                this[ctx.name] = defaultVal;
            }
        });
    };
}
// ------------------------------
// APPLYING THE FIELD DECORATOR
// ------------------------------
let User = (() => {
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _age_decorators;
    let _age_initializers = [];
    let _age_extraInitializers = [];
    return class User {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [defaultValue('Anonymous'), fieldLogger];
            _age_decorators = [defaultValue(30)];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _age_decorators, { kind: "field", name: "age", static: false, private: false, access: { has: obj => "age" in obj, get: obj => obj.age, set: (obj, value) => { obj.age = value; } }, metadata: _metadata }, _age_initializers, _age_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        // name will default to 'Anonymous' if not provided
        name = __runInitializers(this, _name_initializers, void 0);
        // age will default to 30
        age = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _age_initializers, void 0));
        constructor(name, age) {
            __runInitializers(this, _age_extraInitializers);
            // You can still override defaults via constructor parameters:
            if (name !== undefined)
                this.name = name;
            if (age !== undefined)
                this.age = age;
        }
    };
})();
// ------------------------------
// TESTING
// ------------------------------
const u1 = new User();
console.log(u1.name, u1.age); // "Anonymous", 30
const u2 = new User('Chris', 40);
console.log(u2.name, u2.age); // "Chris", 40
const u3 = new User('Julie');
console.log(u3.name, u3.age); // "Julie", 30
//# sourceMappingURL=3_field_decorators.js.map