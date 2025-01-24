const updateOrder = require("../../controllers/order/updateOrder");

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedOrder = await updateOrder(id, req.body);
        res.json({ payload: updatedOrder });
    } catch (error) {
        res.status(400).json({ message: error.message });      
    }
}

module.exports = update;

