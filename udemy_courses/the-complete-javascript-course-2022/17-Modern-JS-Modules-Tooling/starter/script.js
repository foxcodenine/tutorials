// Importing module

import {addToCart, totalPrice as price, qty} from './modules/shoppingCart.js';
import * as ShoppingCart from './modules/shoppingCart.js';
// import * as test from './modules/testAsyncAndAwait.js';

// _____________________________________________________________________

console.log('import module');
// console.log(shippingCost);

// _____________________________________________________________________

addToCart('grapes', 20);
console.log(price, qty);
console.log(ShoppingCart.totalPrice);


// _____________________________________________________________________


// (async function() {
//     let data = await test.data;
//     console.log(data);
// })();

// _____________________________________________________________________


// import  cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import  cloneDeep from 'lodash-es';

const objA = {
    fullname : {
        first: 'Chris',
        last: 'Farrugia'
    },
    age: 37
}

const objB = objA;

const objC = Object.assign({}, objA);

const objD = cloneDeep(objA);

objA.fullname.first = 'Doothy';
objA.fullname.last  = 'Cassar';
objA.age            = 32;


console.log(objA);
console.log(objB);
console.log(objC);
console.log(objD);


// _____________________________________________________________________

if (module.hot) {
    module.hot.accept();
}


