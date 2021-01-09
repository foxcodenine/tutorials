// window.addEventListener('click', e=>{
//     let itMatches = e.target.matches('.cls1');
//     console.log(itMatches);
// });



// function list() {
//     return Array.prototype.slice.call(arguments);
// };

const list = (...arguments) => {
    return Array.prototype.slice.call(arguments);
};

const mylist =list(1,2,3,5);

console.log(mylist);

const splist = (...arguments) => {
    let mylist =  Array.from(arguments);
    let removeItems = mylist.splice(1, 2, 5, 5);
    return [mylist, removeItems]
};

console.log(splist(1,1,1,1,1));