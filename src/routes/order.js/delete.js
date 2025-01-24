const deleteOrder = require('../../controllers/order/deleteOrder');

const delOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await deleteOrder(id);
        res.json({ payload: deletedOrder });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = delOrder;

