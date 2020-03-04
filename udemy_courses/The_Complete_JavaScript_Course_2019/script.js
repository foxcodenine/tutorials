// /********************************************************************
//  * Variables and data types
//  */ 
// console.log('Hello World!');

// var firstName = 'John'
// var lastName = 'Smith'; 

// console.log(firstName, lastName);

// var age = 28;
// var fullAge =true;

// console.log(fullAge);

// var job;
// console.log(job);
// var town = null;
// console.log(town);

// var johnMark = 'John and Mark';

// /********************************************************************
//  * Variables mutation and type coercion
//  */ 


//  var firstName = 'John'
//  var age = 28;

//  // Type coercion
//  console.log(firstName + ' ' + age);

//  var job, isMarried;
//  job = 'teacher'
//  isMarried = false

//  console.log(firstName + ' is a ' + age + ' year old ' + job + 
//                                     '. Is he married? ' + isMarried);

// // Variable mutation 
// age = 'twenty eight'
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + 
// '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName)

// /********************************************************************
//  * Basic operators
//  */ 

//  // Math opertos
// var now, yaerJohn, yearChris;
// ageJohn = 28;
// ageChris = 35;
// now = 2019;

// // Math operators 
// yearJohn = now - ageJohn;
// yearChris = now - ageChris; 

// console.log(yearChris);


// console.log(now + 2);
// console.log(now - 2);
// console.log(now * 10);
// console.log(now / 10);
// now --;
// console.log(now);
// now ++; 
// console.log(now);

// console.log(5 ** 2);
// console.log(5 % 3);

// // logical operators
// // <, >, ==, !=, <= and >=

// var johnOlder = ageJohn > ageChris;
// console.log(johnOlder);

// // typeof operator 

// console.log(typeof johnOlder);
// console.log(typeof ageChris);
// console.log(typeof 'Mark is olded then Chris!')
// var x;
// var y = null;
// console.log(typeof x);
// console.log(typeof y);

// /********************************************************************
//  * Operator precedence
//  */ 

//  var now = 2020; 
//  var yearChris = 1984; 
//  var fullAge = 36;
//  var ageChris = 35
 
// // Multiple operators
//  var isFullAge = ageChris >= now - yearChris;
//  console.log(isFullAge);

//  // Grouping
//  var ageMark = 25; 
//  var averageAge = (ageChris + ageMark) / 2;
//  console.log(averageAge);

// //  Multiple assignments
// var x, y 
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // More operators 
// var n = 10; 
// n *= 2;
// console.log(n);

// n += 2;
// console.log(n);

// n -= 2;
// console.log(n);

// n /= 2;
// console.log(n);

// /********************************************************************
//  * If / else statments
//  */ 

// var firstName = 'John';
// var civilStatus = 'Single'; 

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!')
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// };




// var firstName = 'Joe'
// var isMarried = true

// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is single!')
// };





// var massMark = 78; // kg 
// var heightMark = 1.69; // meters

// var massJohn = 92; // kg 
// var heightJohn = 1.95; // meters

// var MBIMark = massMark / (heightMark * heightMark);
// var MBIJohn = massJohn / (heightJohn * heightJohn);

// if (MBIMark > MBIJohn){
//     console.log('Mark\'s BMI is higher than John\'s BMI. ');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s BMI. ');
// };

/***********************************************************************
 * Boolean logic 
 */ 


var firstName = 'Dorothy';
var age = 26;

if (age < 13){
    console.log(firstName + ' is a girl!');
} else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenageer!');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young women!');
} else {
    console.log(firstName + ' is a woman!');
};

/***********************************************************************
 * The Ternery Operator and Switch Statements
 */ 


// Ternery Operator
var firstName = 'Jamie';
var age = 18;

age >=18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink)


// The above is use instade of this:
if (age >= 18 ) {
    var drink = 'beer'
} else {
    var drink = 'juice'
}
console.log(drink)



// Switch Statements
var job = 'instractor'

switch (job) {
    case 'teacher':
    case 'instractor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + 'desigms beautifull websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


var firstName = 'Dorothy';
var age = 30;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a girl!');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenageer!');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young women!');
        break;
    default:
        console.log(firstName + ' is a woman!');
}

/***********************************************************************
 * Truthy and Falsy values and equality operators
 */ 

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values 

var higher; 

height = 0;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined');
}


// Equality operators 
console.log('== does coercion!', 23 == '23');
console.log('=== does coercion!', 23 === '23');


/***********************************************************************
* CODING CHALLENGE 2
*/

var scroeJohn, scoreMary ,scoreMike;

scroeJohn = ( 89 + 120 + 140) / 3; 
scoreMary = (116 +  94 + 223) / 3;
scoreMike = ( 97 + 134 + 105) / 3;

console.log(scroeJohn, scoreMary, scoreMike);

if (scroeJohn > scoreMary && scroeJohn > scoreMike){
    console.log('John\'s team wins with ' + scroeJohn  + ' points');
} else if (scoreMary > scroeJohn && scoreMary > scoreMike){
    console.log('Mary\'s team win with ' + scoreMary + ' points');
} else if (scoreMike > scroeJohn && scoreMike > scoreMary){
    console.log('Mike\'s team win with ' + scoreMike + ' points');
} else {
    console.log('There was a draw!')
}



