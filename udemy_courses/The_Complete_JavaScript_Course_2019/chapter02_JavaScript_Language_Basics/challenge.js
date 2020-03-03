var  massJohn, heightJohn, massMark, heightMark;

//1
massJohn = 70;      // kg
heightJohn = 1.7;   // m
massMark = 68;      // kg
heightMark = 1.67;  // m

// 2
// BMI = mass /height**2

var bmiJohn, bmiMark;
bmiJohn = massJohn/(heightJohn**2);
bmiMark = massMark/(heightMark**2);

// 3

var bmiMarkHigherJohn = bmiJohn > bmiMark

// 4 

console.log(bmiJohn, bmiMark)
console.log('Is Mark\'s BMI higher than John\'s? ' + bmiMarkHigherJohn)