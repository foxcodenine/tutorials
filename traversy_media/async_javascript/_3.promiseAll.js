
// The Promise.all() method takes an iterable of promises as an input,
// and returns a single Promise as an output. 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {

    setTimeout(resolve, 3000, 'Goodbye');
});

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
                 


Promise.all([promise1, promise2, promise3, promise4])
.then(values => console.log(values));