// part.1,7_____________________________________________________________
(function (){
var score = 0
var Question = function(question, choses, answer) {
    this.question = question;
    this.choses = choses;
    this.answer = answer;
    this.check = function(input){
        if (input !== 'exit') {
        console.log(input == this.answer ? 
            'correct answer, well done!' && score++ : 'wrong answer, try again!',
            )
    this.result = function() {
        console.log(`\n Your current score is: ${score}`,
            '\n_______________________________________________________')
    }
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

questionD = new Question(
    'In which ocean did the famous Titanic sink in 1912?',
    ['Pasific', 'Atlantic', 'Mediterranean'],
    2
)

questionE = new Question(
    'What is the next number in the following sequence– 7, 14, 21, 28?',
    [39, 36, 35],
    3
)

questionF = new Question(
    'Which planet is the smallest?',
    ['Neptune', 'Mars', 'Mercury'],
    3
)

questionG = new Question(
    'How many straight edges does a cube havfre?',
    ['Twelve', 'Sixteen', 'Eight'],
    1
)

questionH = new Question(
    ' What does the term ‘Piano’ mean?',
    ['Musical Instrument', 'To be played softly', 'To walk slowly'],
    2
)

// testing questionA:
// console.log(questionA);;
// questionA.check(1);

// part.3_______________________________________________________________

var myQuestions = [
    questionA,
    questionB,
    questionC,
    questionD,
    questionE,
    questionF,
    questionG,
    questionH
]

// part.4,5,6___________________________________________________________

function engine(iterator) {

    while (true) {
        var next = Math.floor(Math.random() * myQuestions.length);
        do {
            var currentQ = iterator[next]
            console.log(currentQ['question']);
            for (var i = 0; i < currentQ['choses'].length; i++) {
                console.log(i+1, currentQ['choses'][i]);
            }       
            var input = prompt(
`Please select the correct answer (just type the number). 
Or type exit to quit.`
            );
            currentQ.check(input);
            currentQ.result();
        }
        while (input != currentQ['answer'] && input !== 'exit'); 
        if(input === 'exit') {break};
    }
}
engine(myQuestions);

})();