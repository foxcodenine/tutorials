const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const Cart = require('./Cart');

// ---------------------------------------------------------------------

const productsFilePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');

// ---------------------------------------------------------------------

module.exports = class Product {

    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    async save() {        

        const products = await Product.fetchAll();

        if (this.id) {
            const currentProductIndex = products.findIndex(p => p.id == this.id);
            products[currentProductIndex] = this;

        } else {

            this.id = this.uuidv4();
            products.push(this);
        }

        fs.writeFile(productsFilePath, JSON.stringify(products), err => (err ? console.log(err) : null))
    }
    
    static async fetchAll() {
        return await new Promise (resolve => {

            fs.readFile(productsFilePath, (err, fileContent)=>{

                if (err) resolve([]);
                else resolve( JSON.parse(fileContent));

            });
        })
    }

    uuidv4() {
        return crypto.randomUUID();
    }

    static async findById(id) {
       let allProducts = await this.fetchAll();
    //    console.log(allProducts);
       let product = allProducts.find( (p) => { return p.id === id} );
       return product;
    }

    static async deleteById(id) {
        const products = await Product.fetchAll();
        
        const newProducts = products.filter(product => product.id != id);

        fs.writeFile(productsFilePath, JSON.stringify(newProducts), err => {

            if (err) { console.log(err); return }

            const price = (products.find(prod =>prod.id === id))?.price ?? 0;
            
            Cart.deleteProduct(id, price);

        });
    }
}