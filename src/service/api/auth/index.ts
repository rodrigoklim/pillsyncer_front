import { register } from 'src/service/api/auth/register';
import { csrf } from 'src/service/api/auth/csrf';
import { login } from 'src/service/api/auth/login';
import { forgotPassword } from 'src/service/api/auth/forgot-password';
import { resetPassword } from 'src/service/api/auth/reset-password';

export default {
  csrf,
  login,
  register,
  forgotPassword,
  resetPassword,
};
