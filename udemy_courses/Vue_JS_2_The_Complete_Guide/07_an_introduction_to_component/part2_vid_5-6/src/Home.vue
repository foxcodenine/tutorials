<template>
  <div class="container">
    <h1>Hello {{product}} World!</h1>
    <br>
    <button v-on:click="changeProduct()">Change</button>  
  </div>
</template>

<script>
  export default { 
      data: function() {
        return {
          product: 'Vue'
        }
      },
      methods: {
        changeProduct() {
          this.product = 'Python';
        }
      }
    }
</script>

<style>
  @import "../style.css";
</style>
