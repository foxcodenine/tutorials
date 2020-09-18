<template>
  <div id="app" >
    <div class="container">
 
      <app-add-todos></app-add-todos>
      <app-filter-todos></app-filter-todos>
      <app-todos></app-todos>

    </div>
    
  </div>
</template>

<script>
  import Todos from "./components/Todos";
  import AddTodos from './components/AddTodos'
  import FilterTodos from './components/FileterTodos'

  export default {
    name: 'app',

    components: {
      'appTodos': Todos,
      'appAddTodos': AddTodos,
      'appFilterTodos': FilterTodos
    }
  }
</script>

<style lang="scss">
  body {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.6;
    background:  #e8f7f0;
  }
  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
