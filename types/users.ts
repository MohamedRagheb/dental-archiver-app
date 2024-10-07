// Types
import type { IMediaResource } from '@/types/index';

export interface IUser {
  id: number | undefined;
  first_name: string;
  last_name: string;
  email: string;
  is_verified: boolean;
  avatar: IMediaResource;
  created_at: string;
  updated_at: string;
}
