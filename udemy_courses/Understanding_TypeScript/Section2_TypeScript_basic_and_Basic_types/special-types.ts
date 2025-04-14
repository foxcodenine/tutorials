// null type: variable 'a' can be null or a string
let a: null | string;

a = null;  // assign null
a = 'A';   // assign string

// ---------------------------------------------------------------------

// undefined type: variable 'b' can be undefined or a string
let b: undefined | string;

b = undefined; // assign undefined
b = 'B';       // assign string

// ---------------------------------------------------------------------

// Non-null assertion operator: guarantees element is not null
let inputEl = document.getElementById('user-name')!; 

// Uncommenting the check is unnecessary when using the '!' operator:
// if (!inputEl) {
//     throw new Error('Element not found!');
// }

/* '!' avoids null but caution is needed */
// console.log(inputEl.value);
// console.log(inputEl!.value);

// Optional chaining '?' prevents errors if inputEl is null
// console.log(inputEl?.value);

// ---------------------------------------------------------------------

// Type Casting: cast element to HTMLInputElement (or null)
let inputEl2 = document.getElementById('user-surname') as HTMLInputElement | null; 
console.log(inputEl2?.value); // safely access value using '?'
