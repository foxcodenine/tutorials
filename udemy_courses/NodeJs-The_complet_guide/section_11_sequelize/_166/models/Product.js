const Sequelize = require('sequelize');

const sequelize = require('../util/database.js');

// ---------------------------------------------------------------------

const Product = sequelize.define('product', {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: Sequelize.STRING,
        price: {
            type: Sequelize.DOUBLE,
            allowNull:false
        },
        description: {
            type: Sequelize.STRING,
            allowNull:false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }    
);

// Class Method
Product.associate = function () { console.log('calls function') };
// Instance Method
Product.prototype.someMethod = function () { console.log('instance function') }
Product.abs = 'abc';

module.exports = Product