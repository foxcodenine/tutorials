<template>
  <div>
      <h4>(Counter)</h4>
      <button class="btn btn-primary" @click="increment">Increment</button> 
      <button class="btn btn-primary" @click="decrement">Decrement</button>
      <span>&nbsp; &nbsp; <strong> &Larr; mutations &nbsp; this.$store.commit('function')</strong></span>
  </div>
</template>

<script>
export default {
    // methods: {
    //     increment() {
    //         // this.$emit('update', 1)
    //         this.$store.state.counter++;
    //     },
    //     decrement() {
    //         // this.$emit('update', -1)
    //         this.$store.state.counter--;
    //     },
    // }
    methods: {
        increment() {
            return this.$store.commit('increment');
        },
        decrement() {
            return this.$store.commit('decrement');
        },
    }
}
</script>

<style>

</style>