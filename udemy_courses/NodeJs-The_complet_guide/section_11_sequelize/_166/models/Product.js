const path = require('path');
const fs = require('fs');

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
            type: Sequelize.TEXT,
            allowNull:false
        },
        imageUrl: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }    
);

// Class Method
Product.loadFromFile = async function () { 
    const productsFilePath = path.join(path.dirname(require.main.filename), 'data', 'products.json');
    
    return await new Promise((resolve, reject)=> {
        fs.readFile(productsFilePath, (err, fileContent)=>{

            if (err) resolve([]);
            else resolve( JSON.parse(fileContent));
        })
    });    
};

// Instance Method
Product.prototype.someMethod = function () { console.log('instance function') }
Product.abs = 'abc';

module.exports = Product