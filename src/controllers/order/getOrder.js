const Order = require("../../db/models/order");
const throwError = require("../../utils/throwError");
const { validateId } = require("../../validation/order/validateId");

const getOrder = async (id) => {
    const {error, value} = validateId({id});
    if(error) {
        throwError("Please provide valid data!");
    }
    const order = await Order.findOne({
        where: { id }
    });
    if(!order) {
        throwError("order not found");
    }
    return order;
}

module.exports = getOrder;

