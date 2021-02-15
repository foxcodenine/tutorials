// (A)  Is non-jQuery equivalent of $(document).ready()
//      Ready() to make a function available after the document is loaded


document.onreadystatechange = function () {                    // <- (A)
    if (document.readyState == "interactive") {                // <- (A)
        // Initialize your application or run some code.



        // ---- Editor finction ----------------------------------------
        if (document.querySelector('#editor_body')) {
        
            ClassicEditor
            .create( document.querySelector('#editor_body') )
            .catch( error => {
                console.error( error );
            } );
        } 
        // ------------------------------------------------------------- 

        
    }
}