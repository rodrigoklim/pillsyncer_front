import { api } from 'boot/axios';
import { ForgotPasswordPayload } from 'src/types/auth/forgot-password';

export const forgotPassword = async (payload: ForgotPasswordPayload) => {
  await api.post('/api/auth/forgot-password', payload);
};
