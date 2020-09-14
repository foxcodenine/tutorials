<template>
  <div>
      <h4>(AnotherResult)</h4>
      <p>Double counter is: {{ doubleCounter }} <span> &nbsp; &nbsp; <strong> &Larr; using mapGetters</strong></span></p>
      <p>Number of clicks: {{ stringCounter }}</p>
      
  </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {

        // computed: {
        //   counter() {
        //     return this.$store.getters.doubleCounter;
        //   }
        // }

        computed: {
          ...mapGetters([
            'doubleCounter',
            'stringCounter'
          ]),
        }
    }
    
</script>
    
<style>

</style>