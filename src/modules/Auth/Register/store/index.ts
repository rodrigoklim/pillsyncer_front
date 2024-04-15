import { defineStore } from 'pinia';
import actions from './actions';
import getters from './getters';
import state from './state';

export const useRegisterStore = defineStore('register', {
  state,
  getters,
  actions,
});
