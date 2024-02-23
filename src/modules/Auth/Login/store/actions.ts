import api from 'src/service/api';
import { logger } from 'src/composables/logger';
import { useMainStore } from 'stores/main-store';
import { User } from 'src/types/user';
import { LoginPayload } from 'src/types/auth/login';

export default {
  async loginUser(payload: LoginPayload) {
    try {
      this.loading = true;
      const response = await api.auth.login(payload);
      const mainStore = useMainStore();

      mainStore.setUser(response as User);
    } catch (error: any) {
      if (error.response.status === 422) {
        this.errorResponse = 'credentials_error';
      } else {
        this.errorResponse = 'unknown_error';
      }
      logger('error', 'undefined', 'LoginFailure', error);
    } finally {
      this.loading = false;
    }
  },
};
