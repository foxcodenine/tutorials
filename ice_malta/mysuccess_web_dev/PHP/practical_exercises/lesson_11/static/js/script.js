// (A)  Is non-jQuery equivalent of `$(document).ready()`
//      `$(document).ready()` to make a function available after the document is loaded

document.onreadystatechange = function () {                    // <- (A)
    if (document.readyState == "interactive") {                // <- (A)
               
        // -------------------------------------------------------------
        // Calling functions:
      
        toastrFunction()
        pusherFunction();

        // -------------------------------------------------------------        
    }
}

////////////////////////////////////////////////////////////////////////

// Declare functions:

function toastrFunction() {
    toastr.options.closeMethod = 'fadeOut';
    toastr.options.closeDuration = 500;
    toastr.options.closeEasing = 'swing';

    let pusherMessage = sessionStorage.getItem('pusherMessage');

    if (pusherMessage) {
            

            toastr.info(pusherMessage);
            sessionStorage.removeItem('pusherMessage'); 

      
        
    } 
}

function pusherFunction() {   


    const pusher = new Pusher(
        pusherKey, {cluster: pusherCluster, encrypted: true}
    );

    document.getElementById('submitBtn').addEventListener('click', ()=>{

    const channelNotify = pusher.subscribe('channelPhpLesson11Practical');
    channelNotify.bind('emailSent', (notification)=>{

           
            message = notification.message;
            sessionStorage.setItem('pusherMessage', message);

            console.log('active');

        });
    })
}