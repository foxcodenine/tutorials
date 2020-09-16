<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Vuex</h1>
          <app-result></app-result>
          <hr>
          <app-another-result></app-another-result>
          <hr>
          <app-counter></app-counter>
          <hr>
          <app-another-counter></app-another-counter>
          <hr>
          <app-async-counter></app-async-counter>
          <hr>
          <h4>Custom two way binding:</h4>
          <input  type="text" :value="redValue" @input="updateRedValue($event)">
          <span> &nbsp; {{ redValue }}</span>
          <hr>
          <h4>v-modol / get & set</h4>
          <input  type="text" v-model="blueValue">
          <span> &nbsp; {{ blueValue }}</span>
      </div>
    </div>
  </div>
</template>

<script>

  import Counter from "./components/Counter";
  import Result from "./components/Result";

  import AnotherCounter from "./components/AnotherCounter";
  import AnotherResult from "./components/AnotherResult";
  
  import AsyncCounter from "./components/AsyncCounter";



  export default {
    components: {
      'appCounter': Counter,
      'appResult': Result,
      'appAnotherCounter': AnotherCounter,
      'appAnotherResult': AnotherResult,
      'appAsyncCounter': AsyncCounter      
    }, 
    computed: {
      redValue() {
        return this.$store.getters.redValue;
      },
      blueValue: {
        get() {
          return this.$store.getters.blueValue;
        },
        set(value) {
          this.$store.dispatch('updateBlueValue', value);
        }
      }
    },
    methods: {
      updateRedValue(event) {
        this.$store.dispatch('updateRedValue', event.target.value);
      }
    }
  }
</script>

<style>

</style>