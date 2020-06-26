
// Forms Event Listener:

document.getElementById('getForm').addEventListener('submit', getName);
 

document.getElementById('postForm').addEventListener('submit', postName);




// Functions

function getName(e) {

    e.preventDefault();

    var name = document.getElementById('name2').value;
    console.log(name)
    xhr = new XMLHttpRequest();
    
    xhr.open('GET', './process.php?name='+name, true);

    // we are sending a variable to php by adding '?' 
    //and then the variable i.e. './process.php?name=Brad'

    xhr.onload = function() {
        console.log(xhr.responseText);
    }

    xhr.send();
};

function postName(e) {
    e.preventDefault();
    xhr = new XMLHttpRequest;

    var name = document.getElementById('name4').value;
    var params = "name="+name

    xhr.open('POST', './process.php?name=', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        console.log(xhr.responseText);
    }

    xhr.send(params);
}