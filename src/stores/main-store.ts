import { defineStore } from 'pinia';
import { User } from 'src/types/user';

export const useMainStore = defineStore('main', {
  state: () => ({
    user: {} as User,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user.id,
  },
  actions: {
    setUser(user: User) {
      this.user = user;
    },
  },
});
