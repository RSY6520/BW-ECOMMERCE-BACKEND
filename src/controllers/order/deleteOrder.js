const Order = require('../../db/models/order');
const { validateDeleteParams } = require('../../validation/order/validateDeleteParams');
const throwError = require('../../utils/throwError');

const deleteOrder = async (id) => {
    const {error, value} = validateDeleteParams({id});
    if(error) {
        throwError("Please provide valid data!")
    }
    const order = await Order.findByPk(id);
    if(!order) {
        throwError("order not found");
    }
    const deletedOrder = await Order.destroy({
        where: { id }
    });
    return deletedOrder;
}

module.exports = deleteOrder;

