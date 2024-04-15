import api from 'src/service/api';
import { logger } from 'src/composables/logger';
import { forgotPasswordPayload } from 'src/types/auth/forgot-password';

export default {
  async forgotPassword(payload: forgotPasswordPayload) {
    try {
      this.loading = true;

      await api.auth.forgotPassword(payload);
      this.successResponse = 'forgotPassword.messages.success_message';
    } catch (error: any) {
      this.errorResponse = 'invalid_email';
      logger('error', 'undefined', 'ForgotPasswordFailure', error);
    } finally {
      this.loading = false;
    }
  },
};
