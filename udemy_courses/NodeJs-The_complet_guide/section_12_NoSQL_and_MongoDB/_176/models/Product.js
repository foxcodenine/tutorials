const path = require('path');
const fs = require('fs');

// ---------------------------------------------------------------------

const { getMongodbClient, getDb } = require('../util/database');


// ---------------------------------------------------------------------

class Product {
    constructor(title, price, description, imageUrl, id=null ) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
         if (id) { this.id = id; }

    }

    async save() {
        const _db = await getDb()

        try {
            let result = await _db.collection('products').insertOne(this);
            console.log(result);
            return result;
    
        } catch (error) {
            console.log(error)
        } finally {

        }
    }

}

// ---------------------------------------------------------------------

module.exports = Product