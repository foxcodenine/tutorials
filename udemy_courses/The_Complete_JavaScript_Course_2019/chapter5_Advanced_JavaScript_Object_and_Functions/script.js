// Function constructor

var john = {
    name:'John', 
    yearOfBirth: 1990,
    job: 'teacher'
};


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

