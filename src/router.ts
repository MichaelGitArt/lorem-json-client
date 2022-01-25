import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Auth from '@/pages/Auth.vue'
import { userStore } from '@/store/user'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
      beforeEnter: (_, __, next) => {
        if (!userStore.value.user)
          next('/auth')

        next()
      },
    },
    {
      name: 'Auth',
      path: '/auth',
      component: Auth,
      beforeEnter: (_, __, next) => {
        if (userStore.value.user)
          next('/')

        next()
      },
    },
  ],
})

export {
  router,
}
