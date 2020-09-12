import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import { routes } from './routes'


// _____________________________________________________________________

Vue.use(VueRouter);


const router = new VueRouter({
  routes,
  mode: 'history', // <- is used to remove # from address bar, 
                  //    need to update server for this to work

  scrollBehavior(to, from, savedPosition) {
        
    if (savedPosition) {
      return savedPosition;
    } 
    if (to.hash) {
      return {selector: to.hash};
    } 
    return {x: 0, y: 0};
  },
});

// _____________________________________________________________________

router.beforeEach((to, from, next)=>{
  console.log('>> global forEach, to path:', to.path);
  next();
});



// _____________________________________________________________________

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
