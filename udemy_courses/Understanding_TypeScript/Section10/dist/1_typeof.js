"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = 'Chris';
let userName = 'cmj';
// JavaScript
console.log(typeof userName); // Logs 'string'
// 'UserName' type is 'string' (not the literal value 'cmj')
// ---------------------------------------------------------------------
// Object with different property types
const setting = {
    difficilty: "easy",
    minLevel: 10,
    didStart: false,
    players: ["Max", "Ray"]
};
// Function that accepts an argument matching the 'setting' type
function loadData(s) {
    // Or you can write: function loadData(s: Settings)
    console.log(s.difficilty);
}
//# sourceMappingURL=1_typeof.js.map