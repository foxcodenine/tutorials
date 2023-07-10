const path = require('path');
const fs = require('fs');

const mongodb = require('mongodb');

// ---------------------------------------------------------------------

const { getMongodbClient, getDb } = require('../util/database');


// ---------------------------------------------------------------------

class Product {
    constructor(title, price, description, imageUrl, userId, id=null ) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.userId = userId;
         if (id) { this._id = new mongodb.ObjectId(id); }

    }

    async save() {
        const _db = await getDb();

        try {
            let result = await _db.collection('products').insertOne(this);
            console.log(result);
            return result;
    
        } catch (error) {
            console.log('! Product.save! ')
            console.log(error)
        } finally {

        }
    }

    static async fetchAll() {
        const _db = await getDb();
        try {
            let products = ( await _db.collection('products').find() ).toArray();
            return products;

    
        } catch (error) {
            console.log('! Product.fetchAll! ')
            console.log(error)
        } finally {

        }
    }

    static async findById(id) {
        console.log('-p',id)
        const _db = await getDb();
        try {
            let product = await ( await _db.collection('products').findOne({_id: new mongodb.ObjectId(id)}) );
            return product;

    
        } catch (error) {
            console.log('! Product.findById ! ')
            console.log(error)
        } finally {

        }
    }
    async update() {
        const _db = await getDb();
        try {

            let result = await _db.collection('products').updateOne({_id: this._id}, {$set: {...this} });
            // console.log(result);
            return result;

    
        } catch (error) {
            console.log('! Product.update ! ')
            console.log(error)
        } finally {

        }
    }

    static async delete(id) {
        const _db = await getDb();
        
        try {

            let result = await _db.collection('products').deleteOne({_id: new mongodb.ObjectId(id)});
            console.log(result);
            return result;
    
        } catch (error) {
            console.log('! Product.delete ! ')
            console.log(error)
        } finally {

        }
    }

    static async loadFromFile  () { 
        const productsFilePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');
        
        return await new Promise((resolve, reject)=> {
            fs.readFile(productsFilePath, (err, fileContent)=>{
    
                if (err) resolve([]);
                else resolve( JSON.parse(fileContent));
            })
        });    
    };

}

// ---------------------------------------------------------------------

module.exports = Product