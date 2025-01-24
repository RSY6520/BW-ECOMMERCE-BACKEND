const getAllOrders = require('../../controllers/order/getAllOrders');

const getAll = async (req, res) => {
    try {
        const { searchKey } = req.query;
        const orders = await getAllOrders({ searchKey });
        res.json({ payload: orders });
    } catch (error) {
        res.status(400).json({ message: error.message });        
    }
}

module.exports = getAll;

