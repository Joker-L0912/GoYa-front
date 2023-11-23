import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/', // 程序启动默认路由
    component: () => import('@/layouts/default/View.vue'),
    meta: { title: '整体页面布局' },
    redirect: '/Home', // 重定向到首页
    children: [
      {
        path: '/Home',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/issue',
        component: () => import('@/views/Issue/index.vue'),
        meta: { title: '一级菜单1' },
        redirect: '/issue/list', // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
        children: [
          {
            path: 'list',
            component: () => import('@/views/Issue/list.vue'),
            meta: { title: '二级菜单1-1' },
          },
          {
            path: 'dashboard',
            component: () => import('@/views/Issue/dashboard.vue'),
            meta: { title: 'dashboard' },
          },
          {
            path: ':name',
            component: () => import('@/views/Issue/detail.vue'),
            meta: { title: 'detail' },
          },
        ],
      },
    ],
  },
  {
    path: '/login', // 登录页面
    component: () => import('@/views/Login/Login.vue'),
    meta: { title: '登录' },
  },
  {
    path: '/:pathMatch(.*)',
    meta: {
      title: '找不到页面',
    },
    component: () => import('@/views/exception/error.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
