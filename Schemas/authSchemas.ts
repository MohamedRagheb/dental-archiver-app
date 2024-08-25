import { number, object, ref, string } from 'yup';

export type IAuthSchemas =
  | 'loginSchema'
  | 'SignupSchema'
  | 'ForgetPasswordSchema'
  | 'EditProfileSchema';

export const loginSchema = object({
  username: string().min(5).required(),
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
  code: string().when(['step'], {
    is: (step: number) => step > 1,
    then: (schema) => schema.required(),
    otherwise: (_) => _,
  }),
  password: string().when(['step'], {
    is: (step: number) => step > 2,
    then: (schema) => schema.min(6).required(),
    otherwise: (_) => _,
  }),
  password_confirm: string()
    .equals([ref('password')])
    .when(['step'], {
      is: (step: number) => step > 2,
      then: (schema) => schema.required(),
      otherwise: (_) => _,
    }),
});

export const EditProfileSchema = object({
  first_name: string().required(),
  last_name: string().required(),
});
