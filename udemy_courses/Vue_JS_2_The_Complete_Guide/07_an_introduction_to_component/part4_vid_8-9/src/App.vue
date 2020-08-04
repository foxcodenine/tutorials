<template>
  <div class="container">
    <app-header></app-header>
    <app-servers></app-servers>
    <app-details></app-details>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './Header';  
  import Servers from './Servers';
  import Details from './ServerDeatils';
  import Footer from './Footer';

  export default {
    components: {
      'app-header': Header,      
      'app-servers': Servers,
      'app-details': Details,
      'app-footer': Footer
    }
  }

</script>

<style lang="scss">

</style>
