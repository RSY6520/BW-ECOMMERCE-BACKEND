const createOrder = require("../../controllers/order/createOrder");

async function create (req, res, next) {
    try {
        const order = await  createOrder(req.body);
        res.status(201).json({ payload: order });
    } catch (error) {
        res.status(400).json({message: error.message});      
    }
}

module.exports = create;

