import type { RouteRecordRaw } from 'vue-router';
import { REDIRECT_ROUTE_NAME } from '@renderer/router/constants';

export const DEFAULT_LAYOUT = () =>
  import('@renderer/layout/default-layout.vue');

export const REDIRECT_MAIN: RouteRecordRaw = {
  path: '/redirect',
  name: 'redirectWrapper',
  component: DEFAULT_LAYOUT,
  meta: {
    requiresAuth: true,
    hideInMenu: true,
  },
  children: [
    {
      path: '/redirect/:path',
      name: REDIRECT_ROUTE_NAME,
      component: () => import('@renderer/views/redirect/index.vue'),
      meta: {
        requiresAuth: true,
        hideInMenu: true,
      },
    },
  ],
};

export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  component: () => import('@renderer/views/not-found/index.vue'),
};
