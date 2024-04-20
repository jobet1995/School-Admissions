import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('./components/authen/Login.vue')
  },
  {
    path: '/logout',
    component: () => import('./components/authen/Logout.vue')
  },
  {
    path: '/resetPassword',
    component: () => import('./components/authen/ResetPassword.vue')
  },
  {
    path: '/changePassword/:token',
    component: () => import('./components/authen/ChangePassword.vue')
  },
  {
    path: '/',
    component: () => import('./components/Default.vue')
  },
  {
    path: '/home',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/profile',
    component: () => import('./components/Profile.vue')
  },
  {
    path: '/userAccount',
    name: 'userAccount',
    component: () => import('./components/userAccount/index.vue')
  },
  {
    path: '/userAccount/create',
    component: () => import('./components/userAccount/create.vue')
  },
  {
    path: '/userAccount/:id/',
    component: () => import('./components/userAccount/detail.vue')
  },
  {
    path: '/userAccount/edit/:id/',
    component: () => import('./components/userAccount/edit.vue')
  },
  {
    path: '/userAccount/delete/:id/',
    component: () => import('./components/userAccount/delete.vue')
  },
  {
    path: '/student',
    name: 'student',
    component: () => import('./components/student/index.vue')
  },
  {
    path: '/student/create',
    component: () => import('./components/student/create.vue')
  },
  {
    path: '/student/:id/',
    component: () => import('./components/student/detail.vue')
  },
  {
    path: '/student/edit/:id/',
    component: () => import('./components/student/edit.vue')
  },
  {
    path: '/student/delete/:id/',
    component: () => import('./components/student/delete.vue')
  },
  {
    path: '/course',
    name: 'course',
    component: () => import('./components/course/index.vue')
  },
  {
    path: '/course/create',
    component: () => import('./components/course/create.vue')
  },
  {
    path: '/course/:id/',
    component: () => import('./components/course/detail.vue')
  },
  {
    path: '/course/edit/:id/',
    component: () => import('./components/course/edit.vue')
  },
  {
    path: '/course/delete/:id/',
    component: () => import('./components/course/delete.vue')
  },
  {
    path: '/applications',
    name: 'applications',
    component: () => import('./components/applications/index.vue')
  },
  {
    path: '/applications/create',
    component: () => import('./components/applications/create.vue')
  },
  {
    path: '/applications/:id/',
    component: () => import('./components/applications/detail.vue')
  },
  {
    path: '/applications/edit/:id/',
    component: () => import('./components/applications/edit.vue')
  },
  {
    path: '/applications/delete/:id/',
    component: () => import('./components/applications/delete.vue')
  },
  {
    path: '/userRole',
    name: 'userRole',
    component: () => import('./components/userRole/index.vue')
  },
  {
    path: '/userRole/create',
    component: () => import('./components/userRole/create.vue')
  },
  {
    path: '/userRole/:userId/:roleId/',
    component: () => import('./components/userRole/detail.vue')
  },
  {
    path: '/userRole/edit/:userId/:roleId/',
    component: () => import('./components/userRole/edit.vue')
  },
  {
    path: '/userRole/delete/:userId/:roleId/',
    component: () => import('./components/userRole/delete.vue')
  },
  {
    path: '/admissionDecision',
    name: 'admissionDecision',
    component: () => import('./components/admissionDecision/index.vue')
  },
  {
    path: '/admissionDecision/create',
    component: () => import('./components/admissionDecision/create.vue')
  },
  {
    path: '/admissionDecision/:id/',
    component: () => import('./components/admissionDecision/detail.vue')
  },
  {
    path: '/admissionDecision/edit/:id/',
    component: () => import('./components/admissionDecision/edit.vue')
  },
  {
    path: '/admissionDecision/delete/:id/',
    component: () => import('./components/admissionDecision/delete.vue')
  },
  {
    path: '/enrollment',
    name: 'enrollment',
    component: () => import('./components/enrollment/index.vue')
  },
  {
    path: '/enrollment/create',
    component: () => import('./components/enrollment/create.vue')
  },
  {
    path: '/enrollment/:id/',
    component: () => import('./components/enrollment/detail.vue')
  },
  {
    path: '/enrollment/edit/:id/',
    component: () => import('./components/enrollment/edit.vue')
  },
  {
    path: '/enrollment/delete/:id/',
    component: () => import('./components/enrollment/delete.vue')
  },
  {
    path: '/program',
    name: 'program',
    component: () => import('./components/program/index.vue')
  },
  {
    path: '/program/create',
    component: () => import('./components/program/create.vue')
  },
  {
    path: '/program/:id/',
    component: () => import('./components/program/detail.vue')
  },
  {
    path: '/program/edit/:id/',
    component: () => import('./components/program/edit.vue')
  },
  {
    path: '/program/delete/:id/',
    component: () => import('./components/program/delete.vue')
  },
  {
    path: '/:path(.*)',
    component: () => import('./components/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router