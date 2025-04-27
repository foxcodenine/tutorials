// A generic is like a placeholder for a type that you can decide later.
// It makes your code reusable and type-safe.

// ---------------------------------------------------------------------
// Using an existing generic type: Array<string>

// These two are the same:
let name1: string[] = ['Max', 'Anna'];           // classic array syntax
let name2: Array<string> = ['Max', 'Anna'];      // generic form (Array<T>)

// Array<T> is a built-in generic type where T is the type of array items

// ---------------------------------------------------------------------
// Creating a custom generic type

// Without Generics:
// This only allows string values
type StringStore = {
    [key: string]: string;
};

// With Generics:

// Define a generic type 'DataStore' that maps string keys to values of any type T
type DataStore<T> = {
    [key: string]: T;
};

// We now use the generic and tell it: T = string | boolean
let store: DataStore<string | boolean> = {};

store.name = 'Max';          // ✅ string
store.isInstructor = true;   // ✅ boolean
// store.age = 30;           // ❌ Error: number is not assignable to string | boolean

// ---------------------------------------------------------------------
// Generic functions

// Generic function that accepts two values of the same type
function merge<T>(a: T, b: T): T[] {
    return [a, b];
}

const ids = merge(1, 2); // inferred as number[]
// const ids = merge<number>(1, 2); // explicit generic type

console.log(ids); // [1, 2]

// ---------------------------------------------------------------------
// Multiple generic types

// Function with two different generic types
function merge2<T, U>(a: T, b: U) {
    return [a, b];
}

const ids2 = merge2(1, 'a'); // inferred as [number, string]

console.log(ids2); // [1, 'a']

// ---------------------------------------------------------------------
// Generics with constraints

// Function that only accepts object types using 'extends object'
function mergeObj<T extends object>(a: T, b: T) {
    return { ...a, ...b };
}

const me = mergeObj({ name: 'Chris' }, { age: 40 });
console.log(me); // { name: 'Chris', age: 40 }

// ---------------------------------------------------------------------
// Constraints & Multiple Generic Types

// Function that merges two different object types safely
function mergeObj2<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b };
}

const pet = mergeObj2({ name: 'Max' }, { age: 2 });
console.log(pet); // { name: 'Max', age: 2 }

// ---------------------------------------------------------------------
