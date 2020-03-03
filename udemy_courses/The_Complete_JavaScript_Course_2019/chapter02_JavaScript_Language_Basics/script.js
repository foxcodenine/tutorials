/*********************************
 * Variables and data types
 */ 
console.log('Hello World!');

var firstName = 'John'
var lastName = 'Smith'; 

console.log(firstName, lastName);

var age = 28;
var fullAge =true;

console.log(fullAge);

var job;
console.log(job);
var town = null;
console.log(town);

var johnMark = 'John and Mark';

/*********************************
 * Variables mutation and type coercion
 */ 


 var firstName = 'John'
 var age = 28;

 // Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'teacher'
 isMarried = false

 console.log(firstName + ' is a ' + age + ' year old ' + job + 
                                    '. Is he married? ' + isMarried);

// Variable mutation 
age = 'twenty eight'
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + 
'. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?') 
console.log(firstName + ' ' + lastName)

/*********************************
 * Basic operators
 */ 

 // Math opertos
var now, yaerJohn, yearChris;
ageJohn = 28;
ageChris = 35;
now = 2019

// Math operators 
yearJohn = now - ageJohn;
yearChris = now - ageChris; 

console.log(yearChris);


console.log(now + 2);
console.log(now - 2);
console.log(now * 10);
console.log(now / 10);
now --;
console.log(now);
now ++; 
console.log(now);

console.log(5 ** 2);
console.log(5 % 3);

// logical operators
// <, >, ==, !=, <= and >=

var johnOlder = ageJohn > ageChris;
console.log(johnOlder);

// typeof operator 

console.log(typeof johnOlder);
console.log(typeof ageChris);
console.log(typeof 'Mark is olded then Chris!')
var x;
var y = null;
console.log(typeof x);
console.log(typeof y);

/*********************************
 * Operator precedence
 */ 

 var now = 2020; 
 var yearChris = 1984; 
 var fullAge = 36;
 var ageChris = 35
 
// Multiple operators
 var isFullAge = ageChris >= now - yearChris;
 console.log(isFullAge);

 // Grouping
 var ageMark = 25; 
 var averageAge = (ageChris + ageMark) / 2;
 console.log(averageAge);

//  Multiple assignments
var x, y 
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators 
var n = 10; 
n *= 2;
console.log(n);

n += 2;
console.log(n);

n -= 2;
console.log(n);

n /= 2;
console.log(n);

/*********************************
 * If / else statments
 */ 

var firstName = 'John';
var civilStatus = 'Single'; 

if (civilStatus === 'married') {
    console.log(firstName + ' is married!')
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}




var firstName = 'Joe'
var isMarried = true

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is single!')
}





var massMark = 78; // kg 
var heightMark = 1.69; // meters

var massJohn = 92; // kg 
var heightJohn = 1.95; // meters

var MBIMark = massMark / (heightMark * heightMark)
var MBIJohn = massJohn / (heightJohn * heightJohn)

if (MBIMark > MBIJohn){
    console.log('Mark\'s BMI is higher than John\'s BMI. ');
} else {
    console.log('John\'s BMI is higher than Mark\'s BMI. ');
}

/*********************************
 * Boolean logic 
 */ 


var firstName = 'Dorothy'
var age = 26

if (age < 13){
    console.log(firstName + ' is a girl!');
} else if (age >= 13 && age < 20){
    console.log(firstName + ' is a teenageer!');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young women!');
} else {
    console.log(firstName + ' is a woman!');
}