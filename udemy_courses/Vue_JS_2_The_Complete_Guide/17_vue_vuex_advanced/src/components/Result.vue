<template>
  <div>
      <hr>
      <h4>(Result)</h4>
      <p>Counter is: {{ counter }}  &nbsp; &nbsp; <strong> &Larr; this.$store.state.property</strong></p> 
      <p>Number of clicks: {{ clicks }} &nbsp; &nbsp; <strong> &Larr; this.$store.getter.function</strong></p>
  </div>
</template>

<script>

    export default {
        // props: ['counter']
        computed: {
          counter() {
            return this.$store.getters['counter/counter'];
          },
          clicks() {
            return this.$store.getters['counter/stringCounter'];
          }
        }
    }
    
</script>
    
<style>

</style>