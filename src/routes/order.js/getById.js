const getOrder = require('../../controllers/order/getOrder');
const Order = require('../../db/models/order');

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await getOrder(id);
        res.json({ payload: order });
    } catch (error) {
        res.status(400).json({ message: error.message });        
    }
}

module.exports = getById;

