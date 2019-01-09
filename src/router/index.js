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

import Profile from '@/components/profile.vue'
import Posts from '@/components/posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/helloworld',
      name: 'hello',
      component: Hellowrold
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
      },
      children: [
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
      ]
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})