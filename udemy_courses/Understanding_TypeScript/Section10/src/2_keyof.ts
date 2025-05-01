// ---------------------------------------------------------------------
// 🧠 What Is `keyof` in TypeScript?
//
// `keyof` creates a union of all property names (keys) in a type.
// Useful when writing functions that work on object keys.
//
// `T[K]` (indexed access types) lets you get the type of a specific key.
//
// ---------------------------------------------------------------------

// Define a simple object type
type User = {
    name: string;
    age: number;
};

// 'keyof User' creates a union type: 'name' | 'age'
type UserKeys = keyof User;

let validKey: UserKeys;

validKey = 'name'; // ✅ valid key of User
validKey = 'age';  // ✅ valid key of User
// validKey = 'email'; // ❌ Error: not a key of User

// ---------------------------------------------------------------------

/**
 * Generic function to safely access a property of an object.
 * 
 * - T: any object type
 * - U: must be a key of T
 * - Returns: the value of that key (typed as T[U])
 */
function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];

    if (val === undefined || val === null) {
        throw new Error('Accessing undefined or null value.');
    }

    return val;
}

// Example usage with a user object
const user = { name: 'Max', age: 35 };
const userAge = getProp(user, 'age');
console.log(userAge); // 35

// Another example
const data = { id: 1, isStored: false, values: [1, -5, 10] };
const isStored = getProp(data, 'isStored');
console.log(isStored); // false

// ---------------------------------------------------------------------
// Simpler version of getProp (return type is less specific)

function getProp2<T extends object>(obj: T, key: keyof T) {
    return obj[key]; // Return type is T[keyof T] (a union of all value types)
}

data.isStored = true;
const isStored2 = getProp2(data, 'isStored');
console.log(isStored2); // true
