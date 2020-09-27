<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">

      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }} 
          <small>(Price: {{ stock.price | currency}} | Quantity: {{ stock.quantity }})</small>
        </h3>
      </div>

      <div class="panel-body">

        <div class="pull-left">
          <input 
                type="number" 
                class="from-controll" 
                placeholder="Quantity" 
                v-model="quantity"
                :class="{'danger-brd': insufficientStock}">
        </div>

        <div class="pull-right">
          <div class="pull-right">
            <button 
                class="btn btn-success"
                @click="sellStock"
                :disabled="quantity <= 0 || Number.isInteger(quantity) || insufficientStock"
            >
                {{ insufficientStock ? 'Not Enough' : 'Sell'}}
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
      insufficientStock() {
        return this.stock.quantity < this.quantity
      }
    },
    methods: {
      sellStock() {
        const order = {
          stockId: this.stock.id, 
          quantity:this.quantity, 
          stockPrice: this.stock.price
        }
        this.$store.dispatch('portfolio/sellSTOCK', order);
        this.quantity = 0;
      }
    }
  }
  

</script>

<style>
  .danger-brd {
    border: 2px solid crimson !important;
    border-radius: 4px;
  }
</style>