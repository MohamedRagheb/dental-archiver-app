export * from './users';

export interface IServerResponse<T> {
  message: any;
  errors: any;
  status: string;
  statusCode: number;
  data?: T;
}

export interface IMediaResource {
  id: number;
  url: string;
  name: string;
  created_at: string;
}

export type TLocales = 'en' | 'ar';

export interface IGenericTransparent<T> {}
