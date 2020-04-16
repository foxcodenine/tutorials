// Lecture: let and const 

const pline = function(i) {
    console.log(`\n(${i})___________________________________________\n`)
}



// ES5 
var name5 = 'Jane Smith'; 
var age5 = 23; 
name5 = 'Jane Miller'; 
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller'; 
console.log(name5);


pline('A'); // _________________________________________________________

// ES5 

function driversLicence(passedTest) {

    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990; 

        console.log(firstName + ', born in ' + yearOfBirth +
        ' is now afficially allowed to drive.');
    }
}
driversLicence(true);


// ES6 

function driversLicence3(passedTest) {

    if (passedTest) {
        let firstName = 'Lara';
        const yearOfBirth3 = 1986; 

        console.log(firstName + ', born in ' + yearOfBirth3 +
        ' is now afficially allowed to drive.');
    }
}
driversLicence3(true);


// However with let and const this won't work because they are blocked
// scoped not function scoped:

// function driversLicence(passedTest) {

//     if (passedTest) {
//         let firstName = 'Lara';
//         const yearOfBirth = 1986; 
//     }
//     console.log(firstName + ', born in ' + yearOfBirth +
//     ' is now afficially allowed to drive.');
// }
// driversLicence(true);


// In this case let need to be decleared out side the block,
// However you can't not declar a const:

function driversLicence2(passedTest) {

    let firstName; 
    const yearOfBirth2 = 1979;

    if (passedTest) {
        firstName = 'Sara';        
    }
    console.log(firstName + ', born in ' + yearOfBirth2 +
    ' is now afficially allowed to drive.');
}
driversLicence2(true);


pline('B'); // _________________________________________________________

// You can't use let & const before it has been defined:

console.log(firstLanguage);
// console.log(secdLanguage);
// console.log(trdLanguage);


var firstLanguage = 'Python';
// let secdoLanguage = 'SQL';
// const trdLanguage = 'JavaScript'



pline('C'); // _________________________________________________________

//
// In the following examples, when using var in the for loop it will
// change our var n in the global scope, havever since let is block
// scope it won't affect the let in the global scope.

var n = 23;

for (var n = 0; n < 5; n++) {
    console.log(n);
}
console.log(n, '\n');



let m = 23;

for (let m = 0; m < 5; m++) {
    console.log(m);
}
console.log(m);




pline('D'); // _________________________________________________________

// Lecture: Block and IIFEs

// ES5

(function() {
    var a = 50;
})();

// console.log(a);  <- gives error 


// ES6 

{
    const b = 22;
    let c = 24;
    var d = 30;
}

// console.log(b);  <- gives error 
// console.log(c);  <- gives error 
console.log(d);


pline('E'); // _________________________________________________________

// Lecture: Strings

let firstName = 'Chris';
let lastName = 'Farrugia';
const yearOfBirth4 = 1984; 

function calcAge(year) {
    return 2019 - year;
}


// ES5 

console.log('This is ' + firstName + ' ' + lastName + '. He was born in '+
yearOfBirth4 + '. Today he is ' + calcAge(yearOfBirth4) + ' years old.')

// ES6 

console.log(`\
This is ${firstName} ${lastName}. He was born in ${yearOfBirth4}. Today \
he is ${calcAge(yearOfBirth4)} years old.
`)


pline('F'); // _________________________________________________________

// new strings methods:

// .startsWith() .endsWith()  . includes() & repeat()

let herfirstName = 'Dorothy';
let herlastName = 'Cassar';

const q = `${herfirstName} ${herlastName}`;


console.log(q.startsWith('A'));
console.log(q.startsWith('D'));

console.log(q.endsWith('ar'));
console.log(q.endsWith('r'));

console.log(q.includes(' '));
console.log(q.includes('rr'));

console.log('Chris '.repeat(3));
console.log(herfirstName.repeat(3));


pline('G'); // _________________________________________________________

// Lecture:Arrow functions: 

const myYears = [1990, 1965, 1984, 1937]; 

// ES5 
var ages5 = myYears.map(function(cur) {
    return 2019 - cur;
});
console.log(ages5);


// ES6 
let ages6 = myYears.map(cur => 2019 - cur); 
console.log(ages6);



// Useing multy arguments, insert args in (): 

ages6 = myYears.map(
    (cur, index) => `Age element ${index +1}: ${2019 - cur}`
);
console.log(ages6);



// To write multiple line of code, use {} and return at the end:

ages6 = myYears.map((cur, index) => {

    const now = new Date().getFullYear();
    const age = now - cur;
    return `Age element ${index +1}: ${age}`
});

console.log(ages6);


pline('H'); // _________________________________________________________