const { DataTypes } = require('sequelize');
const { sequelize } = require('./../connection');


const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'Id'
    },
    productName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: "ProductName"
    },
    productDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "ProductDescription"
    }
},{
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
});

module.exports = Product;