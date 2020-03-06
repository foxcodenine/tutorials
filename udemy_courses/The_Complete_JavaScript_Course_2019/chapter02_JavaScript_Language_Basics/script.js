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

// /***********************************************************************
//  * Boolean logic 
//  */ 


// var firstName = 'Dorothy';
// var age = 26;

// if (age < 13){
//     console.log(firstName + ' is a girl!');
// } else if (age >= 13 && age < 20){
//     console.log(firstName + ' is a teenageer!');
// } else if (age >= 20 && age < 30){
//     console.log(firstName + ' is a young women!');
// } else {
//     console.log(firstName + ' is a woman!');
// };

// /***********************************************************************
//  * The Ternery Operator and Switch Statements
//  */ 


// // Ternery Operator
// var firstName = 'Jamie';
// var age = 18;

// age >=18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink)


// // The above is use instade of this:
// if (age >= 18 ) {
//     var drink = 'beer'
// } else {
//     var drink = 'juice'
// }
// console.log(drink)



// // Switch Statements
// var job = 'instractor'

// switch (job) {
//     case 'teacher':
//     case 'instractor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + 'desigms beautifull websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }


// var firstName = 'Dorothy';
// var age = 30;

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a girl!');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenageer!');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young women!');
//         break;
//     default:
//         console.log(firstName + ' is a woman!');
// }

// /***********************************************************************
//  * Truthy and Falsy values and equality operators
//  */ 

// // falsy values: undefined, null, 0, '', NaN
// // truthy values: NOT falsy values 

// var higher; 

// height = 0;

// if (height || height === 0) {
//     console.log('Variable is defined.');
// } else {
//     console.log('Variable has NOT been defined');
// }


// // Equality operators 
// console.log('== does coercion!', 23 == '23');
// console.log('=== does coercion!', 23 === '23');


// /***********************************************************************
// * CODING CHALLENGE 2
// */

// var scroeJohn, scoreMary ,scoreMike;

// scroeJohn = ( 89 + 120 + 140) / 3; 
// scoreMary = (116 +  94 + 223) / 3;
// scoreMike = ( 97 + 134 + 105) / 3;

// console.log(scroeJohn, scoreMary, scoreMike);

// if (scroeJohn > scoreMary && scroeJohn > scoreMike){
//     console.log('John\'s team wins with ' + scroeJohn  + ' points');
// } else if (scoreMary > scroeJohn && scoreMary > scoreMike){
//     console.log('Mary\'s team win with ' + scoreMary + ' points');
// } else if (scoreMike > scroeJohn && scoreMike > scoreMary){
//     console.log('Mike\'s team win with ' + scoreMike + ' points');
// } else {
//     console.log('There was a draw!');
// }


/***********************************************************************
* Functions 
*/

// function calculateAge(birthYear){
//     return 2020 - birthYear
// }

// var ageChris = calculateAge(1984);
// var ageRobert = calculateAge(1974);
// var ageLara = calculateAge(1988);

// console.log(ageChris, ageRobert, ageLara);




// function yearsUntilRetirement(birthYear, firstName){
//     var age = calculateAge(birthYear);
//     var retirement = 65 - age;
    
//     if (retirement > 0){
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' has already retired!');
//     }
// }

// yearsUntilRetirement(1990, 'Dorothy');
// yearsUntilRetirement(1988, 'Joelle');
// yearsUntilRetirement(1986, 'Mandy');
// yearsUntilRetirement(1952, 'Dad');

// /***********************************************************************
// * Functions Statements and Expressions
// */

// // Function declaration 
// function whatDoYouDo(job, firstName){
//     return firstName + ' is a ' + job
// }


// // Function expression 
// var whatDoYouDo = function(job, firstName){
//     switch (job){
//         case 'teacher':
//             return firstName + ' teaches kids how to code!';
//         case 'driver':
//             return firstName + ' drive a limo down town!';
//         case 'designer':
//             return firstName + ' create outstanding websites!';
//         default:
//             return firstName + ' is lazy stay at home mom!';        
//     }
// }

// console.log(whatDoYouDo('designer', 'Chris'));
// console.log(whatDoYouDo('unemployed', 'Maria'));
// console.log(whatDoYouDo('driver', 'Jane'));


// /***********************************************************************
// * Arrays
// */

// // Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names[0]);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Dorothy';
// names[4] = 'Sarah';
// names[names.length] = 'Lara';
// console.log(names);

