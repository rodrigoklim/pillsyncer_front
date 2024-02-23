import { api } from 'boot/axios';

export const csrf = async () => {
  await api.get('/sanctum/csrf-cookie');
};
