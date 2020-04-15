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