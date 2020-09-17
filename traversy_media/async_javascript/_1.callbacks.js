const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];


function getPost() {

    let output = '';

    setTimeout(()=>{
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = `<ul>${output}</ul>`;
    }, 1000);

}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);

        callback();
    }, 2000);
}


// getPost(); <- we move this into the createPost as a callBack function.

createPost({title: 'Post Three', body: 'This is post Three'}, getPost);