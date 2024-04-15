import { boot } from 'quasar/wrappers';
import { MainLayoutModule } from 'layouts/MainLayout';
import { LoginModule } from 'src/modules/Auth/Login';
import { ForgotPasswordModule } from 'src/modules/Auth/ForgotPassword';
import { RegisterModule } from 'src/modules/Auth/Register';
import { ResetPasswordModule } from 'src/modules/Auth/ResetPassword';

export default boot(({ router }) => {
  // auth  //
  const mainLayoutModule = new MainLayoutModule();
  mainLayoutModule.install();

  const loginModule = new LoginModule(router);
  loginModule.install();

  const forgotPasswordModule = new ForgotPasswordModule(router);
  forgotPasswordModule.install();

  const registerModule = new RegisterModule(router);
  registerModule.install();

  const resetPasswordModule = new ResetPasswordModule(router);
  resetPasswordModule.install();
});
