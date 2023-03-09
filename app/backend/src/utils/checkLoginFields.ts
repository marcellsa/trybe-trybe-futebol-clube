import * as Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(6).required(),
});

const checkLoginFields = (email: string, password: string) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    return 'All fields must be filled';
  }
};

export default checkLoginFields;
