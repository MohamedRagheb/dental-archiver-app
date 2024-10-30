import type { IMediaResource, IUser } from '@/types';

export interface IPatient {
  first_name: string;
  last_name: string;
  age: number;
  slug: string;
  user: IUser;
  media: IMediaResource[];
  created_at: string;
  updated_at: string;
}
