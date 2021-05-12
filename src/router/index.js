import Vue from 'vue'
import Router from 'vue-router'
import Hellowrold from '@/view/Helloworld.vue'
import Home from '@/view/Home.vue'
import Basic from '@/view/Basic.vue'
import Form from '@/view/Form.vue'
import Event from '@/view/Event.vue'
import NotFound from '@/view/404.vue'
import Components from '@/view/components.vue'
import Transition from '@/view/transition.vue'
import User from '@/view/user.vue'
import DynamicRouter from '@/view/dynamicRouter.vue'
import UserHome from '@/view/userHome.vue'

import Profile from '@/components/profile.vue'
import Posts from '@/components/posts'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/helloworld',
          name: 'hello',
          component: Hellowrold,
          beforeEnter: (to, from, next) => {
            console.log('执行路由独享守卫')
            next()
          }
        }
      ]
    },
    // {
    //   path: '/helloworld',
    //   name: 'hello',
    //   component: Hellowrold
    // },
    {
      path: '/dynamicRouter/:id',
      name: 'dynamicRouter',
      props: true,
      component: () => import('../view/dynamicRouter.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: 'dynamicRouter',
          component: UserHome
        },
        {
          path: 'profile',
          name: 'dyProfile',
          component: Profile
        },
        {
          path: 'posts',
          name: 'dyPosts',
          component: Posts
        }
      ]
    },
    {
      path: '/basic',
      name: 'basic',
      component: Basic
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/component',
      name: 'component',
      component: Components
    },
    {
      path: '/event',
      name: 'event',
      alias: '/vueevent',
      component: Event
    },
    {
      path: '/transition',
      name: 'transition',
      component: Transition
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: User,
        posts: Posts,
        profile: Profile
      }
      /* children: [
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
          path: 'posts',
          name: 'posts',
          component: Posts
        }
      ] */
    },
    {
      path: '/vuex-demo',
      name: 'vuexDemo',
      component: () => import('@/view/vuexDemo.vue')
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    return savedPosition
  }
})

// 全局前置导航守卫
router.beforeEach((to, from, next) => {
  console.log('to', to)
  console.log('to', from)
  console.log('执行全局前置守卫')

  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('has meta')
  }

  next()
})

router.beforeResolve((to, from, next) => {
  console.log('执行全局解析守卫')

  next()
})

router.afterEach((to, from) => {
  console.log('执行全局后置守卫')
})

export default router
