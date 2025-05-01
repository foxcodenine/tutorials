"use strict";
// A generic is like a placeholder for a type that you can decide later.
// It makes your code reusable and type-safe.
Object.defineProperty(exports, "__esModule", { value: true });
// ---------------------------------------------------------------------
// Using an existing generic type: Array<string>
// These two are the same:
let name1 = ['Max', 'Anna']; // classic array syntax
let name2 = ['Max', 'Anna']; // generic form (Array<T>)
// We now use the generic and tell it: T = string | boolean
let store = {};
store.name = 'Max'; // ✅ string
store.isInstructor = true; // ✅ boolean
// store.age = 30;           // ❌ Error: number is not assignable to string | boolean
// ---------------------------------------------------------------------
// generic functions
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, 2);
// const ids = merge<number>(1, 2);
console.log(ids);
// multy
function merge2(a, b) {
    return [a, b];
}
const ids2 = merge2(1, 'a');
console.log(ids2);
// constrains
function mergeObj(a, b) {
    return { ...a, ...b };
}
const me = mergeObj({ name: 'Chirs' }, { age: 40 });
console.log(me);
// ---------------------------------------------------------------------
//# sourceMappingURL=generics.js.map