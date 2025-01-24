const Order = require('../../db/models/order');
const throwError = require('../../utils/throwError');
const { validateId } = require('../../validation/order/validateId');
const { validateUpdateData } = require('../../validation/order/validateUpdateData');

const updateOrder = async (id, data) => {
    var { error, value } = validateId({id});
    if(error) {
        throwError("Please provide valid data");
    }
    var {error, value} = validateUpdateData({data});
    if(!data?.orderDescription) {
        throwError("Please provide valid data");
    }
    const { orderDescription } = data;
    const order = await Order.findByPk(id);
    if(!order) {
        throwError("order not found");
    }
    order.set({ orderDescription });
    await order.save();
    return order;
}

module.exports = updateOrder;

