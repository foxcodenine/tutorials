

const gitApiAddress = 'https://api.github.com/users';



// Button Event Listener
document.getElementById('button').addEventListener('click', loadUsers);

// Load Github Users
function loadUsers() {

    var xhr = new XMLHttpRequest();    
    xhr.open('GET', gitApiAddress, true)

    xhr.onload = function(){
        if(xhr.status === 200) {
            
            var users = JSON.parse(xhr.responseText)
            console.log(users);

            var output = '';

            for (var i in users) {
                output +=   '<div class="user">' +
                                '<img src="' + users[i].avatar_url + '" width="70" height="70">'+
                                '<ul>' +
                                    '<li>'+ users[i].id +'</li>'+
                                    '<li>'+ users[i].login +'</li>'+
                                '</ul>' +
                            '</div>'
            }

            document.getElementById('users').innerHTML = output;
        }
    }
    xhr.send();
};

/*
<div class="user">
    
    <ul>
        <li></li>
        <li></li>
    </ul>
</div>

*/