import { RegisterPayload } from 'src/types/auth/register';
import { LoginPayload } from 'src/types/auth/login';
import { User } from 'src/types/user';
import { ForgotPasswordPayload } from 'src/types/auth/forgot-password';
import { ResetPasswordPayload } from 'src/types/auth/reset-password';

export interface Auth {
  checkAuth: () => Promise<User>;
  register: <T>(payload: RegisterPayload) => Promise<User>;
  login: <T>(payload: LoginPayload) => Promise<User>;
  forgotPassword: <T>(payload: ForgotPasswordPayload) => Promise<void>;
  resetPassword: <T>(payload: ResetPasswordPayload) => Promise<void>;
}
