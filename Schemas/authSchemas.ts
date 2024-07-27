import { object, ref, string } from 'yup';

export type IAuthSchemas =
  | 'loginSchema'
  | 'SignupSchema'
  | 'ForgetPasswordSchema';

export const loginSchema = object({
  username: string().max(5).required(),
  password: string().min(5).required(),
});

export const SignupSchema = object({
  first_name: string().required(),
  last_name: string().required(),
  email: string().email().required(),
  password: string().min(6).required(),
  password_confirm: string().oneOf([ref('password')]),
});

export const ForgetPasswordSchema = object({
  email: string().email().required(),
});
