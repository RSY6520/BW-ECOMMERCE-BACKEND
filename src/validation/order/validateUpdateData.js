const joi = require('joi');

const validateUpdateData = (data) => {
    const schema = joi.object({
        orderDescription: joi.string().required(),
    });

    return schema.validate(data);
}

module.exports = { validateUpdateData };