// ---------------------------------------------------------------------
// Function overloading based on parameter type

// Overload for string input
function getLength(val: string): string;

// Overload for array input
function getLength(val: any[]): number;

// Function implementation handles both cases
function getLength(val: string | any[]) {
    if (typeof val === 'string') {
        // const numberOfWords = val.split(' ');
        const numberOfWords = val.trim().split(/\s+/).length; // better split on multiple spaces
        return `${numberOfWords} word${numberOfWords !== 1 ? 's' : ''}`; // pluralize properly
    }

    return val.length;
}

// ---------------------------------------------------------------------
// Usage examples

const numberOfWords = getLength('Does this work!'); // string: "4 words"
const numberOfItems = getLength(['cooking', 'running']); // number: 2

console.log(numberOfWords); // "4 words"
console.log(numberOfItems); // 2


// ---------------------------------------------------------------------