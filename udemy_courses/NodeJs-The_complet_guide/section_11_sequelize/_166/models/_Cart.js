const path = require('path');
const fs = require('fs');

// ---------------------------------------------------------------------

const cartFilePath = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

// ---------------------------------------------------------------------

module.exports = class Cart {

    static async addProduct(id, productPrice, qty=1) {
        // -- Fetch the previous cart ----------------------------------

        // if (!fs.existsSync(cartFilePath)) { }

        let cart = await Cart.getCart();

        // -- Analyze, check if add product is alread in cart ----------
        const existingProductIndex = cart.products.findIndex((prod)=>{
            return prod.id === id;
        });

        const existingProduct = cart.products.at(existingProductIndex);


        // -- Add new products - increse quantity ----------------------
        let updatedProduct;
        
        if (existingProductIndex !== -1) {
            updatedProduct = {...existingProduct};
            updatedProduct.qty += qty;                
            cart.products[existingProductIndex] = updatedProduct;
        }
        else {
            updatedProduct = { id, qty };
            cart.products = [...cart.products, updatedProduct]
        }

        // -- Update the totalPrice ------------------------------------
        cart.totlaPrice += (productPrice * qty);

        // -- Save to file ----------------------------------------------
        fs.writeFile(cartFilePath, JSON.stringify(cart), (err) => {
            console.error(err);
        });        
    }

    static async deleteProduct(id, productPrice) {

        // if (!fs.existsSync(cartFilePath)) { return }

        const cart = await Cart.getCart();

        const updatedCart = {...cart};

        // const productIndex = updatedCart.findIndex(prod => prod.id === id);
        const product = updatedCart.products.find(prod => prod.id === id);
        if (!product) return;
        const productQty = product.qty;

        updatedCart.products = updatedCart.products.filter(prod => prod.id !== id);
        updatedCart.totlaPrice -= (productQty * productPrice);

        fs.writeFile(cartFilePath, JSON.stringify(updatedCart), (err) => {
            console.error(err);
        });
    }
       
    
    static async getCart() {
        return await new Promise((resolve, reject) => {

            fs.readFile(cartFilePath, (err, fileContent) => {
                
                if (err) resolve({products: [], totlaPrice: 0 });
                else resolve(JSON.parse(fileContent))
            })
        })
    }

}