const joi = require('joi');

const validateCreateParams = (data) => {
    const schema = joi.object({
        orderDescription: joi.string().required(),
        productIds: joi.array().min(1).required()
    }).required();

    return schema.validate(data);
}

module.exports = { validateCreateParams };