import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Default from './layouts/default.vue';
import Login from './layouts/login.vue';

Vue.component('default', Default);
Vue.component('login', Login);

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

// Global Axios
Vue.prototype.axios = Axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
