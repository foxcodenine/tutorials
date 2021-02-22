// (A)  Is non-jQuery equivalent of $(document).ready()
//      Ready() to make a function available after the document is loaded


document.onreadystatechange = function () {                    // <- (A)
    if (document.readyState == "interactive") {                // <- (A)
        // Initialize your application or run some code.        

        // -------------------------------------------------------------

        wysiwyg ();
        selectAllBoxes ();

        // -------------------------------------------------------------        
    }
}

////////////////////////////////////////////////////////////////////////


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

    


