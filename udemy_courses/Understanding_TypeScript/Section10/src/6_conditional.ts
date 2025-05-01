// ---------------------------------------------------------------------
// 🧠 What Are Conditional Types?
//
// Conditional types let you create types that change depending on a condition.
// Syntax: T extends U ? X : Y
//
// Very useful for:
// - extracting types conditionally
// - narrowing down complex types
// 
// It's like an if-else for types.
// Common use: check if a type is an array, union, string, etc.
//
// These are advanced and niche features but powerful when needed.
//
// ---------------------------------------------------------------------

// Basic array type
type StringArray = string[];

// Indexed access: extract the type of elements
type ElementType1 = StringArray[number]; // string

const pets = ['cat', 'dog'];
let mac: ElementType1 = 'bird'; // ✅ any string

// Generic version to get element type from any array
type ElementType2<T extends any[]> = T[number];

const users = ['mark', 'maria', 'chris'];
let user: ElementType2<typeof users> = 'james'; // ✅ any string

// ---------------------------------------------------------------------
// Conditional type: check if T is an array, return element type

type NumberArray = number[];
type SomeNumber = number;

// If T is an array, return its element type; otherwise, return never
type GetElementType<T> = T extends any[] ? T[number] : never;
 
type Example1 = GetElementType<NumberArray>; // number (it's an array)
type Element2 = GetElementType<SomeNumber>;  // never (it's not an array)

// ---------------------------------------------------------------------
// What is `never`?
//
// `never` means "this can never happen" — it's a type for impossible values.
//
// In this example, `SomeNumber` is NOT an array,
// so the condition fails, and we get `never`.

// type Impossible = never;
// let x: Impossible = 42; // ❌ Error: Type '42' is not assignable to type 'never'


// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
// Conditional type eg:

// If T has both firstName and lastName, return string, otherwise never
type FullnamePerson = { firstName: string; lastName: string };
type FullnameOrNothing<T> = T extends FullnamePerson ? string : never;

// ---------------------------------------------------------------------

// Function that returns full name if T matches FullnamePerson
function getFullname<T extends object>(person: T): FullnameOrNothing<T> {
    if (
        'firstName' in person &&
        'lastName' in person &&
        person.firstName &&
        person.lastName
    ) {
        // Safe cast — TS trusts us because we checked keys above
        return `${person.firstName} ${person.lastName}` as FullnameOrNothing<T>;
    }

    // When T does not extend FullnamePerson, return type is `never`.
    // So technically this line is unreachable — but TS needs it.
    throw new Error('Missing full name fields');
}

// ---------------------------------------------------------------------
// Test cases

const name1 = getFullname({}); // ❌ Compile-time error — return type is never
const name2 = getFullname({ firstName: 'chris' }); // ❌ Compile-time error — return type is never
const name3 = getFullname({ firstName: 'chris', lastName: 'farrugia' }); // ✅ Type: string
