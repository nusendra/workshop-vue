import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Binding from '@/views/Binding.vue';
import Computed from '@/views/Computed.vue';
import Conditional from '@/views/Conditional.vue';
import List from '@/views/List.vue';
import Event from '@/views/Event.vue';

import Component from '@/views/Component.vue';
import Props from '@/views/Props.vue';
import Slots from '@/views/Slots.vue';
import Ajax from '@/views/Ajax.vue';

import Login from '@/views/Login.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'login',
        auth: false,
      },
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
    {
      path: '/component',
      name: 'component',
      component: Component,
    },
    {
      path: '/props',
      name: 'props',
      component: Props,
    },
    {
      path: '/slots',
      name: 'slots',
      component: Slots,
    },
    {
      path: '/ajax',
      name: 'ajax',
      component: Ajax,
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

// Status otentikasi, sudah login atau belum? (Dumb)
const isLogin = true;

// Fungsi dibawah ini akan dieksekusi ketika sebelum menjalankan / pindah route
router.beforeEach((to, from, next) => {
  // Jika terdapat meta auth === false, maka
  if (to.matched.some(record => record.meta.auth === false)) {
    // Jika posisi auth sudah login, maka
    if (isLogin) {
      // Redirect ke halaman home, tidak perlu masuk ke halaman login
      alert('tidak perlu login, karena sudah login');
      next('/');
    } else {
      // Boleh masuk ke route yang dituju
      next();
    }
  // Jika tidak ada meta auth / meta auth === true
  } else if (isLogin) {
    // Boleh masuk ke route yang dituju
    next();
  } else {
    // Jika status isLogin nya false (belum login), maka redirect ke halaman login
    next('/login');
  }
});

export default router;
