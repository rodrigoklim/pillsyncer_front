import { api } from 'boot/axios';

export const logout = async () => {
  await api.post('/auth/logout');
};
