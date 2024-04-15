import { i18n } from 'boot/i18n';

export const forgotPasswordRoute = [
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPasswordPage.vue'),
    meta: {
      title: i18n.global.t('words.login'),
    },
  },
];
