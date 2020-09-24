<template>
  <div>
    <app-stock 
          v-for="stock in stocks" 
          :key="stock.id" 
          :stock="stock"></app-stock>
  </div>
</template>

<script>

  import StockComponent from './Stock'
  
  export default {
    components: {
      appStock: StockComponent,
    },
    computed: {
      stocks() {
        return this.$store.getters['stocks/stocks'];
      }
    }
  }
</script>

<style>

</style>