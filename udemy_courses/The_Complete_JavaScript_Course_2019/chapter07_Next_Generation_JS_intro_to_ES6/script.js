// Lecture: let and const 

const pline = function(i) {
    console.log(`\n(${i})___________________________________________\n`)
}
// Lecture: let & const


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

// Lecture: Arrow functions 1 

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

// Lecture: Arrow functions 2 (this)

// ES5 

var box5 = {

    color: 'green', 
    position: 1, 
    clickMe: function() {
        
        var self = this; // <- else 'this' will point to the global document in web;
        document.querySelector('.green').addEventListener('click', function(){

            var str = 'This box number ' + self.position + 
            ' and it is ' + self.color + '!'; 

            alert(str);
        });
    }
}

box5.clickMe();


const box6 = {

    color: 'blue', 
    position: 2, 
    clickMe: function() { // <- if use => here, 'this' will point to the global scope;
        
        document.querySelector('.blue').addEventListener('click', () => {
            let str = `This box number ${this.position} and it is ${this.color}!`;

        alert(str);
        });
    }
}
box6.clickMe();




pline('I'); // _________________________________________________________


// Object constractor: 
function Person(name) {
    this.name = name;
}


// ES5 

Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(cur) {
        return this.name + ' is friends with ' + cur + '.'
    }.bind(this));  // <- 
    
    // We need to bind 'this' or do 'this = self' again 
    // else 'this' it will point to the global scope!

    console.log(arr);
}




var friendsList = ['Robert', 'Aaron', 'David'];

new Person('Chris').myFriends5(friendsList);


// ES6 

Person.prototype.myFriends6 = function(friends) { // // <- if use => here, 'this' will point to the global scope;

    let arr = friends.map(cur => 
        `${this.name} is friends with ${cur}.`        
    );  // <- 
    // When using the => in an inner function we have access to 'this'
    
    console.log(arr);
}

new Person('Rei').myFriends6(friendsList);


pline('J'); // _________________________________________________________

// Lecture: Destructuring

// Arrays

// ES5 
var john = ['John', 26];

var jName = john[0];
var jAge  = john[1];

console.log(jName);
console.log(jAge);

// ES6
const [cName, cAge] = ['Chris', 36];

console.log(cName);
console.log(cAge);



pline('K'); // _________________________________________________________

// Objects

// ES6 

const dorothy = {
    id: '397290m',
    mob: 99224466
}

// Keep same literals

const {id, mob} = dorothy;

console.log(id);
console.log(mob);

// New same literals

const {id: a, mob: b} = dorothy;

console.log(a);
console.log(b);

pline('L'); // _________________________________________________________


// functions 

function calAgeRetirement(birthYear) {
    
    const now = new Date().getFullYear();
    const age = now - birthYear;    
    age < 65 ? remaining = 65 - age : remaining = 'already retired';
    return [age, remaining]
}

const [chrisAge, chrisToRetir] = calAgeRetirement(1984);

console.log(chrisAge);
console.log(chrisToRetir);

pline('M'); // _________________________________________________________


// Lecture: Arrays: 

const boxes = document.querySelectorAll('.orange, .yellow, .indianred');
const boxes2 = document.querySelectorAll('.purple, .indigo, .lightgreen');



// ES5
var boxesArray = Array.prototype.slice.call(boxes);

boxesArray.forEach(function(cur) {
    cur.style['background-color'] = 'indianred';
});



// ES6 .form()

let boxesArray2 = Array.from(boxes2);

boxesArray2.forEach(cur => cur.style['background-color'] ='lightgreen');


pline('N'); // _________________________________________________________

// ES5 - for loop
for (var i = 0; i < boxesArray.length; i++) {

    if (boxesArray[i].className === 'box indianred') {
        continue;
    }
    boxesArray[i].textContent = 'Color Changed!';
}


// ES6 - for of loop

for (let cur of boxesArray2) {

    if (cur.className.includes('green')){
        continue;
    }    
    cur.textContent = 'Changed Color !';
}

pline('O'); // _________________________________________________________


// findIndex(), find() 

let classAges = [16, 15, 17, 19, 14]; 

// Find index and the ages that are 18 or over 

// ES5 

var fullAge = classAges.map(function(cur) {
    return cur >= 18;
});

console.log(fullAge);

console.log(fullAge.indexOf(true));
console.log(classAges[fullAge.indexOf(true)]);

// ES6


console.log(classAges.findIndex(cur => cur >= 18));
console.log(classAges.find(cur => cur >= 18));


pline('P'); // _________________________________________________________


// Lecture: Spread operator 

function addFourNums (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourNums(18, 30, 12, 21);
console.log(sum1);

// ES5 

var nums = [18, 30, 12, 21];

var sum2 = addFourNums.apply(null, nums); 
console.log(sum2);

// ES6 

const sum3 = addFourNums(...nums);
console.log(sum3);

pline('Q'); // _________________________________________________________


const familyJones = ['John', 'Jane', 'Jack'];

const familyMiller = ['Mary', 'Mark', 'Matthew'];

bigFamily = [...familyJones, ...familyMiller];
console.log(bigFamily);

biggerFamily = [...familyJones,'Chris', 'Dorothy', ...familyMiller];
console.log(biggerFamily);

pline('Q'); // _________________________________________________________

// useing the spread with node elements 

let nodeH1 = document.querySelector('h1');
let nodeDivBoxes = document.querySelectorAll('.box');

let allElements = Array.from([nodeH1, ...nodeDivBoxes]);

allElements.forEach(cur => cur.style.color = 'indigo');