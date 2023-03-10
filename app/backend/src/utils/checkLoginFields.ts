import * as Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
});

const checkLoginFields = (email: string, password: string) => {
  const { error } = loginSchema.validate({ email, password });
  return error;
};

export default checkLoginFields;
