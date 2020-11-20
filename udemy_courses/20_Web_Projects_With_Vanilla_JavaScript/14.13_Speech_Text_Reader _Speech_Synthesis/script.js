const elems = {
    main: document.querySelector('main'),
    voicesSelect: document.getElementById('voices'),
    textarea: document.getElementById('text'),
    readBtn: document.getElementById('read'),
    toggleBtn: document.getElementById('toggle'),
    closeBtn: document.getElementById('close'),
    textBox: document.getElementById('text-box')
}


/*_______________________________ State _______________________________*/


let state = {
  data: [],
  message: new SpeechSynthesisUtterance,
  voices: []
};

/*_______________________________ Data _______________________________*/

state.data = [
    {
      image: './img/drink.jpg',
      text: "I'm Thirsty"
    },
    {
      image: './img/food.jpg',
      text: "I'm Hungry"
    },
    {
      image: './img/tired.jpg',
      text: "I'm Tired"
    },
    {
      image: './img/hurt.jpg',
      text: "I'm Hurt"
    },
    {
      image: './img/happy.jpg',
      text: "I'm Happy"
    },
    {
      image: './img/angry.jpg',
      text: "I'm Angry"
    },
    {
      image: './img/sad.jpg',
      text: "I'm Sad"
    },
    {
      image: './img/scared.jpg',
      text: "I'm Scared"
    },
    {
      image: './img/outside.jpg',
      text: 'I Want To Go Outside'
    },
    {
      image: './img/home.jpg',
      text: 'I Want To Go Home'
    },
    {
      image: './img/school.jpg',
      text: 'I Want To Go To School'
    },
    {
      image: './img/grandma.jpg',
      text: 'I Want To Go To Grandmas'
    }
  ];

/*_______________________________ View _______________________________*/

// Create speech box Function
function createBox (item) {
    const box = document.createElement('div');

    const {image, text} = item;

    box.classList.add('box');

    const markup = `
        <img src="${image}" alt="${text}">
        <p class="info">${text}</p>`;

    box.innerHTML = markup;

    // Add speck Event
    box.addEventListener('click', () => {

      let message = setTextMessage(text);
      speakText(message);

      // Add effect
      box.classList.add('active');
      setTimeout(() => box.classList.remove('active'), 800);
    })


    // Add box in main
    elems.main.appendChild(box);        
}



function createVoiceOptions() {
  voices = fetchVoices();

  voices.forEach(v => {
    const option = document.createElement('option');

    option.value = v.name;
    option.innerText = `${v.name} - ${v.lang}`

    elems.voicesSelect.appendChild(option);
  })
}



/*_______________________________ Model ______________________________*/


// Function get voices:
function fetchVoices() {

  state.voices = speechSynthesis.getVoices();
  return state.voices;
}

// Set Text
function setTextMessage(text) {
  
 
  // Set Text to message
  state.message.text = text;

  return state.message}


// Speak text 
function speakText(message) {
  speechSynthesis.speak(message);
}

function setVoice(e) {
  state.message.voice = state.voices.find(v.name === e.target.value)
}

function readText() {
  state.message.text = elems.textarea.value;
  
  speechSynthesis.speak(state.message);
}

/*____________________________ Controller ____________________________*/


// Init function

const controller = () => {

  // ___________________________________________________________________

  // Populate site with boxes from data:
  state.data.forEach(createBox);

  // Populate voice selector:
  createVoiceOptions();

  setTimeout(()=>{
    createVoiceOptions();
  }, 300)

  // ___________________________________________________________________

  /* Events Listners */

  // Toggle textbox
  elems.toggleBtn.addEventListener('click', () => elems.textBox.classList.toggle('show'));

  // Close textbox
  elems.closeBtn.addEventListener('click', () => elems.textBox.classList.remove('show'));

  // Voices changed
  speechSynthesis.addEventListener('voiceschanged', createVoiceOptions);

  // Select a different voice
  elems.voicesSelect.addEventListener('change', setVoice);

  // Read textbox

  elems.readBtn.addEventListener('click', readText);


  // ___________________________________________________________________
  
}

controller();