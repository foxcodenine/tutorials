// Arrays

let hobbies: string[];

hobbies.push('Running');
hobbies.push('Chess');
// hobbies.push(10);

// ---------------------------------------------------------------------

let users: (string | number)[] = ['foxocode', 'chrismariojimmy', 66];

let animals: Array<(string | number)>
animals = ['dodo', ' direwolf', 'tasmanian tiger', 5]

// ---------------------------------------------------------------------
// Tuples

let possibleResults: [number, number];
possibleResults = [5, 5];

// ---------------------------------------------------------------------
// Objects

let aaa = {
    name: 'Max',
    age: 38,
};

let bbb: {
    name: string,
    age: number
} = {
    name: 'Max',
    age: 38,
};

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
let val: {} = 'some text';
val = 0;
val = [];
val = {};
// val = null;
// val = undefined;

// ---------------------------------------------------------------------

let data: Record<string, string | number>;

data = {
    entry1: 1,
    entry2: '22',
};
