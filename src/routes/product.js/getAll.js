const getAllProducts = require('../../controllers/product/getAllProducts');

const getAll = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json({ payload: products });
    } catch (error) {
        res.status(400).json({ message: error.message });        
    }
}

module.exports = getAll;

