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
  timr: 10
}


/*_______________________________ View _______________________________*/






/*_______________________________ Model ______________________________*/

// Fetch random word
async function getRandomWord(){
  const respons = await fetch('https://random-word.ryanrk.com/api/en/word/random');
  const data = await respons.json();
  state.randomWord.unshift(data);
  return data;  
}

/*____________________________ Controller ____________________________*/

// Init Function
const  init = async () => {

  let word = await getRandomWord();
  console.log('>> ',...word)
}

init();
