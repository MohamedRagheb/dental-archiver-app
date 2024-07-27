import * as AuthSchemas from './authSchemas';

import { ObjectSchema } from 'yup';

export type ISchemasName = AuthSchemas.IAuthSchemas;

export type ISchema = Record<ISchemasName, ObjectSchema<any>>;

const SchemasObject: ISchema = {
  ...AuthSchemas,
};

export default function getSchema(
  schemaName: keyof ISchema
): ObjectSchema<any> {
  return SchemasObject[schemaName];
}
