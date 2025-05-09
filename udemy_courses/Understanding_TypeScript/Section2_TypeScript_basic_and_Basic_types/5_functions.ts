// function that adds 10 to the input number
function addTen(a: number): number {
    return a + 10; // returns a + 10
}

// ---------------------------------------------------------------------
// void: function that logs a message and returns nothing
function log(message: string): void {
    console.log(message); // logs message to console
}

// ---------------------------------------------------------------------
// never Type: function that always throws an error
function logAndThrow(errorMesage: string): never {
    console.log(errorMesage); // logs error message
    throw new Error(errorMesage); // throws an error, ending execution
}

// ---------------------------------------------------------------------
// function Types: arrow function assigned to a variable
const logMsg = (msg: string) => {
    console.log(msg); // logs message
};

// Function expecting a callback that takes a string and returns void
function performJob(cb: (m: string) => void) {
    cb('Hello world!'); // call the provided callback with a message
}

performJob(logMsg); // pass logMsg as the callback

// ---------------------------------------------------------------------
// dog type with a method 'bark'
type dog = {
    name: string,
    breed: string,
    age: number,
    bark: (m: string) => void,
};

// Object 'lila' of type 'dog'
const lila: dog = {
    name: 'Lila',
    breed: 'Golden Retriever',
    age: 2,
    bark(m) {
        console.log(m); // logs the bark message
    },
}
