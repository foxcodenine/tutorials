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


/*_______________________________ Data _______________________________*/

const data = [
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

    // @todo - speak event

    elems.main.appendChild(box);    
}

/*_______________________________ Model ______________________________*/



/*____________________________ Controller ____________________________*/


// Init function

const controller = () => {

  // Populate site with boxes from data:
  data.forEach(createBox);


  /* Events Listners */

  // Display/Hide Textbox:
  elems.toggleBtn.addEventListener('click', () => elems.textBox.classList.toggle('show'));
  elems.closeBtn.addEventListener('click', () => elems.textBox.classList.remove('show'));
  
}

controller();