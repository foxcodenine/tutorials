// ---------------------------------------------------------------------
// 🧠 What Are Indexed Access Types?
//
// Indexed access types let you extract the **type of a specific property**
// from an object or array type using square bracket syntax.
//
// Example:
// type X = SomeType['propertyName'];  // Gets the type of that property
//
// You can also use [number] to extract the type of elements in an array.
//
// ---------------------------------------------------------------------

// Base object representing a user
const appUser = {
    name: 'Max',
    age: 35,
    permissions: [
        { id: 'p1', title: 'Admin', description: 'Admin access' }
    ]
};

// Use 'typeof' to extract the type from the value
type AppUser = typeof appUser;

// Equivalent to:
// type AppUser = {
//     name: string;
//     age: number;
//     permissions: {
//         id: string;
//         title: string;
//         description: string;
//     }[];
// }

// ---------------------------------------------------------------------
// Indexed Access Types

// Access the type of the 'permissions' property from AppUser
type Perms = AppUser['permissions'];
// Perms is: array of permission objects

// Access the type of one element inside the 'permissions' array
type Perm = Perms[number];
// Perm is: { id: string; title: string; description: string; }

// ---------------------------------------------------------------------
// Works with arrays too

type Names = string[];

// Extract the element type from the array
type Name = Names[number]; // Name is: string
