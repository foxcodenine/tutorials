"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let validKey;
validKey = 'name'; // ✅ valid key of User
validKey = 'age'; // ✅ valid key of User
// validKey = 'email'; // ❌ Error: not a key of User
// ---------------------------------------------------------------------
/**
 * Generic function to safely access a property of an object.
 *
 * - T: any object type
 * - U: must be a key of T
 */
function getProp(obj, key) {
    const val = obj[key]; // Type-safe access to the property
    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value.');
    }
    return val; // Inferred as T[U]
}
// Example usage with a user object
const user = { name: 'Max', age: 35 };
const userAge = getProp(user, 'age');
console.log(userAge); // 35
// Another example with a different object
const data = { id: 1, isStored: false, values: [1, -5, 10] };
const isStored = getProp(data, 'isStored');
console.log(isStored); // false
// ---------------------------------------------------------------------
// Simple and clean getProp using generic key
function getProp2(obj, key) {
    return obj[key];
}
data.isStored = true;
const isStored2 = getProp2(data, 'isStored');
console.log(isStored2); // false
//# sourceMappingURL=2_keyof.js.map