// Exporting module

console.log('export module');

const shippingCost = 10;
const cart = [];


export function addToCart(product, quantity) {
    cart.push({product, quantity});
    const str = `${quantity} ${product} has been added to the cart`;
    console.log(str);
}

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as qty};