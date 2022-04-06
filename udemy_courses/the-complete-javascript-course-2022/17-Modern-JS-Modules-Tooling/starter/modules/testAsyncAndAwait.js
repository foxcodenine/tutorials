
let data;

async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json()
    return data;
}


(async function(){

    let myData = await getData();
    console.log(myData[0]);

})()


// let myData = await getData();
// myData = await myData[1];

// console.log(myData);



