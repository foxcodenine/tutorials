const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];


function getPost() {

    

    setTimeout(()=>{
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = `<ul>${output}</ul>`;
    }, 1000);

}

function createPost(post) {
    return new Promise((resolve, reject) => {

        // this simulate API fetching
        setTimeout(() => {
            posts.push(post);        

            // this simulate an error in the API fetching
            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 1500);
    });
}

createPost({title: 'Post Three', body: 'This is post three'})
.then(getPost)
.catch(err => console.log(err));