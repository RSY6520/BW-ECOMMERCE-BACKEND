const { DataTypes } = require('sequelize');
const { sequelize } = require('./../connection');

const Order = sequelize.define("Order", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'Id'
    },
    orderDescription: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "OrderDescription"
    }
},{
    freezeTableName: true,
    createdAt: true,
    updatedAt: false
});

module.exports = Order;