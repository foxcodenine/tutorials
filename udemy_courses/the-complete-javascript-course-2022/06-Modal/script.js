'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


// ---------------------------------------------------------------------

for ( let i = 0; i < btnsOpenModal.length; ++i ) {
    
    btnsOpenModal[i].addEventListener('click', () => {
        console.log(btnsOpenModal[i].textContent);
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');        
    } );    
}


// ---------------------------------------------------------------------

function closeModel () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

// ---------------------------------------------------------------------

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModel();
    }
});

// ---------------------------------------------------------------------