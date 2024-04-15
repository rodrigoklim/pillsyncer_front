import { api } from 'boot/axios';
import { GenericResponse } from 'src/service/types/generic-response';
import { User } from 'src/types/user';
import { LoginPayload } from 'src/types/auth/login';

export const login = async (payload: LoginPayload) => {
  const { data } = await api.post<GenericResponse<User>>(
    '/auth/login',
    payload,
  );

  return data.data as User;
};
