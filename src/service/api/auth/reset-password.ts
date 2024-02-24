import { api } from 'boot/axios';
import { ResetPasswordPayload } from 'src/types/auth/reset-password';

export const resetPassword = async (payload: ResetPasswordPayload) => {
  await api.post('/auth/reset-password', payload);
};
