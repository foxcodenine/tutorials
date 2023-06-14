const Sequelize = require('sequelize');

const sequelize = require('../util/database.js');

// ---------------------------------------------------------------------

const User = sequelize.define('user', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    email: {
        type: Sequelize.STRING,
        allowNull:false
    },
    password: {
        type: Sequelize.STRING,
        allowNull:false
    },
});

// ---------------------------------------------------------------------

// // Class Method
// Product.associate = function () { console.log('calls function') };
// // Instance Method
// Product.prototype.someMethod = function () { console.log('instance function') }
// Product.abs = 'abc'

// ---------------------------------------------------------------------

module.exports = User