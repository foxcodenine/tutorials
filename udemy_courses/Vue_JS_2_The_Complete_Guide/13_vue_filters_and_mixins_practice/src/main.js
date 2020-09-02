import Vue from 'vue'
import App from './App.vue'

Vue.filter('textCount', (value)=>{
  if (value.length) {
    return `${value}  (${value.length})`;
  }
});


new Vue({
  el: '#app',
  render: h => h(App)
})
