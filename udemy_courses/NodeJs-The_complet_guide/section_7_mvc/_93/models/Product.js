
const path = require('path');
const fs = require('fs');

// ---------------------------------------------------------------------

const productsFilePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');
// ---------------------------------------------------------------------

module.exports = class Product {

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    async save() {        

        const products = await Product.fetchAll();
        products.push(this);

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
}