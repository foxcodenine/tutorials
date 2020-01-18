var questionNum;
var score;

window.onload=function(){

    questionNum = 0;
    score = 0;

    // Events
    for(x = 0; x < 4; x++){

        var answerIdDiv = "answer" + x;
        this.document.getElementById(answerIdDiv).addEventListener('click', answerClicked, false);
    };

    displayQuestion(this.questionNum);
};

// __________________________________

function answerClicked(event){

    var answerClicked = event.target.id;
    var answerNumber = answerClicked.charAt(answerClicked.length-1);
    if (answerNumber == correctAnswerIndexes[questionNum]){
        
        correctAnswer();
    } else{
        wrongAnswer();
    };   
};
// __________________________________
function correctAnswer(){

    console.log("Correct");
    gameSound.src = "Correct.mp3";
    gameSound.play();
    score++;
    document.getElementById("score").innerHTML= "<h1>Score:" + score + "</h1>"    
    
    if(questionNum < 4){

        questionNum++;
        displayQuestion(questionNum);
    } else {
        gameOver();
    }
};
// __________________________________ 
function wrongAnswer(){

    console.log("Wrong");
    gameSound.src = "Wrong.mp3";
    gameSound.play();
    document.getElementById("score").innerHTML= "<h1>Score:" + score + "</h1>";
    if(questionNum < 4){

        questionNum++;
        displayQuestion(questionNum);
    } 
    else {
        gameOver();
    }
};
// _________________________________
function displayQuestion(questionNum){

    document.getElementById('question').innerHTML= "<h1>" + question[questionNum] + "</h1>"
    var answerset = ""
    switch(questionNum){

        case 0:
            answerset = questionOneAnswers;
            break;
        case 1:
            answerset = questionTwoAnswers;
            break;
        case 2:
            answerset = questionThreeAnswers;
            break;
        case 3:
            answerset = questionFourAnswers;
            break;
        case 4:
            answerset = questionFiveAnswers
    }
    displayAnswers(answerset)
}
// __________________________________
function gameOver()
{
    document.getElementById("question").innerHTML = "<h1>Score: " + score + "</h1><h3>Thanks for Playing!</h3>";
    for(var x = 0; x < 4; x++){

        var answerIdDiv = "answer" + x;
        document.getElementById(answerIdDiv).style.display = "none";
    }
    document.getElementById('score').innerHTML = "";
};

function displayAnswers(answerset){

    for(var x = 0; x < 4; x++){
        var answerIdDiv = "answer" + x 
        document.getElementById(answerIdDiv).innerHTML = answerset[x];
    }
}
