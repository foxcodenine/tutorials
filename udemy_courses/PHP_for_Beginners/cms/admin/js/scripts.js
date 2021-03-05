// (A)  Is non-jQuery equivalent of $(document).ready()
//      Ready() to make a function available after the document is loaded


document.onreadystatechange = function () {                    // <- (A)
    if (document.readyState == "interactive") {                // <- (A)
        // Initialize your application or run some code.        

        // -------------------------------------------------------------

        wysiwyg ();
        selectAllBoxes ();
        confirmDelete();
        confirmDeleteAll();
        myLoader();

        // -------------------------------------------------------------        
    }
}

////////////////////////////////////////////////////////////////////////
function myLoader() {
    const div_box = document.createElement('div');

    div_box.setAttribute("id", "load-screen");
    div_box.innerHTML = '<div id="loading"></div>';   
    document.body.prepend(div_box);

    setTimeout(()=>{
        div_box.classList.add('fade-loading-screen')
    }, 500);



    setTimeout(()=>{
        div_box.remove();
    }, 700);
};

// ---- Editor function ------------------------------------------------


function wysiwyg () {
    if (document.querySelector('#editor_body')) {
        
        ClassicEditor
        .create( document.querySelector('#editor_body') )
        .catch( error => {
            console.error( error );
        } );
    } 
}


// ---- Select all checkboxes ------------------------------------------

function selectAllBoxes () {

    const selectAllBoxes = document.querySelector('#selectAllBoxes');

    if (selectAllBoxes) {

        const allBoxes = document.querySelectorAll('.checkbox');

        selectAllBoxes.addEventListener('click',()=>{
            if (selectAllBoxes.checked == true) {
                for (let i = 0; i < allBoxes.length; i++) {
                    allBoxes[i].checked = true;
                }
            } else {
                for (let i = 0; i < allBoxes.length; i++) {
                    allBoxes[i].checked = false;
                }
            }
        });
    }
}
// ------------------------------------------------------------- 

function confirmDelete() {
    const fields = document.querySelectorAll('.confirm-delete');

    if (fields) {
    
        fields.forEach(element => {
            element.addEventListener('click', (e)=>{
                
                if (confirm('Are you sure you want to Delete?')){
                    return true
                } else {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    // Do nothing!
                    return false
                }
            })
        });
    }
}
// ------------------------------------------------------------- 


function confirmDeleteAll() {
    const applyAllBtn = document.querySelector('.confirm-delete-all');
    const bulkOptions = document.querySelector('.bulk-options');

    if (applyAllBtn) {
        applyAllBtn.addEventListener('click', (e)=>{
            if (bulkOptions.value == 'delete') {
                if (confirm('Delete All Selected?')) {
                    return true
                } else {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    // Do nothing!
                    return false
                }
            }
        });        
    }

}

    


