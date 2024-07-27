// zustand
import { create } from 'zustand';

// Types
import { IUser } from '@/types';

// Http Handlers
import { $http } from '@/api';

// Secure Store
import { setItemAsync } from 'expo-secure-store';
import enviroment from '@/Utils/enviroment';

type State = {
  token: string | null;
  userData: IUser | null;
};

type Action = {
  login: (email: string, password: string) => Promise<void>;
};

export const useAuthStore = create<State & Action>((set) => ({
  token: null,
  userData: null,
  async login(email, password) {
    const { data } = await $http.post<{ data: IUser & { token: string } }>({
      url: 'auth/login',
      data: { email, password },
    });
    const { token, ...restUserData } = data;
    await setItemAsync(enviroment.Token_Key, token);
    set({ token: data.token, userData: restUserData });
  },
}));
