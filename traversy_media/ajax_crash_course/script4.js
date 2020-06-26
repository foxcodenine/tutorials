
// Button Event Listener:
document.getElementById('button').addEventListener('click', getName);

// Functions 

function getName() {
    xhr = new XMLHttpRequest();

    xhr.open('GET', './process.php?name=Brad', true);

    // we are sending a variable to php by adding '?' 
    //and then the variable i.e. './process.php?name=Brad'

    xhr.onload = function() {
        console.log(xhr.responseText);
    }

    xhr.send();
};