'use strict';

// ---------------------------------------------------------------------

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl   = document.querySelector('.dice');

const btnNew    = document.querySelector('.btn--new');
const btnRoll   = document.querySelector('.btn--roll');
const btnHold   = document.querySelector('.btn--hold');



// ---------------------------------------------------------------------

diceEl.classList.add('hidden');

let score, currentScore, activePlayer, playing;
reset();

// ---------------------------------------------------------------------


// Rolling dice functionality
btnRoll.addEventListener('click', () => {

    if (!playing) return;

    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check if dice rolled 1
    if (dice !== 1) {
        // a. Add dice to current score
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

    } else {
        // b. Switch user
        switchPlayer();
    }
});

// ---------------------------------------------------------------------

// Rolling dice functionality
btnHold.addEventListener('click', () => {

    if (!playing) return;

    // 1. Add current score to active player's score and reset current score

    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =  score[activePlayer];

    // 2. Check if player's scoe is >= 100

    if (score[activePlayer] >= 20) {
        // a. Finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false;
        diceEl.classList.add('hidden');

    } else {
        // b. Switch to the next player
        switchPlayer();
    }
});



// ---------------------------------------------------------------------


btnNew.addEventListener('click', () => {

    current0El.textContent = 0;
    current1El.textContent = 0;

    let winner = document.querySelector('.player--winner');
    if (winner) winner.classList.remove('player--winner');
    
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');

    reset();

} );

// ---------------------------------------------------------------------

function reset() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
}

// ---------------------------------------------------------------------

function switchPlayer() {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// ---------------------------------------------------------------------