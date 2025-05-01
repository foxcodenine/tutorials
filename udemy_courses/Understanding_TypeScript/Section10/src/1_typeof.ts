// ---------------------------------------------------------------------
// 🧠 What Is `typeof` in TypeScript?
//
// - In JavaScript: `typeof` gives the runtime type as a string (e.g., "string", "number").
// - In TypeScript: `typeof` (used in a type position) extracts the type of a value.
//
// Useful when:
// - You want to reuse the exact shape/type of a variable.
// - You want to build types from real data (e.g., config objects).
//
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// JS vs TS typeof

const name = 'Chris';
let userName = 'cmj';

// JavaScript: typeof returns string like "string"
console.log(typeof userName); // Logs: 'string'

// TypeScript: typeof extracts type
type Name = typeof name;         // Type is the literal: 'Chris'
type UserName = typeof userName; // Type is: string

// ---------------------------------------------------------------------
// Using typeof on objects to extract full structure

const setting = {
    difficilty: "easy",
    minLevel: 10,
    didStart: false,
    players: ["Max", "Ray"]
};

// Extracts the full structure of `setting`
type Settings = typeof setting;

// Equivalent to:
// type Settings = {
//     difficilty: string;
//     minLevel: number;
//     didStart: boolean;
//     players: string[];
// }

// Function that accepts an argument with the same shape as `setting`
function loadData(s: typeof setting) {
    // You can also write: function loadData(s: Settings)
    console.log(s.difficilty);
}
