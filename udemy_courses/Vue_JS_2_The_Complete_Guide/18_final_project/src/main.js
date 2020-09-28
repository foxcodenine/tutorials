
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from "vue-resource";

import App from './App.vue';
import { routes } from "./routes";

import store from "./store/store";
// _____________________________________________________________________

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

// _____________________________________________________________________

Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-stock-trader-28890.firebaseio.com/'
// _____________________________________________________________________

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

// _____________________________________________________________________

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)

});
// _____________________________________________________________________