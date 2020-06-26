

document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);

function loadUser() {
    
    const xml = new XMLHttpRequest();

    xml.open('GET', './user.json', true);

    xml.onload = function() {

        if (xml.status === 200) {

            const user = JSON.parse(xml.responseText);
            // console.log(user.name);

            let output = '';

            output +=   '<ul>'+
                            '<li>ID: ' + user.id + '</li>'+
                            '<li>Name: ' + user.name + '</li>'+
                            '<li>Email: ' + user.email + '</li>'+
                        '</ul>' 
                        
            document.getElementById('user').innerHTML = output;
        }
    }

    xml.send();
};
function loadUsers() {
    
    const xml = new XMLHttpRequest();

    xml.open('GET', './users.json', true);
    
    xml.onload = function() {

        if (xml.status === 200) {

            const users = JSON.parse(xml.responseText);
            console.log(users);

            let output = '';

            for (let i in users) {
                output +=   '<ul>'+
                            '<li>ID: ' + users[i].id + '</li>'+
                            '<li>Name: ' + users[i].name + '</li>'+
                            '<li>Email: ' + users[i].email + '</li>'+
                            '</ul>' 
            }
                        
            document.getElementById('users').innerHTML = output;
        }
    }

    xml.send();
};

