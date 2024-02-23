import { defineStore } from 'pinia';
import actions from './actions';
import getters from './getters';
import state from './state';

export const useForgotPasswordStore = defineStore('forgotPassword', {
  state,
  getters,
  actions,
});
