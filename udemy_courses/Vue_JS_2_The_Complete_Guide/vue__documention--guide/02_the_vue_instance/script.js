const ppp = (i) => {
    console.log(`\n(${i})_________________________\n`)
}

// __________________________________________
ppp('A') // _________________________________



let data = {a : 1}

console.log(data);

const vm = new Vue({
    data: data
});

console.log(data);
console.log( vm.a == data.a)

vm.a = 2;

console.log(data.a);

data.a = 7;

console.log(vm.a)

// __________________________________________
ppp('B') // _________________________________


let obj = {
    foo: 'bar'
}

Object.freeze(obj);

new Vue({
    el: '#app',
    data: obj
})



// __________________________________________
ppp('C') // _________________________________