const mongodb = require('mongodb');
// ---------------------------------------------------------------------

const { getMongodbClient, getDb } = require('../util/database');

// ---------------------------------------------------------------------

class User {

    constructor (username, email, password, cart, id=null) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.cart = cart;
        if (id) { this._id = new mongodb.ObjectId(id); }
    }

    async save() {
        const _db = await getDb();

        try {
            let result = await _db.collection('users').insertOne(this);
            console.log(result);
            return result;
    
        } catch (error) {
            console.log('! User.save! ')
            console.log(error)
        } finally {

        }
    }

    static async fetchAll() {
        const _db = await getDb();
        try {
            let users = ( await _db.collection('users').find() ).toArray();
            return users;

    
        } catch (error) {
            console.log('! User.fetchAll! ')
            console.log(error)
        } finally {

        }
    }

    static async findById(id) {
        const _db = await getDb();
        try {
            let user = await ( await _db.collection('users').findOne({_id: new mongodb.ObjectId(id)}) );
            return user;

    
        } catch (error) {
            console.log('! User.findById ! ')
            console.log(error)
        } finally {

        }
    }

    async getCart() {
        const _db = await getDb();
        try {
            const cartItems = this.cart?.items ?? [];
            const productsIds =  cartItems.map( item => { return item.productId} );
            // const allProductsIds = (await (await _db.collection('products').find()).toArray()).map(product => product._id.toString())

          

            let products = await (await _db.collection('products').find({_id: {$in: productsIds} })).toArray()

            products = products.map( product =>{
        
                const quantity = cartItems.find( item => item.productId.toString() === product._id.toString()).quantity;
                return {...product, quantity};
            })
            return products;           

    
        } catch (error) {
            console.log('! User.getCart ! ')
            console.log(error)
        } finally {

        }
    }

    async addToCart(product) {
        try {

            const _db = await getDb();
            

            // -- check if item already in cart
            const cartProductIndex = this.cart?.items?.findIndex((item)=>{
                return item.productId.toString() === product._id.toString()
            });
            
            const updateCartItems  = typeof cartProductIndex === 'undefined' ? [] : [...this.cart.items];

            // -- if not add it
            if (cartProductIndex === -1 || typeof cartProductIndex === 'undefined') {
                updateCartItems.push({productId: product._id, quantity: 1})
            }
            // -- if is, increment by 1
            else {         
                updateCartItems[cartProductIndex] === {productId: product._id, quantity: ++this.cart.items[cartProductIndex].quantity}                
            }
            const updatedCart = {items: updateCartItems};       

            return await _db.collection('users').updateOne(
                { _id: this._id },
                { $set: { cart: updatedCart } }
            );

        } catch (error ) {
            console.log('! User.addToCart !')
            console.log(error)
        }

    }

    async deleteItemFromCart(productId) {
        const _db = await getDb();
        const cartItems = this.cart?.items ?? [];
        const newCartItems = cartItems.filter(item => item.productId.toString() !== productId);

         await _db.collection('users').updateOne(
            { _id: this._id },
            { $set: { cart: {items: newCartItems} } }
        );
        
    }

    async addOrder() {
        const _db = await getDb();
        const products = await this.getCart();
        const newOrder = {
            items: products,
            user: {
                _id: this._id,
                username: this.username,
                email: this.email,
            }
        }
        await _db.collection('orders').insertOne(newOrder);
        this.cart.items = [];

        await _db.collection('users').updateOne(
            { _id: this._id },
            { $set: { cart: this.cart } }
        );
    }

    async getOrders() {
        const _db = await getDb();
        const orders = await ( await _db.collection('orders').find({ 'user._id': this._id })).toArray();
        return orders;

    }
}

module.exports = User;