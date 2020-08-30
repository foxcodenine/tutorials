import Vue from 'vue'
import App from './App.vue'


Vue.directive('highlight', {
  bind(el, binding, vnode) {

    // el.style.background = 'lime';

    // _________________________________

    // el.style.background = binding.value;         // <- adding a value
    // _________________________________

    // if (binding.arg === 'background') {      // <- adding an argument  

    //   el.style.background = binding.value;

    // } 
    // else {
    //   el.style.color = binding.value;
    // } 
    // __________________________________
    let delay = 0;
    if (binding.modifiers['delayed']) {          // <- adding a modifier
      delay = 3000;
    }

    setTimeout(() => {

        if (binding.arg === 'background') { 

          el.style.background = binding.value;

        } else {
          el.style.color = binding.value;
        } 
    }, delay)    
  }
});
// _____________________________________________________________________


new Vue({
  el: '#app',
  render: h => h(App)
})
