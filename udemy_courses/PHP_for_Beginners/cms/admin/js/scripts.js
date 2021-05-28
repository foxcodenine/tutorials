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
        confirmDeletePost();
        myLoader();
        likeFunction();
        unlikeFunction();

        setInterval(() => {
            usersOnLineJS();
        }, 5000);
        

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

                // _____________________________________________________
                // Using JS Confirm instead of custom modal

                // if (confirm('Are you sure you want to Delete?')){
                //     return true
                // } else {
                //     e.preventDefault();
                //     e.stopImmediatePropagation();
                //     // Do nothing!
                //     return false
                // }

                // _____________________________________________________
                // Using custom modal

                e.preventDefault();
                e.stopImmediatePropagation();

                const btn = document.querySelector('.modal-toggle-btn');
                const _delete = document.querySelector('#modale_delete');
                const _cancel = document.querySelector('#modale_cancel');
                const _close = document.querySelector('#modale_close');

                btn.click();

                _cancel.addEventListener('click', ()=>{
                    return false
                });

                _close.addEventListener('click', ()=>{
                    return false
                });

                _delete.addEventListener('click', ()=>{
                    window.location.replace(`${e.target.getAttribute('href')}`)
                });

                // _____________________________________________________
            })
        });
    }
}
// ------------------------------------------------------------- 


function confirmDeletePost() {
    const fields = document.querySelectorAll('.confirm-delete-post');

    if (fields) {
    
        fields.forEach(element => {
            element.addEventListener('click', (e)=>{


                // _____________________________________________________
                // Using JS Confirm instead of custom modal

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


// ------------------------------------------------------------- 
// Fetch number of user on-line from baskend

function usersOnLineJS() {
    
    const placeholder = document.querySelector('.users-on-line');

    if (placeholder) {    

        fetch('admin_functions.php?on_line_users=true')
        .then(response => response.text())
        .then(data => placeholder.innerText = data)

    }
}
// ------------------------------------------------------------- 

function likeFunction() {

    postLike = document.querySelector('.post_like');

    if (postLike) {
        
        postLike.addEventListener('click', (e)=>{
            e.preventDefault();
            console.log('...post has been liked!')

            userId = document.querySelector('#post_user_id').innerText
            console.log(userId);
            
            let urlAddress = window.location.search;
            let urlAddressArray;
           

            if (urlAddress.includes('=')) {
                urlAddressArray = urlAddress.split('=');
            } else {
                urlAddress = window.location.pathname;
                urlAddressArray = urlAddress.split('/');
            }
            
            const postId = urlAddressArray[urlAddressArray.length - 1];           

            const data = {liked: 1, post_id: postId, user_id: userId};

            fetch(`/htdocs/cms/post.php?p_id=${postId}`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            })

            .then(response => response.text())
            // .then(data => {console.log('Success:', data);})
            .catch((error) => {
            console.error('Error:', error);
            });

        })
    }
}
// -------------------------------------------------------------
function unlikeFunction() {

    postUnlike = document.querySelector('.post_unlike');

    if (postUnlike) {
        
        postUnlike.addEventListener('click', (e)=>{
            e.preventDefault();
            console.log('...post has been unliked!')

            userId = document.querySelector('#post_user_id').innerText
            console.log(userId);
            
            let urlAddress = window.location.search;
            let urlAddressArray;
           

            if (urlAddress.includes('=')) {
                urlAddressArray = urlAddress.split('=');
            } else {
                urlAddress = window.location.pathname;
                urlAddressArray = urlAddress.split('/');
            }
            
            const postId = urlAddressArray[urlAddressArray.length - 1];           

            const data = {unliked: 1, post_id: postId, user_id: userId};

            fetch(`/htdocs/cms/post.php?p_id=${postId}`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            })

            .then(response => response.text())
            // .then(data => {console.log('Success:', data);})
            .catch((error) => {
            console.error('Error:', error);
            });
        })
    }
}

// fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });





// function usersOnLineJS() {
    
//     const placeholder = document.querySelector('.users-on-line');

//     if (placeholder) {    

//         fetch('admin_functions.php?on_line_users=true')
//         .then(response => response.text())
//         .then(data => placeholder.innerText = data)

//     }
// }



