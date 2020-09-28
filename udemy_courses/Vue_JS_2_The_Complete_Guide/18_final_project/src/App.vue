<template>
  <div class="container">
    <app-header></app-header>
    
    <div class="row">
      <div class="col-xs-12">
        <transition mode="out-in">
        <router-view></router-view>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
  
  import Header from "./components/Header";
  export default {
    components: {
      appHeader: Header
    },
    created() {
      this.$store.dispatch('stocks/initStocks')
    }
  }

</script>

<style>
  body {
    padding: 30px;
  }
  .v-enter {
    transform: translateY(-20px);
    opacity: 0;
  }
  .v-enter-active {
    transition: all .35s ease-in;
  }  
  .v-leave-active {
    transform: translateY(20px);
    opacity: 0;
    transition: all .35s ease-out;
  }
</style>