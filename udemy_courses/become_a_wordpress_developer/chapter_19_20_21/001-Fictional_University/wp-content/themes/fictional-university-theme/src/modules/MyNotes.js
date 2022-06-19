class MyNotes {

    constructor() {
        this.notesContainer = document.querySelector('#notes-container');
        this.events();
    }

    events() {
        this.notesContainer.addEventListener('click', e => { 
            this.clickedNoteContainer(e);
        })
    }




    // Methos will go here
    clickedNoteContainer(e) {
        if (e.target.closest('.delete-note')) {
            console.log(e.target);
        }
        if (e.target.closest('.edit-note')) {
            console.log(e.target);
        }
    }
}

export default MyNotes;