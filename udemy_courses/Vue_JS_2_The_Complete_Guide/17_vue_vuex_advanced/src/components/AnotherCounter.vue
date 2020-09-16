<template>
  <div>
      <h4>(Another Counter)</h4>
      <button class="btn btn-primary" @click="increment">Increment</button>
      <button class="btn btn-primary" @click="decrement">Decrement</button>
      <span> &nbsp; &nbsp; <strong> &Larr; using mapMutations</strong></span>
  </div>
</template>

<script>

    import { mapMutations } from "vuex";

    export default {
        
        methods: {
            ...mapMutations({
                increment: 'counter/increment',
                decrement: 'counter/decrement'
            }),
        }
    }

</script>

<style>

</style>