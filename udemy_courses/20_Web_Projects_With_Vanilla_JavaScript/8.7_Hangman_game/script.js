const elem = {
    wordEL : document.getElementById('word'),
    wrongLettersEL : document.getElementById('wrong-letters'),
    playAgainBtn : document.getElementById('play-button'),
    popup : document.getElementById('popup-container'),
    notification : document.getElementById('notification-container'),
    finalMessage : document.getElementById('final-message'),
    figureParts : document.querySelectorAll('.figure-part')
}


// _____________________________________________________________________

// Select a random word from a n array of strings
function randomSelecator(arr) {
    let selectWord = arr[Math.floor(Math.random() * arr.length)];
    return selectWord;
}


// __________________________

// Display guessed letters
function displayWord(word, correntLetters) {
    let formatedString = ''
    word.split('').forEach((letter) => {
        
        if (correntLetters.includes(letter)){
            formatedString += `<div class="letter">${letter}</div>`;
        } else {
            formatedString += `<div class="letter"></div>`;
        }        
    });
    elem.wordEL.innerHTML = formatedString;         
}


// __________________________

// Check if all letters has been guessed
function checkWon(selectedWord) {
    const innerWord = elem.wordEL.innerText.replace(/\n/g, '');
    
    if (innerWord === selectedWord) {

        elem.finalMessage.innerText = 'Congratulation! You Have Won!'
        elem.popup.style.display = 'flex';
    }
}
// ____________________________

// Check if there are more that 5 wrong guesses
function checkLost(wrongLetters, word) {
    
    if (wrongLetters.length >= 6) {

        elem.finalMessage.innerText = `${word}` + '\n\nUnfortunately you lost!';
        elem.popup.style.display = 'flex';

        
    }
}
// ____________________________

// Check if user has pressed a key
function checkKey(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        return true
    } else {
        return false
    }
}
// ____________________________

function showNotification(letter) {
    
    elem.notification.innerHTML = `<p>You have already entered  this letter! '${letter}'</p>`;
    
    elem.notification.classList.add('show');

    setTimeout(()=>{
        elem.notification.classList.remove('show');
    }, 2000);
}

// ____________________________


// Add wrong lettes to UI
function updateWrong(wrongLetters) {
    
    
    if (wrongLetters.length > 0){

        myString = `<p>Wrong</p>`

        myString += `<span>${wrongLetters}</span>`
    

        elem.wrongLettersEL.innerHTML = myString;
    }
}

// ____________________________


// Update image UI
function updateImage(wrongLetters) {

    

    const figureParts = Array.from(elem.figureParts);

    for(let i = 0; wrongLetters.length > i; i++){

        figureParts[i].style.display = 'block';
    }
}

// _____________________________________________________________________

function controller() {
    
    const words = ['cardano', 'python', 'christopher', 'programming', 'wizard']
    let myCorrentLetters = [];
    let myWrongLetters = [];


    // Get a word from th list
    let mySelectedWord = randomSelecator(words);

    displayWord(mySelectedWord, myCorrentLetters);
    updateWrong(myWrongLetters);
    updateImage(myWrongLetters);


    window.addEventListener('keydown', e => {
        
        if (checkKey(e)) {

            if(mySelectedWord.includes(e.key)){
                                
                myCorrentLetters.includes(e.key) ? showNotification(e.key) : myCorrentLetters.push(e.key);
                
            } else {
                
                myWrongLetters.includes(e.key) ? showNotification(e.key) : myWrongLetters.push(e.key);
                updateWrong(myWrongLetters);
                updateImage(myWrongLetters);
                checkLost(myWrongLetters, mySelectedWord);
            }


            // Display Correct letters
            displayWord(mySelectedWord, myCorrentLetters);
    
            // Check if all letters metches the selected word
            checkWon(mySelectedWord)   
        }  
        

    })

    elem.playAgainBtn.addEventListener('click', () => {
        
        
        
        myCorrentLetters = [];
        myWrongLetters = [];
        elem.popup.style.display = 'none';
        Array.from(elem.figureParts).forEach(part => part.style.display = 'none');
        elem.wrongLettersEL.innerHTML = '';
        controller()

    })

    
}
controller();