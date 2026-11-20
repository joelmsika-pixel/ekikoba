import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Authentication/mobile-view/register_mobile.vue'
import Login from '../components/Authentication/mobile-view/login_mobile.vue'
import ForgotPassword from '../components/Authentication/Desktop-view/forgot-password.vue'
import DashboardDesktop from '../components/dashboard/Desktop-view/dash_desktop.vue'
import DashboardMobile from '../components/dashboard/mobile-view/dash_mobile.vue'
import MyMchezoMobile from '../components/dashboard/mobile-view/sub components mobile/my_mchezo.vue'
import MchezoScheduleMobile from '../components/dashboard/mobile-view/sub components mobile/my_mchezo_schedule.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardDesktop,
    },
    {
      path: '/dashboard-mobile',
      name: 'dashboard-mobile',
      component: DashboardMobile,
      meta: { showMobileBottomNav: true },
    },
    {
      path: '/mchezo-schedule-mobile',
      name: 'mchezo-schedule-mobile',
      component: MchezoScheduleMobile,
      meta: { showMobileBottomNav: true },
    },
    {
      path: '/my-mchezo-mobile',
      name: 'my-mchezo-mobile',
      component: MyMchezoMobile,
      meta: { showMobileBottomNav: true },
    },
    {
      path: '/legal-policies',
      name: 'legal-policies',
      component: DashboardMobile,
      meta: { showMobileBottomNav: true },
    },
  ],
})

export default router
