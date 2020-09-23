const elems = {
  word: document.getElementById('word'),
  text: document.getElementById('text'),
  scoreEl: document.getElementById('score'),
  timeEl: document.getElementById('time'),
  endgameEl: document.getElementById('end-game-container'),
  settingsBtn: document.getElementById('settings-btn'),
  settings: document.getElementById('settings'),
  settingsForm: document.getElementById('settings-form'),
  difficultySelect: document.getElementById('difficulty')
}

/*_______________________________ State _______________________________*/

let state = {

  randomWord: [],
  score: 0,
  time: 10,
  difficulty: 'easy'
}

/*_______________________________ View _______________________________*/

// Add word to DOM function
function addWordToDOM(word) {
  elems.word.innerText = word;
}

// Update score UI
function updateScoreUI() {
  elems.scoreEl.textContent = state.score
}

// Update time in UI
function updateTimeUI() {
  elems.timeEl.innerText = state.time + 's';
}

// Display gameover in UI
function gameOver() {
  const markup = `  
    <h1>Time has ran out</h1>
    <p>Your final score is ${state.score}</p>
    <button onclick="window.location.reload()" >Reload</button>`;

    elems.endgameEl.innerHTML = markup;
    elems.endgameEl.style['display'] = 'flex';
}


// Update select option in UI
function selectedOption(id, valueToSelect) {    
  let element = document.getElementById(id);
  element.value = valueToSelect;
}
/*_______________________________ Model ______________________________*/

// Fetch random word function
async function getRandomWord(){
  const respons = await fetch('https://random-word.ryanrk.com/api/en/word/random');
  const data = await respons.json();
  state.randomWord.unshift(data);
  return data;  
}

// Update score function 
function updateScore() {
  state.score++
}


// Update time function
function updateTime() {
  state.time--;
}

// Add time function
function addTime() {
  
  let addedTime;

  switch (state.difficulty) {
    case 'easy':
      addedTime = 8;
      break;
    case 'medium':
      addedTime = 5;
      break;
    default:
      addedTime = 3;
  }
  
  state.time = state.time + addedTime;
}

/*____________________________ Controller ____________________________*/

// Timer funtion
const timeCountDown = setInterval(()=>{
  updateTime();
  updateTimeUI();

  if (state.time === 0) {    
    clearInterval(timeCountDown);
    gameOver();
  }
}, 1000)

// _____________________________

// Init function
const  controller = async () => {

  // Internal functions:  

  async function init() {

    
    // Clear input
    elems.text.value = '';
    // Get difficuly level from local store and set it in state
    state.difficulty = localStorage.getItem('difficulty') ?
                            localStorage.getItem('difficulty') : 'easy';
    // Update Select UI
    selectedOption('difficulty', state.difficulty)
       
     // Set place cursor in input
    elems.text.focus();
    // Get word
    let word = await getRandomWord();
    // Insert word to DOM
    addWordToDOM(...word);
  }

  init();

  // _______________
  
  // Event listents:
  
  // Input field
  elems.text.addEventListener('input', (e)=>{    
    const inputText = e.target.value

    // Check input with DOM
    if (inputText === elems.word.innerText) {      
      
      updateScore();
      updateScoreUI();
      addTime();
      init();     
    }    
  });

  // Setting btn
  elems.settingsBtn.addEventListener('click', ()=>{
    elems.settings.classList.toggle('hide')
  })

  // Select difficulty and update localStore
  elems.difficultySelect.addEventListener('change', (e)=>{    
    // Reset timer
    state.time = 11; 
    localStorage.setItem('difficulty', e.target.value)   
    init();
  })

}

controller();
