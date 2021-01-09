// .match()
// .startWith()
// .includes()

// _____________________________________________________________________
import Vue from 'vue'
import App from './App.vue'

// _________________________

// Global filter:
Vue.filter( 'toLowerCase', (value)=>{
  return value.toLowerCase();
});

// _________________________

// Global mixin:
Vue.mixin({
  created() {
    console.log('>> Created Hook - globalMixin')
  }
})

// _________________________

new Vue({
  el: '#app',
  render: h => h(App),
  created() {
    console.log('>> Created Hook - main.js - new Vue')
  }
})




