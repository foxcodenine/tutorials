
function myLine(mark){
    console.log((mark),'______________________________________________')
}
// _____________________________________________________________________
var john = {
    name:'John', 
    yearOfBirth: 1990,
    job: 'teacher'
};

myLine('A')// __________________________________________________e________

// Function constructor

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

myLine('B')// __________________________________________________________

// Prototype property

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
console.log(myCar);
myCar.licenseFee(2020);
console.log(myCar.type);


// this verifies that the instance myCar has the same prototype of its
// constructor:
console.log(myCar.__proto__ == Car.prototype)

// inside each object there is the <prototype Object>: because every
// object inherits from the Object Object.

myLine('C')// __________________________________________________________
// some methods & operators you inherits from Object are:

// .hasOwnProperty
console.log(myCar.hasOwnProperty('model'));
console.log(myCar.hasOwnProperty('type'));

// Operators  typeof & instanceof
console.log(myCar instanceof Car);
console.log(typeof myCar );



myLine('D')// __________________________________________________________

// All Arrays inherits form the <prototype Array>

var x = [2, 4, 6, 8];
console.info(x);

console.log(x.length);
console.log(x.reverse());
console.log(x.toString());

myLine('E')// __________________________________________________________

// Object.create:

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


var jane = Object.create(personProto, 
    {
        name : { value : 'Jane' },
        yearOfBirth : { value : 1991 },
        job : { value : 'pod' }
    });

console.log(jane);
jane.calculayeAge();
console.log(jane);


myLine('F')// __________________________________________________________


// Primitives vs objects 

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

myLine('F')// __________________________________________________________
