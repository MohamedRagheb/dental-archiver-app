// singleton class
import axiosInstance from '../config/axios';
import type { AxiosRequestConfig } from 'axios';

type TUrl = { url: string };
type TGet = TUrl & { query?: { [key: string]: any } };
type TPost = TUrl & {
  data: { [key: string]: any } | FormData;
} & AxiosRequestConfig<any>;

interface IHttp {
  get<T>({ url, query }: TGet): Promise<T>;
  delete<T>({ url }: TUrl): Promise<T>;
  post<T>(arg: TPost): Promise<T>;
  put<T>(arg: TPost): Promise<T>;
}

class Http implements IHttp {
  private static instance: Http | null = null;

  static getInstance(): Http {
    if (!Http.instance) {
      Http.instance = new Http();
    }
    return Http.instance;
  }

  get<T>({ url, query }: TGet): Promise<T> {
    return axiosInstance({
      url,
      params: { ...query },
      method: 'get',
    });
  }

  post<T>({ url, data, ...rest }: TPost): Promise<T> {
    return axiosInstance({
      url,
      data,
      method: 'post',
      ...rest,
    });
  }
  put<T>({ url, data }: TPost): Promise<T> {
    return axiosInstance({
      url,
      data,
      method: 'put',
    });
  }
  delete<T>({ url }: TUrl): Promise<T> {
    return axiosInstance({
      url,
      method: 'delete',
    });
  }
}

export const $http = Http.getInstance();
