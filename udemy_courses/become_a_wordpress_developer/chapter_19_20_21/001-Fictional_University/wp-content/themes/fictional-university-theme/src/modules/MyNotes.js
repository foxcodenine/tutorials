class MyNotes {

    // _________________________________________________________________

    constructor() {
        this.notesContainer = document.querySelector('#notes-container');
        this.noteMessage = this.notesContainer.querySelector('.note-limit-message');

        this.noteURL = `${WPVars.baseURL}/wp-json/wp/v2/note`;
        this.myNotes = document.querySelector('#my-notes');
        this.headers = {
            'X-WP-Nonce': WPVars.nonce,
            'Accept': 'application.json',
            'Content-Type': 'application/json'
        };
        this.events();
    }

    // _________________________________________________________________


    events() {
        if (!this.notesContainer) return;
        this.notesContainer.addEventListener('click', e => { 
            this.clickedNoteContainer(e);
        })
    }

    // _________________________________________________________________
    // --- Methods will go here ----------------------------------------

    // If a button in noteContainer is clicked a function is called accordingly
    clickedNoteContainer(e) {
        if (e.target.closest('.delete-note')) {
            const listElement = e.target.closest('li');
            this.deleteNote(listElement);
        }
        if (e.target.closest('.edit-note')) {
            const listElement = e.target.closest('li');
            this.editNote(listElement);
        }
        if (e.target.closest('.update-note')) {
            const listElement = e.target.closest('li');
            this.updateNote(listElement);
        }
        if (e.target.closest('.submit-note')) {            
            this.createNote();
        }
    }

    // _________________________________________________________________

    async deleteNote(listElement) {

        const elementID = listElement.dataset.id;
  
        try {
            let response = await fetch(`${this.noteURL}/${elementID}`, {
                'headers': this.headers,
                'method': 'DELETE'
            });

            const data = await response.json(); 
    
            if (response.ok) {
                // Remove Note from UI     
                setTimeout( function(){
                    listElement.classList.add('fade-out');
                }, 40); 
                
                setTimeout(function(){
                    listElement.parentNode.removeChild(listElement);

                    if (data.userNoteCount <= WPVars.maxUserNoteCount) {
                        this.noteMessage.classList.remove('active');
                    }
                    
                }.bind(this), 400);
                

            } else {
                throw new Error(`Error while deleteNote: ${data.message}`)
            }

        } catch (e) {
            console.error(e);
        }        
    }
    // _________________________________________________________________

    editNote(listElement) {
    
        listElement.dataset.state == 'readonly'    ? 
            this.makeNoteEditable(listElement) : 
            this.makeNoteReadOnly(listElement);
    }

    makeNoteEditable(listElement) {
        listElement.dataset.state = 'editable';
   
        listElement.querySelector('input').removeAttribute('readonly');
        listElement.querySelector('textarea').removeAttribute('readonly');

        listElement.querySelector('input').classList.add('note-active-field');
        listElement.querySelector('textarea').classList.add('note-active-field');
        
        listElement.querySelector('.update-note').classList.add('update-note--visible');
        listElement.querySelector('.edit-note').innerHTML = `
            <i class="fa fa-times" aria-hidden="true"></i> Cancel`; 
    }

    makeNoteReadOnly(listElement) {
     
        listElement.dataset.state = 'readonly';
        listElement.querySelector('input').setAttribute('readonly', true);
        listElement.querySelector('textarea').setAttribute('readonly', true);

        listElement.querySelector('input').classList.remove('note-active-field');
        listElement.querySelector('textarea').classList.remove('note-active-field');
        
        listElement.querySelector('.update-note').classList.remove('update-note--visible');
        listElement.querySelector('.edit-note').innerHTML = `
            <i class="fa fa-pencil" aria-hidden="true"></i> Edit`;
    }

    async updateNote(listElement) {
        const elementID = listElement.dataset.id;

        const ourUpdateNote = {
            'title'  : listElement.querySelector('.note-title-field').value,
            'content': listElement.querySelector('.note-body-field').value,
        }

        try {
            let response = await fetch(`${this.noteURL}/${elementID}`, {
                'headers': this.headers,
                'method' : 'POST',
                'body'   : JSON.stringify(ourUpdateNote)
            });

            const data = await response.json();
    
            if (response.ok) {
                this.makeNoteReadOnly(listElement);
            } else {
                throw new Error(`Error while updateNote: ${data.message}`);
            }

        } catch (e) {
            console.error(e)
        }
    }

    // _________________________________________________________________

    async createNote(listElement) {   

        const title   = this.notesContainer.querySelector('.new-note-title').value;
        const content = this.notesContainer.querySelector('.new-note-body').value;

        const ourNewNote = {
            'title'  : title,
            'content': content,
            'status': 'publish'
        }        

        try {
    
            let response = await fetch(`${this.noteURL}`, {
                'headers': this.headers,
                'method' : 'POST',
                'body'   : JSON.stringify(ourNewNote)
            });

     
            const data = await response.json();

               
    
            if (response.ok && !data.error) {
            
                this.notesContainer.querySelector('.new-note-title').value = '';
                this.notesContainer.querySelector('.new-note-body').value  = '';   
                this.addNewNoteToUi(data.id, title, content)
              
            } else if (data.error === 'limit reached') {
                this.noteMessage.classList.add('active');
            } else {
             
                throw new Error(`Error while createNote: ${data.message}`);
            }

        } catch (e) {
            console.error(e)
        }
    }
    addNewNoteToUi(id, title, content) {
        const newNote = document.createElement('li');
        newNote.setAttribute('data-id', id);
        newNote.setAttribute('data-state', 'readonly');
        newNote.innerHTML = `      
            <input readonly class="note-title-field" value="${title}">
            <span class="edit-note"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</span>
            <span class="delete-note"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete</span>
            <textarea readonly class="note-body-field">${content}</textarea>
            <span class="update-note btn btn--blue btn--small"><i class="fa fa-arrow-right" aria-hidden="true"></i> Save</span>
        `;
        this.myNotes.prepend(newNote);
    }
}

export default MyNotes;