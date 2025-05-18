// ---------------------------------------------------------------------
// 🧠 What Are Mapped Types?
//
// Mapped types allow you to create new types by transforming the properties
// of an existing type using 'keyof' and a loop-like structure.
//
// You can:
// - change the value type
// - make fields optional or required
// - add or remove readonly
//
// Syntax:
// type NewType<T> = { [K in keyof T]: /* new value type */ };
//
// ---------------------------------------------------------------------

// Base type for math operations
type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    readonly multyple?: (a: number, b: number) => number;
};

// ---------------------------------------------------------------------
// 1. All properties become number values (no modifiers)
type Result1<T> = {
    [K in keyof T]: number;
};

let r1: Result1<Operations> = {
    add: 1,
    subtract: 2,
    multyple: 3 // even optional ones are required
};

// ---------------------------------------------------------------------
// 2. All properties become optional numbers
type Result2<T> = {
    [K in keyof T]?: number;
};

let r2: Result2<Operations> = {
    add: 1
    // other props are optional
};

// ---------------------------------------------------------------------
// 3. All properties become readonly numbers
type Result3<T> = {
    readonly [K in keyof T]: number;
};

const r3: Result3<Operations> = {
    add: 10,
    subtract: 20,
    multyple: 30
};
// r3.add = 0; // ❌ Error: read-only

// ---------------------------------------------------------------------
// 4. Optional + readonly
type Result4<T> = {
    readonly [K in keyof T]?: number;
};

const r4: Result4<Operations> = {
    subtract: 5
};
// r4.subtract = 1; // ❌ Error: read-only

// ---------------------------------------------------------------------
// 5. Remove readonly but keep optional
type Result5<T> = {
    -readonly [K in keyof T]?: number;
};

let r5: Result5<Operations> = {
    multyple: 99
};
r5.multyple = 100; // ✅ allowed

// ---------------------------------------------------------------------
// 6. Remove optional modifier
type Result6<T> = {
    [K in keyof T]-?: number;
};

let r6: Result6<Operations> = {
    add: 1,
    subtract: 2,
    multyple: 3 // now required even if it was optional
};
