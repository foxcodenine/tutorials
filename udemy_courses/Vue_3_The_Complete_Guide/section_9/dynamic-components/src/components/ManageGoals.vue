<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal">
    <button v-on:click="setGoal" >Set Goal</button>

    <teleport to="body" >
      <error-alert v-if="inputIsInavalid">
        <h2>Input is invalid</h2>
        <p>Please enter at least a few characters...</p>
        <button v-on:click="confirmError" >Okey</button>
      </error-alert>
    </teleport>

  </div>
</template>

<!--  -------------------------------------------------------------  -->

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {

  components: {
    ErrorAlert
  },

  data() {
    return {
      inputIsInavalid: false
    }
  },

  methods: {

    setGoal() {
      const enteredValue = this.$refs.goal.value
      this.$refs.goal.value = null;
      
      if(enteredValue === '') this.inputIsInavalid = true;
    },
    confirmError() {
      this.inputIsInavalid = false;
    }

  }

}
</script>

<!--  -------------------------------------------------------------  -->

<style>

</style>