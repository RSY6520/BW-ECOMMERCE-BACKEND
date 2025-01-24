const joi = require('joi');

const validateQueryParams = (data) => {
    const schema = joi.object({
        searchKey: joi.string().allow("").allow(null),
    }).required();

    return schema.validate(data);
}

module.exports = { validateQueryParams };