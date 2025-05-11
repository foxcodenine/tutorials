"use strict";
// ---------------------------------------------------------------------
// Index types: allow flexible object keys with consistent value types
Object.defineProperty(exports, "__esModule", { value: true });
let store = {};
store.id = 5; // valid: number
store.isOpen = false; // valid: boolean
// store.name = 'Max'; // ❌ Error: string not assignable to number | boolean
// ---------------------------------------------------------------------
// Record Type: same result as index signature but cleaner
let someObj; // same as DataStore
// ---------------------------------------------------------------------
// Constant types with 'as const'
let roles = ['admin', 'guest', 'editor'];
// roles.push('max'); // ❌ Error: cannot modify readonly array
const firstRole = roles[0]; // type is 'admin' (not just string)
// Now the function only accepts a value that matches one of the roles
function assignRole(role) {
    console.log(`Assigned role: ${role}`);
}
assignRole('guest'); // ✅ allowed — it's in the roles array
assignRole('admin'); // ✅ allowed
// assignRole('max');
//# sourceMappingURL=4_advanced.js.map