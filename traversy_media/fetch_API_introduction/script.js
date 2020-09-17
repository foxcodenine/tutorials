// Event Listeners

document.getElementById('getText').addEventListener('click', getText);

document.getElementById('getUsers').addEventListener('click', getUsers);

document.getElementById('getPosts').addEventListener('click', getPosts);

document.getElementById('addPosts').addEventListener('submit', addPosts);

document.getElementById('addData').addEventListener('click', addData);

// _____________________________________________________________________

// Functions

function getText() {
    fetch('./sample.txt')
    .then((resp) => resp.text())
    .then((data) => {
        document.getElementById('output').innerText = data
    })
    .catch((err) => console.log(err))

};


function getUsers() {
    fetch('./Users.json')
    .then((resp) => resp.json())
    .then((data) => {
        let output = '<h2 class="mb-4">Users</h2>';

        data.forEach(user => {
            output += ` <ul class="list-group mb-2">
                        <li class="list-group-item">ID: ${user.name}</li>
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item ">Email: ${user.email}</li>
                        </ul>`
            });

        document.getElementById('output').innerHTML = output;


    })
}


function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(data => {

        let output = '<h2 class="mb-4">Post</h2>';

        data.forEach(post => {
            output += `
                    <div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}<p>
                    </div>
            `
        })
        document.getElementById('output').innerHTML = output;
    })
}

function addPosts(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;

    let body = document.getElementById('body').value;

    fetch(
        'https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plan, */*',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({title:title, body:body})
        }
    )
    .then(resp => resp.json())
    .then(data => console.log(data))


}

function addData(e) {
    // This is an addition function it get the data from the external api
    // and append to it the data from the form, and load it to UI.
    e.preventDefault();

    let title = document.getElementById('title').value;

    let body = document.getElementById('body').value;

    fetch(
        'https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plan, */*',
                'Content-type': 'application/json'
            },
            body:JSON.stringify({title:title, body:body})
        }
    )
    .then(resp => resp.json())
    .then(data => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(result => {
            result.push(data);
            return result;
                        
        })
        .then(dataResult => {
            console.log( dataResult);
            let output = '<h2 class="mb-4">Users + Data Added</h2>';

            dataResult.forEach(post => {
                output += `
                        <div class="card card-body mb-3">
                        <h3>${post.title}</h3>
                        <p>${post.body}<p>
                        </div>
                `
            })
            document.getElementById('output').innerHTML = '';
            document.getElementById('output').innerHTML = output;

        })


    })


}