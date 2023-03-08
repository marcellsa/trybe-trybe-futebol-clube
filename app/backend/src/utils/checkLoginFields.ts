import * as Joi from 'joi';

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const checkLoginFields = (email: string, password: string) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    return 'All fields must be filled';
  }
};

export default checkLoginFields;
