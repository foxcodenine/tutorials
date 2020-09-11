<template>
  <div class="container">

    <div class="row">

      <router-view name="nav-top"></router-view>

      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr>

        <router-view></router-view>
        
      </div>

    </div>
    <div class="row">
      <router-view name="nav-bottom"></router-view>
    </div>

  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    'appHeader': Header,
  }  
}
</script>

<style>

</style>