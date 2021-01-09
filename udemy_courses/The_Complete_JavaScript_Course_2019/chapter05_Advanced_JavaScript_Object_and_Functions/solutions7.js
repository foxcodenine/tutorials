(function(){

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    // _____________________________________________________________________

    Question.prototype.displayQuestion= function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, func) {
        var sc = 0;

        if (ans == this.correct) {
            console.log('Correct answer!');
            sc = func(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = func(false);
        }
        
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is ' + `${score}`)
        console.log('___________________________________________________')
    }

    // _____________________________________________________________________

    var q1 = new Question(`Is JavaScript the coolest programing language in 
    the world?`,                                     
                                                ['Yes', 'No'],
                                                0);
                                                
    var q2 = new Question(`What is the name of this course's teacher?`,
                                                ['John',
                                                'Micheal',
                                                'Jonas'],
                                                2);

    var q3 = new Question(`What does best describe coding?`,
                                                ['Boring', 
                                                'Hard', 'Fun',
                                                'Tediuos'],
                                                2);

    // _____________________________________________________________________

    // the function score purpose is to create a closure to store the var sc in
    // its local scope so the keepScore function always have access to it

    function score() {
        var sc = 0;
        return function(correct){
            if (correct){
                sc++;
            }
            return sc; 
        }
    }

    var keepScore = score();


    // _____________________________________________________________________

    var questions = [q1, q2, q3];

    

    function newQuestion(){

        var n =Math.floor(Math.random() * questions.length); 

        questions[n].displayQuestion();
        

        var answer = prompt('Please select the corrent answer.');
        

        if (answer !== 'exit'){

            questions[n].checkAnswer(parseInt(answer), keepScore);
            newQuestion();
        }

        
        
    }

    newQuestion();

})();