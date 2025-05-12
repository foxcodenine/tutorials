// ---------------------------------------------------------------------
// Index types: allow flexible object keys with consistent value types

type DataStore = {
    [props: string]: number | boolean; // All string keys must map to number or boolean
};

let store: DataStore = {};

store.id = 5;        // valid: number
store.isOpen = false; // valid: boolean
// store.name = 'Max'; // ❌ Error: string not assignable to number | boolean

// ---------------------------------------------------------------------
// Record Type: same result as index signature but cleaner

let someObj: Record<string, number | boolean>; // same as DataStore

// ---------------------------------------------------------------------
// Constant types with 'as const'

let roles = ['admin', 'guest', 'editor'] as const;

// Makes the array immutable (read-only),
// And preserves the exact literal types instead of widening to string[]

// roles.push('max'); // ❌ Error: cannot modify readonly array
const firstRole = roles[0]; // type is 'admin' (not just string)

// Tip: roles is now a readonly tuple: ['admin', 'guest', 'editor']

// ---------------------------------------------------------------------
// Restrict input to one of the exact values in the 'roles' array

// 'typeof roles' gives us the tuple: readonly ['admin', 'guest', 'editor']
// 'roles[number]' means: "any value at a numeric index", so we get the union of values
// Final result: Role = 'admin' | 'guest' | 'editor'

type Role = typeof roles[number];

// Now the function only accepts a value that matches one of the roles
function assignRole(role: Role) {
    console.log(`Assigned role: ${role}`);
}

assignRole('guest'); // ✅ allowed — it's in the roles array
assignRole('admin'); // ✅ allowed
// assignRole('max');

// Note: if there as no 'as const' we would have:
// Role = string;

