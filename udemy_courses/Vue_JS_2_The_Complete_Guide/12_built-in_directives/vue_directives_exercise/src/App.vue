<template>
    <div id="app" class="app container">
      <h1>Derectives Exercise</h1>
      <br>
      <p>Build a Custom Directive which works like v-on (Listen for Events)</p>
      <br>
      <hr>
      <button v-customOn:click='clicked'>Click Me</button>
      <hr>
      <div class="box" 
        v-customOn:mouseenter='mouseIsIn'
        v-customOn:mouseleave='mouseIsOut'
      ></div>
      <hr>
      <p>{{ returnLatestEvent }}</p>
  </div>    
</template>

<script>
export default {
  data() {
    return {
      latestEvent: 'no event!',
    }
  },

  directives: {
    customOn: {
      bind(el, binding, vnode) {
        
        let type = binding.arg;
        let fn = binding.value;

        el.addEventListener(type, fn)
      }
    }
  },

  computed: {
    LatestEvent() {
      return this.latestEvent
    },
  },

  methods: {
    clicked() {
      this.latestEvent = 'moused click!';
    },
    mouseIsIn() {
      this.latestEvent = 'mouse in!';
    },
    mouseIsOut() {
      this.latestEvent = 'mouse out!';
    },
  }
}
</script>

<style lang="scss">

</style>
