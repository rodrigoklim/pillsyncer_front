import { api } from 'boot/axios';
import { GenericResponse } from 'src/service/types/generic-response';
import { User } from 'src/types/user';
import { RegisterPayload } from 'src/types/auth/register';

export const register = async (payload: RegisterPayload) => {
  const { data } = await api.post<GenericResponse<User>>(
    '/auth/register',
    payload,
  );

  return data.data as User;
};