// // Different data types 
// var  john = ['John', 'Cassar', 1990, 'teacher', false];




// john.push('blue', 'blue'); // Append to array
// john.unshift('Mr.'); // Add paramiter at pos 0 of array
// console.log(john);

// john.pop() // Remove last element from array

// var eyeColor = john.pop() // you can pass the pop value to a variable

// console.log(john);

// console.log(eyeColor);

// john.shift(); // remove first element from array

// console.log(john.indexOf(1990)); // return index
// console.log(john.indexOf(23));   // if element not in array return -1


// console.log(
//     john.indexOf('designer') === -1 ? 'John is NOT a designer' : 
//                                                     'John is a designer'
// );


// /***********************************************************************
// * CODING CHALLENGE 3
// */

// function tipCalculator(bill){
//     var percentage;
//     if (bill < 50) {
//         percentage = 0.2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//     }
//     else {
//         percentage = 0.1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];


// var finalValues =  [bills[0] + tips[0],
//                     bills[1] + tips[1],
//                     bills[2] + tips[2]]   

// console.log(bills); 
// console.log(tips); 
// console.log(finalValues); 


// /***********************************************************************
// * Object and properties
// */

// // Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith', 
//     birthYear: 1990, 
//     family: ['Jane', 'Mark', 'Bob', 'Emily'], 
//     job: 'teacher'
// }; 

// console.log(john);
// console.log(john.lastName);
// console.log(john['family']);
// console.log(john['family'][0]);

// var bY = 'birthYear';
// console.log(john[bY]); 

// john.job = 'pythonist'
// john['isMarried'] = true
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.lastName = 'Millur';
// jane.birthYear = 1988; 
// console.log(jane);




// /***********************************************************************
// * Object and methods
// */

// var john = {
//     firstName: 'John',
//     lastName: 'Smith', 
//     birthYear: 1990, 
//     family: ['Jane', 'Mark', 'Bob', 'Emily'], 
//     job: 'teacher', 
//     isMarried: false,
//     calAge: function(currentYear){
//         return currentYear - this.birthYear;
//     }
// }; 

// console.log(john.calAge(2020));


// john.age = john.calAge()
// console.log(john);



// var chris = {
//     firstName: 'Chris', 
//     lastName: 'Farrugia',
//     birthYear: '1984',
//     family: {dad: 'Alfred', sister: 'Mandy', niece1: 'Leah', niece2: 'Charlotte'},
//     calAge: function(currentYear){
//         this.age = currentYear-this.birthYear
//     }
// };


// console.log(chris);
// chris.calAge(2020)


/***********************************************************************
* Loops and iteration
*/

// for loop
for (var i = 0; i < 10; i++){
    console.log(i);
}


console.log('') /**************************************************** */


// i = 0, 0 < 10 =true, therefore log to console i, add 1 to i;
// i = 1, 1 < 10 =true, therefore log to console i, add 1 to i;
// .....
// i = 1, 10 < 10 =false, exit loop;



for (var i = 2; i <= 20; i+=2){
    console.log(i);
}

console.log('') /**************************************************** */


var name='Christopher'
for(var i=0; i < name.length; i++){
    console.log(name[i]);
}

console.log('') /**************************************************** */


var  chris = [
    'Chris', 'Farrugia', 1984, 'Maltese', 'Designer']


for (var i=0; i < chris.length; i++){
    console.log(chris[i]);
}

console.log('') /**************************************************** */

// while loop 
var i = 0;
while(i < chris.length) {
    console.log(chris[i]);
    i++;
}

console.log('') /**************************************************** */

//  Continue and Break statements

//  continue statements:
var dorothy = ['Dorothy', 'Cassar', 30, 'female', 1990, 'Podiatrist']

for (var i = 0; i < dorothy.length; i++){
    if (typeof dorothy[i] !==  'string') continue;
    console.log(dorothy[i]);
}

console.log('') /**************************************************** */

// break statments
var skills = [
    'Python',
    'JavaScript',
    'HTML', 
    'SQLite',
    'CSS', 
    'AWS', 
    'Bash', 
    'CMD', 
    'MYSQL', 
    'PowerShell'
];

for (var  i = 0; i < skills.length; i++){
    if (skills[i] === 'HTML') break;
    console.log(skills[i]);
}

console.log('') /**************************************************** */

// Looping backwards
for (var i = skills.length; i--; i >= 0){
    console.log(skills[i])
}