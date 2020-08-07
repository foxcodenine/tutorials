import Vue from 'vue'
import App from './App.vue'

// export const eventBus = new Vue();

export const eventBus = new Vue({

  methods: {
    updateAge(age) {
      this.$emit('ageWasEdit', age)
    }
  }
  
});

new Vue({
  el: '#app',
  render: h => h(App)
});
