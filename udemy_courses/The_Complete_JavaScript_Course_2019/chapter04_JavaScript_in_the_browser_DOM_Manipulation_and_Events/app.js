/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0; 


//______________________________________________________________________

/* the following has been moved in the roll dice EventListener (A) */

// dice = Math.floor(Math.random() * 6) + 1;

// console.log(dice);


// // the document object will give us access to the DOM:
// document.querySelector("#current-" + activePlayer).textContent = dice;  // <- we call this a setter
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

//______________________________________________________________________

/* just for explanation */

// to read only elements from a webpage:

var x = document.querySelector("#score-0").textContent;  // <- we call this a get
console.log(x);
//______________________________________________________________________



function restGame() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    // to change the css of an element in JS:
    document.querySelector(".dice").style.display = 'none';

    // selecting an item by id
    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';    
    
    document.querySelector('.player-1-panel').classList.remove('active', 'winner')
    document.querySelector('.player-0-panel').classList.remove('active', 'winner')
    document.querySelector('.player-0-panel').classList.add('active')

    document.querySelector("#name-0").innerHTML = 'Player 1'
    document.querySelector("#name-1").innerHTML = 'Player 2'

}
restGame();

//______________________________________________________________________
// (A) add functionality when the roll dice is clicked

document.querySelector(".btn-roll").addEventListener('click', function(){

    // 1. Random number from 1 to 6 
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display result

    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = 'block';

    diceDOM.src = "images/dice-" + dice + ".png";

    // 3. Update the roundScore if the result is not a 1

    var currentDOM = document.getElementById("current-" + activePlayer);
    currentDOM.textContent = ( dice == 1) ? 0 : Number(currentDOM.textContent) + dice;

    if (dice !== 1) {
        roundScore += dice;
        console.log(roundScore);
        document.getElementById("current-"+activePlayer).textContent = roundScore;
    }
    else {    
        // Next Player    
        nextPlayer();       
    }    
});


//______________________________________________________________________
// (B) add functionality selecting Hold


document.querySelector(".btn-hold").addEventListener("click", function(){

    // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];
    

    // Check if player won the game 
    if (scores[activePlayer] >= 10) {
        document.querySelector("#name-"+activePlayer).innerHTML = "<b>Winner!</b>";
        document.querySelector(".dice").style.display = 'none'
        document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner')
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
           
    // Next Player     
    } else {
        nextPlayer(); 
    }    
});

//______________________________________________________________________
// (C) add functionality to NEW GAME button

document.querySelector('.btn-new').addEventListener('click', restGame);


//______________________________________________________________________
function nextPlayer() {
    roundScore = 0;             
    // document.querySelector(".player-1-panel").classList.add('active');
    // document.querySelector(".player-0-panel").classList.remove('active');

    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';

    document.querySelector(".player-1-panel").classList.toggle('active');
    document.querySelector(".player-0-panel").classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 

    // document.querySelector(".dice").style.display = "none";
}