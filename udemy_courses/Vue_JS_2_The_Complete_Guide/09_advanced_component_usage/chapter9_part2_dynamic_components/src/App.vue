<template>
  <div class="conatainer">
    <div class="row">
      <div class="col-xs-12">

        <button v-on:click='selectedComponent="red"'>Red</button>
        <button v-on:click='selectedComponent="blue"'>Blue</button>
        <button v-on:click='selectedComponent="yellow"'>Yellow</button>
        <hr>

        <keep-alive>
          <component v-bind:is="selectedComponent"></component>
        </keep-alive>      
        

      </div>
    </div>
  </div>
</template>

<script>

  import Red from './components/Red'
  import Blue from './components/Blue'
  import Yellow from './components/Yellow'

  export default {
    components: {
      'red': Red,
      'blue': Blue,
      'yellow': Yellow,
    },
    data: function() {
      return {
        selectedComponent: 'blue'
      }
    }
  }
</script>

<style lang="scss">
  .conatainer {
    padding: 0 50px;
  }
</style>
