const Joi = require('joi')

const createUserSchema = Joi.object({
    name: Joi.string().min(5).max(30).required(),
    age: Joi.number().required(),
    role: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required()
})
const logInSchema = Joi.object({
    email: Joi.string().email().required(),
    password:Joi.string().min(6).max(15).required()
})

module.exports = {createUserSchema, logInSchema}