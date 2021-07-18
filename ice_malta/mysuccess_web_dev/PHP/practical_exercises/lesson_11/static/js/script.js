// (A)  Is non-jQuery equivalent of `$(document).ready()`
//      `$(document).ready()` to make a function available after the document is loaded

document.onreadystatechange = function () {                    // <- (A)
    if (document.readyState == "interactive") {                // <- (A)
               
        // -------------------------------------------------------------
        // Calling functions:
      
        toastrFunction()


        // -------------------------------------------------------------        
    }
}

////////////////////////////////////////////////////////////////////////

// Declare functions:

function toastrFunction() {
    toastr.options.closeMethod = 'fadeOut';
    toastr.options.closeDuration = 500;
    toastr.options.closeEasing = 'swing';


    let emailMessage = Cookies.get('icemalta_php_lesson_11_email');

    if (emailMessage && emailMessage !== 'null') {
            

        toastr.info(emailMessage);
        Cookies.set('icemalta_php_lesson_11_email', 'null', { expires: 1 }); 

      
        
    } 
}
