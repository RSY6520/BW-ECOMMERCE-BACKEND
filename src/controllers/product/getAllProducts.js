const Product = require("../../db/models/product");


const getAllProducts = async () => {
        const products = await Product.findAll();
        return products;
}

module.exports = getAllProducts;

