// 'any' type allows any value
let age: any = 36;

age = '37';   // now a string
age = false;  // now a boolean
age = {};     // now an object
age = [];     // now an array

// ---------------------------------------------------------------------

// Union type: allowed types are string, number, or boolean
let myAge: string | number | boolean = 36;

myAge = '40'; // now a string
myAge = 40;   // now a number
myAge = true; // now a boolean
