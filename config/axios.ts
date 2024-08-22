import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { getI18n } from 'react-i18next';
import { observer } from '@/Utils/observer';

import environment from '@/Utils/enviroment';

import { IServerResponse } from '@/types';
import { deleteItemAsync, getItem } from 'expo-secure-store';
import { router } from 'expo-router';
import { useAuthStore } from '@/stores/AuthStore';
import enviroment from '@/Utils/enviroment';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: environment.Api_Base_Url ?? '',
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getItem(environment.Token_Key);
  const url = (config.url as string).replace(/[\d/]/g, '');
  config.headers['Default-Language'] = getI18n().language;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
axiosInstance.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    const { method, url } = response.config;
    if (method !== 'get') {
      const res = response.data as IServerResponse<any>;
      observer.fire('notify', {
        type: 'success',
        text1: res.status,
        text2: res.message,
      });
    }
    return response.data;
  },
  async (error: any) => {
    const errorData = error.response.data as IServerResponse<any>;
    if (errorData.statusCode === 401 || errorData.statusCode === 403) {
      await deleteItemAsync(enviroment.Token_Key);
      router.replace('/(auth)/login');
    } else {
      observer.fire('notify', {
        type: 'error',
        text1: errorData.message,
        text2: errorData.status,
      });
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
