<template>
  <div class="app">
      <app-header></app-header>
      <router-view></router-view>
  </div>
</template>

<script>

    import Header from "./components/header/header";
    
    export default {
        name: 'app',
        components: {
            appHeader: Header
        }
    }
</script>

 <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    body, html {
        margin: 0;
        font-family:  'Inter', Helvetica, Arial, sans-serif;
    }
    button {
    border-radius: 5px;
  }
</style>