import type { NavigationGuard, NavigationGuardNext } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Piece from '@/pages/Piece.vue'

import PieceList from '@/pages/PieceList.vue'
import PieceEdit from '@/pages/PieceEdit.vue'
import Auth from '@/pages/Auth.vue'
import { useUserStore } from '@/store/user'

export const ROUTE_NAME = {
  home: 'Home',
  auth: 'Auth',
  piece: 'Pieces',
  pieceList: 'Pieces/List',
  pieceEdit: 'Piece/Edit',
  // pieceView: 'Piece/View',
}

type UserStatus = 'authorized' | 'anonym' | 'all'

const getRouterAuthGuard = (status: UserStatus = 'all'): NavigationGuard => {
  return async(_, __, next: NavigationGuardNext) => {
    const userStore = useUserStore()
    if (!userStore.isUserChecked)
      await userStore.checkUser()

    if (status === 'all') {
      next()
      return
    }

    if (status === 'authorized') {
      if (userStore.user)
        next()

      else
        next({ name: ROUTE_NAME.auth })
    }
    else if (status === 'anonym') {
      if (userStore.user)
        next({ name: ROUTE_NAME.home })

      else
        next()
    }
  }
}

const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      name: ROUTE_NAME.home,
      path: '/',
      component: Home,
      beforeEnter: getRouterAuthGuard(),
    },

    {
      name: ROUTE_NAME.piece,
      path: '/piece',
      component: Piece,
      beforeEnter: getRouterAuthGuard('authorized'),
      children: [
        {
          name: ROUTE_NAME.pieceList,
          path: 'list',
          component: PieceList,
        },
        {
          name: ROUTE_NAME.pieceEdit,
          path: 'edit/:id',
          component: PieceEdit,
        },
      ],
    },

    {
      name: ROUTE_NAME.auth,
      path: '/auth',
      component: Auth,
      beforeEnter: getRouterAuthGuard('anonym'),
    },
  ],
})

export {
  router,
}
