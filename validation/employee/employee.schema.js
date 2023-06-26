const joi = require("@hapi/joi")

const Schema = {
    employee: joi.object({
        name: joi.string().max(100).required(),
        designation: joi.string().max(100).optional(),
        email: joi.string().email().required(),
        phone: joi.number().integer().min(1000000000).message("invalid mobile number").max(9999999999).message("invalid mobile number").required(),
        age: joi.number().required()
    })
};
module.exports = Schema;