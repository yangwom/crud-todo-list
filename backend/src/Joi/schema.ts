import Joi from 'joi';

const schemaUser =  Joi.object({
	name: Joi.string().min(3).max(10).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(16).required(),
});

export default schemaUser;