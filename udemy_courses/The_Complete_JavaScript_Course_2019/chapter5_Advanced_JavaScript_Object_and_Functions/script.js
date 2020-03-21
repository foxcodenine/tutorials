
function myLine(mark){
    console.log((mark),'______________________________________________')
}
// _____________________________________________________________________
var john = {
    name:'John', 
    yearOfBirth: 1990,
    job: 'teacher'
};

myLine('A');// _________________________________________________________

// Lecture: Function constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculayeAge = function(year) {
        console.log(year - this.yearOfBirth);
    }
} 



var chris = new Person('Chris', 1984, 'web_developer');

console.log(chris);
console.log(Person);

chris.calculayeAge(2020);

var jane = new Person('Jane', 1969, 'designer'); 
var mark = new Person('Mark', 1948, 'retired'); 

myLine('B');// _________________________________________________________

// Lecture: Prototype method and property

var Car = function(model, mark, color, engine, carYear) {
    this.model = model;
    this.mark = mark;
    this.color = color;
    this.engine = engine;
    this.carYear = carYear;
}

Car.prototype.licenseFee = function(calandarYear) {
    console.log('€' + ((calandarYear - this.carYear)*20));
}

Car.prototype.type = 'four_wheeler';




var myCar = new Car('Vitz','Toyots', 'Gray', '10v', 2006);
console.log(Car);
console.log(myCar);
myCar.licenseFee(2020);
console.log(myCar.type);


// this verifies that the instance myCar has the same prototype of its
// constructor:
console.log(myCar.__proto__ == Car.prototype)

// inside each object there is the <prototype Object>: because every
// object inherits from the Object Object.

myLine('C');// _________________________________________________________
// some methods & operators you inherits from Object are:

// .hasOwnProperty
console.log(myCar.hasOwnProperty('model'));
console.log(myCar.hasOwnProperty('type')); // 'type' is a property of 
                                           // Car.prototype
console.log(Car.prototype.hasOwnProperty('type'))

// Operators  typeof & instanceof
console.log(myCar instanceof Car);
console.log(typeof myCar );



myLine('D');// _________________________________________________________

// All Arrays inherits form the <prototype Array>

var x = [2, 4, 6, 8];
console.info(x);

// examples of methods & properties inherited from array object
console.log(x.length);
console.log(x.reverse());
console.log(x.toString());

myLine('E');// _________________________________________________________

// Lecture: Object.create:
// its is an other way to inherits from another object

