import { register } from 'src/service/api/auth/register';
import { login } from 'src/service/api/auth/login';
import { forgotPassword } from 'src/service/api/auth/forgot-password';
import { resetPassword } from 'src/service/api/auth/reset-password';
import { checkAuth } from 'src/service/api/auth/check-auth';
import { logout } from 'src/service/api/auth/logout';

export default {
  login,
  logout,
  register,
  forgotPassword,
  resetPassword,
  checkAuth,
};
