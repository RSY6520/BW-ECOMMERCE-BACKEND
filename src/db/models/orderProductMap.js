const { DataTypes } = require('sequelize');
const { sequelize } = require('./../connection');


const OrderProductMap = sequelize.define("OrderProductMap", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        field: 'Id'
    },
    orderId: {
        type: DataTypes.INTEGER,
        references: {
            model: "Order",
            key: "Id"
        },
        allowNull: false,
        field: "OrderId"
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: "Product",
            key: "Id"
        },
        allowNull: false,
        field: "ProductId"
    }
},{
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = OrderProductMap;