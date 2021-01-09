///////////////////////////////////////
// Lecture: Hoisting

// console.log(date); // <- this will give an error.
console.log(year);    // <- this will give : undefined.

var year = 1965;

console.log(year);    // <- this will log the variable.


console.log(calculateAge(1984)); // <- defined function can be written after.

function calculateAge(year) {
    console.log(2020-year);
}

// // function experssion need to be written ahead of log 

// console.log(yearToRetirment(1984)); // <- this will produse an error

var yearToRetirment = function(year) {
    console.log(65 - (2020 - year));
}

yearToRetirment(1984);

// // variables 

console.log(age);

var age = 23; 

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third()
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
// }

// in the above code the third function isn't able to access var c and b

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()

        function third() {
            var d = 'John';
            console.log(a + b + c + d);
        }
    }
}




///////////////////////////////////////
// Lecture: The this keyword


console.log(this) 

calculateAge(1984)

function calculateAge(year) {
    console.log(2020 - year)
    console.log(this)
}


var chris = {
    firstName: 'Christopher',
    lastName: 'Farrugia', 
    age: 36,
    dOB: '12-Aug-1990',
    myFunc: function() {
        console.log(this);       // <- this Point to the object
        console.log('Hi I am',this.firstName + '!')
        /*
        function innerFunction() {
            console.log(this);  // <- this Point to the window object
        }
        innerFunction();
        */
    }
}

chris.myFunc();



var mike = {
    firstName: 'Micheal', 
    lastName: 'Cassar',
    age: 32
}

// function borrowing
mike.myFunc = chris.myFunc

mike.myFunc();