// Get the input elements with the IDs 'num1' and 'num2'
const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;

// Get the button element with the ID 'button'
const buttonElement = document.getElementById('button');

// ---------------------------------------------------------------------
// Define arrays to store numeric and text results
const numResult: number[] = [];
const textResult: string[] = [];

const anotherNumberArray: Array<number> = [];

// ---------------------------------------------------------------------


const myPromise = new Promise<string>((resolve, reject)=>{
    setTimeout(()=>{
        resolve('It worked!');
    }, 1000)
});

myPromise.then((result) => {
    console.log(result.split(' '));
});

// By default, both Array and Promise are of generic type. By adding
// <string>, we specify the type of value the Promise will resolve to.


// ---------------------------------------------------------------------

// Define custom types
type NumOrString = number | string;
type MyResult = { val: number, key: string, timestamp: Date };



interface ResultObj {
    val: number,
    key: string,
    timestamp: Date
}

// In TypeScript, you can use either type or interface to define object structures.
// Interfaces describe contracts for the shape of objects, allowing for structure enforcement,
// although they do not inherently force classes to implement specific methods.




// ---------------------------------------------------------------------

function add(num1: number, num2: number | string): number {
    if (typeof num2 === 'string') {
        textResult.push(num2);
        num2 = Number(num2);

    } else {
        num2 = Number(num2);
    }

    return num1 + num2;
}

// ---------------------------------------------------------------------

function printResult(resultObj: { val: number, key: string, timestamp: Date }): void {
    console.log(resultObj);
}

// ---------------------------------------------------------------------

// Testing 

console.log(add(1, 6));


if (buttonElement) {
    buttonElement.addEventListener('click', () => {

        const num1 = Number(num1Element.value);
        const num2 = Number(num2Element.value);

        const result = add(num1, num2);
        console.log(result);

        printResult({ val: result as number, key: 'my result', timestamp: new Date });
    });
}

// ---------------------------------------------------------------------