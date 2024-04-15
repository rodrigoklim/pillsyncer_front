import { api } from 'boot/axios';
import { GenericResponse } from 'src/service/types/generic-response';
import { User } from 'src/types/user';

export const checkAuth = async () => {
  const { data } = await api.get<GenericResponse<User>>('/user');

  return data.data as User;
};
