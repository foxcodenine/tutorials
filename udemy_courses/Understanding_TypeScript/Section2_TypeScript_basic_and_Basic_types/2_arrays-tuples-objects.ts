// Arrays

// Declare an array of strings
let hobbies: string[]; 
hobbies.push('Running');
hobbies.push('Chess');
// hobbies.push(10); // Error: number not allowed

// Array with mixed string and number types
let users: (string | number)[] = ['foxocode', 'chrismariojimmy', 66];

// Alternative syntax for an array of strings or numbers
let animals: Array<string | number>;
animals = ['dodo', ' direwolf', 'tasmanian tiger', 5];

// ---------------------------------------------------------------------
// Tuples

// Tuple with exactly 2 numbers
let possibleResults: [number, number];
possibleResults = [5, 5];

// ---------------------------------------------------------------------
// Objects

// Object with inferred type
let aaa = {
    name: 'Max',
    age: 38,
};

// Object with explicit type annotation
let bbb: {
    name: string,
    age: number
} = {
    name: 'Max',
    age: 38,
};

// Object with nested structure and array property
let cc: {
    name: string,
    age: number,
    hobbies: string[],
    role: {
        description: string,
        id: number
    }
} = {
    name: 'Max',
    age: 38,
    hobbies: ['Cooking'],
    role: {
        description: 'admin',
        id: 5
    }
}

// ---------------------------------------------------------------------
// Any non or undefined value

// 'val' can hold any non-null/undefined value
let val: {} = 'some text';
val = 0;
val = [];
val = {};
// val = null; // Not allowed
// val = undefined; // Not allowed

// Record with string keys and values either string or number
let data: Record<string, string | number>;
data = {
    entry1: 1,
    entry2: '22',
};
