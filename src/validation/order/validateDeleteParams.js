const joi = require('joi');

const validateDeleteParams = (data) => {
    const schema = joi.object({
        id: joi.number().required(),
    }).required();

    return schema.validate(data);
}

module.exports = { validateDeleteParams };