import api from 'src/service/api';
import { logger } from 'src/composables/logger';
import { RegisterPayload } from 'src/types/auth/register';
import { useMainStore } from 'stores/main-store';
import { User } from 'src/types/user';

export default {
  async registerUser(payload: RegisterPayload) {
    try {
      this.loading = true;
      const response = await api.auth.register(payload);
      const mainStore = useMainStore();

      mainStore.setUser(response as User);
      localStorage.setItem('token', response.token);
    } catch (error: any) {
      if (error.response.status === 422) {
        this.errorResponse = error.response.data.message
          .replace('messages.', '')
          .split(' ')[0];
      } else {
        this.errorResponse = 'unknwon_error';
      }
      logger('error', 'undefined', 'RegisterFailure', error);
    } finally {
      this.loading = false;
    }
  },
};
