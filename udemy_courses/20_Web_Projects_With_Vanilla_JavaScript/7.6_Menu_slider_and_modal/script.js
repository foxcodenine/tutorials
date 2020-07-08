
// _____________________________________________________________________

const elem = {
    toggle : document.getElementById('toggle'),
    close : document.getElementById('close'),
    open : document.getElementById('open'),
    modal : document.getElementById('modal'),
    body : document.querySelector('body')
}




// _____________________________________________________________________

function toggleNav() {
    elem.body.classList.toggle('body-show-nav');    
}


function showModal() {
    elem.modal.classList.add('show-modal')
}


function removeModal() {
    elem.modal.classList.remove('show-modal')
}

// _____________________________________________________________________


function controler() {
    // toggle nav
    elem.toggle.addEventListener('click', toggleNav)
    // toggle nav
    elem.open.addEventListener('click', showModal)
    // toggle nav
    elem.close.addEventListener('click', removeModal)

    window.addEventListener('click', e => {
        e.target == modal ? modal.classList.remove('show-modal') : false
    })
}
controler();









