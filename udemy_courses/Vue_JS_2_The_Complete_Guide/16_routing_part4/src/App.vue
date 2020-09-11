<template>
  <div class="container">

    <div class="row">

      <router-view name="nav-top"></router-view>
      <router-view name="nav-bottom"></router-view>

      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr>

        <transition mode="out-in" name='slide'>
          <router-view></router-view>
        </transition>
        
      </div>

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
  .slide-leave {
    opacity: 1;
  }
  .slide-leave-active {
    transition: opacity 0.4s ease;
    opacity: 0;
    animation: slide-out 0.4s ease-out forwards
  }
  .slide-enter{
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 0.4s ease-in forwards;    
    transition: opacity 0.4s ease;
    
  }

  @keyframes slide-out {
    0% {
      transform:  translateY(0);
    }
    100% {
      transform:  translateY(-30px);
    }
  }
  @keyframes slide-in {
    0% {
      transform:  translateY(-30px);
    }
    100% {
      transform:  translateY(0px);
    }
  }
</style>