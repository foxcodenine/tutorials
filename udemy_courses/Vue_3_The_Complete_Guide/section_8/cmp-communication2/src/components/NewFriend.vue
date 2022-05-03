<template>

  <form v-on:submit.prevent="submitData" >

      <div class="input-group">
          <label for="name">Name</label>
          <input type="text" id="name"   v-model="enteredName">
      </div>

      <div class="input-group">
          <label for="phone">Phone</label>
          <input type="tel" id="phone"   v-model="enteredPhone">
      </div>

      <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="enteredEmail">
      </div>

      <button>Add Contact</button>

  </form>

</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            enteredName: '',
            enteredPhone: '',
            enteredEmail: ''
        }
    },
    methods: {
        submitData() {
            const inputs = [
                this.enteredName, this.enteredPhone, this.enteredEmail
            ];

            this.$emit('add-contact', ...inputs);
        }
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style>

</style>