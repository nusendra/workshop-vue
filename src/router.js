import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Binding from '@/views/Binding.vue';
import Computed from '@/views/Computed.vue';
import Conditional from '@/views/Conditional.vue';
import List from '@/views/List.vue';
import Event from '@/views/Event.vue';

import Login from '@/views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'login' },
      component: Login,
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/binding',
      name: 'binding',
      component: Binding,
    },
    {
      path: '/computed',
      name: 'computed',
      component: Computed,
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: Conditional,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/event',
      name: 'event',
      component: Event,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
