const { Op } = require('sequelize');
const Order = require('../../db/models/order');
const OrderProductMap = require('../../db/models/orderProductMap');
const { validateQueryParams } = require('../../validation/order/validateQueryParams');
const throwError = require('../../utils/throwError');

const getAllOrders = async (data) => {
        const {error, value} = validateQueryParams(data);
        if(error) {
                throwError("Please provide valid data");
        }
        const { searchKey } = data;

        const whereCondition = {}
        if(searchKey) {
                whereCondition.orderDescription = { [Op.iLike]: `%${searchKey}%`}
        }
        let orders = await Order.findAll({
                where: whereCondition
        });
        orders = await Promise.all(orders.map(async (order) => {
                const products = await OrderProductMap.findAll({
                        where: { orderId: order.dataValues.id }
                });
                return { ...order.dataValues, productCount: products.length }
        }))
        return orders;
}

module.exports = getAllOrders;

