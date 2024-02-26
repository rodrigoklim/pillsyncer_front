import { RouteRecordRaw } from 'vue-router';
import { useMainStore } from 'stores/main-store';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'MainLayout',
    component: () => import('layouts/MainLayout/views/MainLayout.vue'),
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      const mainStore = useMainStore();
      if (!mainStore.isLoggedIn && !localStorage.getItem('token')) {
        return next('/login');
      }

      return next();
    },
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '',
    name: 'AuthLayout',
    component: () => import('src/modules/Auth/AuthLayout.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
