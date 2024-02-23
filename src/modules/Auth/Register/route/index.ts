import { i18n } from 'boot/i18n';

export const registerRoute = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterPage.vue'),
    meta: {
      title: i18n.global.t('words.register'),
    },
  },
];
