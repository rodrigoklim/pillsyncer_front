import { i18n } from 'boot/i18n';

export const loginRoute = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
    meta: {
      title: i18n.global.t('words.login'),
    },
  },
];
