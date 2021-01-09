<template>

  <div id="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vue Mixins</h1>
        <p>{{ text | toUpperCase | toLowerCase }}</p>
        <hr>
        <button @click="fruits.push('Berries')">add Berries</button>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits " :key="index">{{ fruit }}</li>
        </ul>        
        <hr>

        <app-list></app-list>
      </div>
    </div>
  </div>
</template>
  
<script>
  import List from './List'
  import { fruitsMixin } from "./fruitsMixin";
  export default {

    data() {
      return {
        text: 'Hello there!',
      }
    },
    
    filters: {                          
      toUpperCase(value) {        
        return value.toUpperCase();
      },
    },

    mixins: [fruitsMixin],


    components: {
      'appList': List,
    },

    created() {
        console.log('>> Created Hook - App.vue')
    }
  }  
</script>

<style lang="scss">
</style>
