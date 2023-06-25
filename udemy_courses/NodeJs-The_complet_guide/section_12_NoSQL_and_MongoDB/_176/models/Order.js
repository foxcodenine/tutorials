const Sequelize = require('sequelize');

const sequelize = require('../util/_sequilize_database.js');

// ---------------------------------------------------------------------

const Order = sequelize.define('order', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    quantity: Sequelize.INTEGER,
});

// ---------------------------------------------------------------------

module.exports = Order;