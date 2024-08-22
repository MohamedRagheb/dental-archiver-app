export * from './users';

export interface IServerResponse<T> {
  message: any;
  errors: any;
  status: string;
  statusCode: number;
  data?: T;
}

export type TLocales = 'en' | 'ar';
