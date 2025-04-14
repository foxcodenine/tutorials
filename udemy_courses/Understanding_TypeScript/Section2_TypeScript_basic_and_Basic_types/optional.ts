// Function with an optional parameter that always throws an error
function generateError(msg?: string) {
    throw new Error(msg); // Throws error with the provided message
}

generateError(); // Call function without an argument

// Define a User type with an optional 'role'
type User = {
    name: string;            // User's name
    age: number;             // User's age
    role?: 'admin' | 'guest'; // Optional role property
};

let input = ''; // String input variable
// Use nullish coalescing: if input is null or undefined, didProvideInput becomes false
const didProvideInput = input ?? false;
