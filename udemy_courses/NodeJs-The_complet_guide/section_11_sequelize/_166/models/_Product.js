// const path = require('path');
// const fs = require('fs');
const crypto = require('crypto');
const Cart = require('./Cart');

const db = require('../util/_database.js');

// ---------------------------------------------------------------------

// const productsFilePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');

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
        let result = await db.execute(
            `INSERT INTO products (title, price, description, imageUrl) value (?, ?, ?, ?);`,
            [this.title, this.price, this.description, this.imageUrl]
        );
        return result[0];
    }
    
    static async fetchAll() {
        let result = await db.execute('SELECT * FROM products;');
        return result[0];
    }

    uuidv4() {  return crypto.randomUUID(); }

    static async findById(id) {
        let result = await db.execute('SELECT * FROM products WHERE id = ?;', [id]);
        return result[0][0];
    }

    static async deleteById(id) {

    }
}