'use strict';

/**
 * https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/guide_credentials_environment.html
 * https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/s3-examples-configuring-a-bucket.html
 * https://docs.aws.amazon.com/sdk-for-php/v3/developer-guide/s3-examples.html
 */

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let currentScore = 20;

const message = document.querySelector('.message');
const check   = document.querySelector('.check');
const number  = document.querySelector('.number');
const score   = document.querySelector('.score');



// -----------------------------------------------------------------------------

check.addEventListener('click', () => {

    const guess = document.querySelector('.guess');
    const guessValue = Number(guess.value);

    // --- No input
    if (!guessValue ) {
        message.textContent = '🐍 No number!';

    // --- Correct
    } else if (guessValue === secretNumber) {
        message.textContent = '🥳 Correct Number!';

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width= '30rem';
        number.textContent = secretNumber;

    // --- Too high
    } else if (guessValue > secretNumber) {

        currentScore -= 2;
        if (currentScore > 0) {
            message.textContent = '🐔 Too high!';
            score.textContent = currentScore;
        } else {
            message.textContent = '🐌 You lost the game!';
            score.textContent = 0;
        }

    // --- Too low
    } else if (guessValue < secretNumber) {

        currentScore -= 2;
        if (currentScore > 0) {
            message.textContent = '🐬 Too low!';
            score.textContent = currentScore;
        } else {
            message.textContent = '🐌 You lost the game!';
            score.textContent = 0;
        }
    }
});

// -----------------------------------------------------------------------------


const again   = document.querySelector('.again');



again.addEventListener('click', () => {
    currentScore = 20;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    message.textContent = 'Start guessing...'
    score .textContent  = 20;
    number.textContent  = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width= '15rem';
    document.querySelector('.guess').value = '';
});

















// -----------------------------------------------------------------------------
