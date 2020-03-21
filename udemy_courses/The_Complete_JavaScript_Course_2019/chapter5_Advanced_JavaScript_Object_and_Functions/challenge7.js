/*
questions:

A. What is the first color of the rainbow?
0.Blue
1.Red
2.Yellow 

B. How many eyes does a spider have?
0.Eight
1.Six
2.Two 

C. Which is the smallest island?
0.Malta
1.Gozo
2.Commino

*/

// part.1_______________________________________________________________


var Question = function(question, choses, answer) {
    this.question = question;
    this.choses = choses;
    this.answer = answer;
    this.check = function(input){
        if (input !== 'exit') {
        console.log(input == this.answer ? 
            'correct answer, well done!' : 'wrong answer, try again!')
        }
    }
}

// part.2_______________________________________________________________

var questionA, questionB, questionC;

questionA = new Question(
    'What is the first color of the rainbow?',
    ['Blue', 'Red', 'Yellow'],
    2
)


questionB = new Question(
    'How many eyes does a spider have?',
    ['Eight', 'Six', 'Two'],
    1
)

questionC = new Question(
    'Which is the smallest island?',
    ['Malta', 'Gozo', 'Commino'],
    3
)

// testing questionA:
// console.log(questionA);
// console.log(questionB);
// console.log(questionC);
// questionA.check(1);
// questionB.check(1);
// questionC.check(1);



// part.3_______________________________________________________________

var myQuestions = [
    questionA,
    questionB,
    questionC
]



// prompt('Hello');

// part.4_______________________________________________________________


function engine(iterator) {

    while (true) {
        var next = Math.floor(Math.random()*3)
        do {
        var currentQ = iterator[next]
        console.log(currentQ['question']);
        for (var i = 0; i < currentQ['choses'].length; i++) {
            console.log(i+1, currentQ['choses'][i])
        }
        var input = prompt('Please select the correct answer (just type the number).')
                currentQ.check(input);
        }
        while (input != currentQ['answer'] && input !== 'exit') 
        if(input === 'exit') {break}

    }
}

engine(myQuestions);