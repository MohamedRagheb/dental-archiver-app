// zustand
import { create } from 'zustand';

// Types
import { IServerResponse, IUser } from '@/types';

// Http Handlers
import { $http } from '@/api';

// Secure Store
import { deleteItemAsync, setItemAsync, getItem } from 'expo-secure-store';
import enviroment from '@/Utils/enviroment';
import { router } from 'expo-router';

type State = {
  token: string | null;
  userData: IUser | null;
};

type Action = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getUserData: () => Promise<void>;
  setUserData: (data: State) => void;
};

export const useAuthStore = create<State & Action>((set, get) => ({
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
  async logout() {
    await deleteItemAsync(enviroment.Token_Key);
    set({ token: null, userData: null });
    router.replace('/(auth)/login');
  },
  async getUserData() {
    try {
      const { data } = await $http.get<IServerResponse<IUser>>({
        url: 'auth/profile',
      });
      set((state) => ({ ...state, userData: data }));
    } catch (error) {}
  },
  setUserData(newData) {
    set(newData);
  },
}));
