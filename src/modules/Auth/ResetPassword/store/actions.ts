import api from 'src/service/api';
import { logger } from 'src/composables/logger';
import { Notify } from 'quasar';
import { ResetPasswordPayload } from 'src/types/auth/reset-password';
import { i18n } from 'boot/i18n';

export default {
  async resetPassword(payload: ResetPasswordPayload) {
    try {
      this.loading = true;
      await api.auth.resetPassword(payload);

      Notify.create({
        message: i18n.global.t('messages.reset_password_success'),
        color: 'positive',
        position: 'top',
        icon: 'check',
      });
    } catch (error: any) {
      if (error.response.status === 422) {
        const response = error.response.data.message
          .replace('messages.', '')
          .split(' ');

        if (response.legnth === 1) {
          this.errorResponse = error.response.data.message.replace(
            'messages.',
            '',
          );
        } else {
          this.errorResponse = error.response.data.message;
        }
      } else {
        this.errorResponse = 'unknwon_error';
      }
      logger('error', 'undefined', 'ResetPasswordFailure', error);
    } finally {
      this.loading = false;
    }
  },
};
