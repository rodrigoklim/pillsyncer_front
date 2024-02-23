import { i18n } from 'boot/i18n';

export const resetPasswordRoute = [
  {
    path: '/password-reset/:token',
    name: 'ResetPassword',
    component: () => import('../views/ResetPasswordPage.vue'),
    meta: {
      title: i18n.global.t('words.resetPassword'),
    },
  },
];
