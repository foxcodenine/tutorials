// Create an event listener

document.getElementById('button').addEventListener('click', loadText);

function loadText() {
       
    // Create XHR Object
    const xhr = new XMLHttpRequest();

    console.log('READYSTATE',xhr.readyState);

    // Open - type, url/file, async
    xhr.open('GET', 'sample.txt', true);

    console.log('READYSTATE',xhr.readyState);


    // OPTIONAL - used for loaders
    xhr.onprogress = function() {
        console.log('READYSTATE',xhr.readyState);
    }


    /* New Way */
    xhr.onload = () => {   
        console.log('READYSTATE',xhr.readyState);   
        
        const text = document.getElementById('text');

        if(xhr.status === 200) {            
            console.log(xhr.responseText);
            text.innerHTML = xhr.responseText;

        } else if (xhr.status === 404) {
            text.innerHTML = 'File not found';
        }
    }

    xhr.onerror = function() {
        console.log('Request Error...')
    }


    /* Old Way */
    // xhr.onreadystatechange = function(){
    //     console.log(xhr.readyState); 
    //     if(xhr.readyState == 4 && xhr.status == 200) {
    //         console.log(xhr.readyState);    
    //         console.log(xhr.responseText);
    //     }
    // }

    /*  Difference is that onload does not run until 
        it is ready  i.e. xhr.readyState == 4 */

    // Sends request
    xhr.send();
};


/*
 * HTTP Statuses
 * 200: "OK"
 * 403: "Forbidden"
 * 404: "Not found"
*/


/**
 * readyState Values
 * 0: request not initialized
 * 1: server connection established
 * 2: request received
 * 3: processing request
 * 4: request finished and response is ready
 */
 