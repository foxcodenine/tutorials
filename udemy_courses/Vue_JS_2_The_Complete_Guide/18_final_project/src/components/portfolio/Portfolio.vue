<template>
  <div>
    <app-stock 
        v-for="stock in stocks" 
        :key="stock.id"
        :stock="stock"></app-stock>
  </div>
  
</template>

<script>
  import { mapGetters } from "vuex";
  import Stock from './Stock'
  export default {
    computed: {
      ...mapGetters({
        stocks: 'portfolio/stockPortfolio'
      })
    },
    components: {
      appStock: Stock
    }

    
  }
</script>

<style>

</style>