var personProto = {
    calculayeAge: function() {
        this.age = 2020 - this.yearOfBirth;
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1980;
john.job = 'teacher';


john.calculayeAge();
console.log(john);

// you can also do this:
var jane = Object.create(personProto, 
    {
        name : { value : 'Jane' },
        yearOfBirth : { value : 1991 },
        job : { value : 'pod' }
    });

console.log(jane);
jane.calculayeAge();
console.log(jane);


myLine('F');// _________________________________________________________


// Lecture: Primitives vs objects 

/*
Primitives: numbers, string, booleans, undefined and null

Objects: everything else.

Variables containig primitives hold that data inside of the variable
itself.

While var contain Objects cantain a referance to the place in memory
*/

// Primitive
var a = 23;
var b = a;
a = 60;
console.log(a, b); // <- Shallow copy

// Object
var objA = {
    name : 'Sarah',
    age : 41
};

var objB = objA;
objA.age = 24;
console.log(objA.age, objB.age); // <- deep copy


// Functions 
var age = 27;
var obj = {
    name :'Jason', 
    city: 'Lisbon'
};

function change(a, b) {
    a = 17;
    b.city = 'Valletta'
}

change(age,  obj);
console.log(age);  // <-- Primitive hasn't change
console.log(obj);  // <-- Object has been updated

myLine('F');// _________________________________________________________


/*
Lecture: First_Class_Functions

A function ia an instance of the Object type;
A function behaves like any other object;
We can store functions in a variable;
We can pass a function as an argument to another function;
We can return a function from a function.
*/


// Function_exepting_functions:
var years = [1955, 1984, 1986, 1990, 2010]

function ageCalculator(yearOfBirth) {
    var currentYear = 2020;
    return currentYear - yearOfBirth;
}

console.log(ageCalculator(2000)) // teating func ageCalculator

function myMapper(func, iter) {
    iterReturn = [];
    for ( var i = 0; i < iter.length; i++) {
        iterReturn[i] = func(iter[i])
        // /*or*/ iterReturn.push(func(iter[i]))
    }
    return iterReturn
}

var ages = myMapper(ageCalculator, years);
console.log(ages);



function isFullAge(age) {
    return age >= 18;
}


var fullAges= myMapper(isFullAge, ages);
console.log(fullAges);



function maxHearRate(age) {
    if (age >= 18 && age <= 88){
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
}

var maxHearRates = myMapper(maxHearRate, ages);
console.log(maxHearRates);

myLine('G');// _________________________________________________________

//  Lecture: Functions return functions:

function interviewQuestion(job) {
    job = job.toLowerCase();
    if (job === 'designer') {
        return function(name) {
            console.log(name + ' can you explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?'); 
        }
    } else {
        return function(name) {
            console.log('Hi ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var generalQuestion = interviewQuestion('POD')
teacherQuestion('Vanesa');
designerQuestion('James');
generalQuestion('Dorothy')

interviewQuestion('Designer')('Mark');


myLine('H');// _________________________________________________________

// Lecture: Immediately Invoked Function Expression - IIFE 

// (IIFE) is a JavaScript function that runs as soon as it is defined.
// This prevents accessing variables within the IIFE idiom as well as
// polluting the global scope.

// (function() { } )() 

function game() {
    var score = Math.random() * 10 
    console.log(score >= 5);
}

game();


// howerver you can use an IIFE instade:

(
    function() {
        var score = Math.random() * 10;
        console.log(score >= 5);
    }
)();


// you can also input parameters in the IIFE
(
    function(goodluck=0) {
        var score = Math.random() * 10;
        console.log(score >= 5 - goodluck);
    }
)(4);


myLine('I');// _________________________________________________________
// Lecture: Closures

function retirement(retirementAge) {
    var a = ' years left until retirment.';

    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}
var retirmentMT = retirement(61);
var retirmentUK = retirement(65);
var retirmentPL = retirement(45);

var chrisYear = 1984;

retirmentMT(chrisYear);
retirmentUK(chrisYear);
retirmentPL(chrisYear);

retirement(65)(1984);


myLine('J');// _________________________________________________________


function interviewQuestion2(job) {
    job = job.toLowerCase();

    return function (name){    
        if (job === 'web developer') {
            console.log(name + ' can you explain what UX design is?');            
        } else if (job === 'data scientist') {     
            console.log('What framworks do you teach, ' + name + '?');             
        } else {            
            console.log('Hi ' + name + ', what does a '+ job +' do?');
        }
    }
}

var teacherQ = interviewQuestion2('pythista');
teacherQ('Joelle');

myLine('K');// _________________________________________________________
// Lecture: Bind, call and apply

// Call_method______________________________

var john = {
    name: 'John',
    age: 31,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + 
            ' ladies and gentlemen! My name is ' + this.name + 
            ', I am a ' + this.job + ' and I am ' + this.age + 
            ' years old.')
        } else {
            console.log('Hey! what\'s up? I\'m ' + this.name + 
            ', I am a ' + this.job + ' and I am ' + this.age +
            ' years old. Have a nice ' + timeOfDay + '.')
        }
    }
}

john.presentation('frendly','Evening')

// method_borrowing__________________________

var elaine = {
    name: 'Elaine',
    job: 'accounter',
    age: 42
}

john.presentation.call(elaine, 'formal', 'morning');

myLine('L');// _________________________________________________________

// apply_method______________________________

// john.presentation.apply(emily, ['friendly', 'afternoon']);



// bind_method______________________________

var johnFormal = john.presentation.bind(john, 'formal');
johnFormal('evening');
johnFormal('night');

var elaineUnformal = john.presentation.bind(elaine, 'frendly');
elaineUnformal('morning')


myLine('M');// _________________________________________________________



// getting presentation method from john to emily
var emily = {
    name: 'Emily',
    age: '30', 
    job: 'painter', 
    presentation: john.presentation
}

emily.presentation( 'formal','evening');




// getting presentation method from john to chris
var kris = {}
kris.name = 'Kris';
kris.age = 35;
kris.job = 'designer';
kris.presentation = john.presentation;

kris.presentation('frendly', 'morning')

console.log(john)
console.log(emily)
console.log(kris)

myLine('N');// _________________________________________________________
// using the bind method


function myMapperFunc(_func, _array) {
    newArray = [];

    for (var i = 0; i < _array.length; i++) {
        newArray[i] = _func(_array[i])
    }
    return newArray
}


var myFamillyAges = [65, 35, 33, 5, 4];


function isFullAge2(limit, age){
    return age >= limit;
}

// testing:
var test = console.log(isFullAge2(20, 18))

// since isFullAge2 take 2 argument but myMapperFunc takes to we need to
// bind 1 argument

var maltaFullAge = isFullAge2.bind(this, 18);
// testing
console.log(maltaFullAge(16));


console.log(myMapperFunc(maltaFullAge, myFamillyAges));

// or we can do this:

console.log(myMapperFunc(
    isFullAge2.bind(this, 18), // <-- 1st argument: function(limit)
    myFamillyAges)             // <-- 2nd argument: array
);