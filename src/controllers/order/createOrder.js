const Order = require('../../db/models/order');
const OrderProductMap = require('../../db/models/orderProductMap');
const { validateCreateParams } = require('../../validation/order/validateCreateParams');
const throwError = require('../../utils/throwError');

const createOrder = async (data) => {
    const { error, value } = validateCreateParams(data);
    if(error) {
        throwError("Please provide sufficient data");
    }
    const { orderDescription, productIds } = data;
    const order =  Order.build({
        orderDescription
    });
    await order.save();
    productIds.forEach(async productId => {
        const map = OrderProductMap.build({
            orderId: order.id,
            productId
        });
        await map.save();
    });
    return {...order.dataValues, productCount: productIds.length};
}

module.exports = createOrder;

