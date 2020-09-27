<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">

      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }} 
          <small>(Price: {{ stock.price | currency }})</small>
        </h3>
      </div>

      <div class="panel-body">

        <div class="pull-left">
          <input 
                type="number" 
                class="from-controll" 
                placeholder="Quantity" 
                v-model="quantity"
                :class="{'danger-brd': insufficientFunds}">
        </div>

        <div class="pull-right">
          <div class="pull-right">
            <button 
                class="btn btn-success"
                @click="buyStock"
                :disabled="quantity <= 0 || Number.isInteger(quantity) || insufficientFunds" 
            >
              {{ insufficientFunds ? 'Insufficient funds' : 'Buy'}}
            </button>
          </div>
        </div>

      </div>
      
    </div>
  </div>
</template>

<script>

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0
      }
    },
    computed: {
      funds() {
        return this.$store.getters['portfolio/fundsPortfolio']
      },
      insufficientFunds() {
         return this.funds < this.quantity * this.stock.price
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price, 
          quantity: this.quantity
        };
        this.$store.dispatch('portfolio/buyStock', order)
        this.quantity = 0;
      }
    }
  }
  

</script>

<style scoped>


  .danger-brd {
    border: 2px solid crimson !important;
    border-radius: 4px;
  }



</style>