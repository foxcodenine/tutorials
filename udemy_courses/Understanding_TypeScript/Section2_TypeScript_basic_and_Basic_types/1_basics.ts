// Declare a variable 'userName' with type string
let userName: string;
userName = 'Max'; // Assign the value 'Max' to userName

// ---------------------------------------------------------------------

// Declare and initialize 'userAge' with a numeric literal (inferred as number)
let userAge = 40;

// Declare 'something' with the any type, allowing any value (initially a string)
let something: any = 'Hello World'
something = 5; // Reassign 'something' to a number

// ---------------------------------------------------------------------

/**
 * A function to add two numbers.
 * - 'a' is a required number.
 * - 'b' is an optional number with a default value of 5.
 * The function returns a number.
 */
function add(a: number, b = 5): number {
    return a + b;
}

add(5); // Call the add function, implicitly using the default value for 'b'

// ---------------------------------------------------------------------
