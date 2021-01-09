<template>

  <div id="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vue Filters</h1>
        <p>{{ text | toUpperCase | toLowerCase }}</p>

        <input type="text" v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits " :key="index">{{ fruit }}</li>
        </ul>        

      </div>
    </div>
  </div>
</template>
  
<script>
  export default {

    data() {
      return {
        text: 'Hello there!',
        fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
        filterText: ''
      }
    },
    
    filters: {                          // <- Local filters
      toUpperCase(value) {        
        return value.toUpperCase();
      },
    },

    computed: {
      filteredFruits() {
        return this.fruits.filter((fruit)=>{
          // return fruit.startsWith(this.filterText, 0);
          // return fruit.match(this.filterText, 0);
          return fruit.includes(this.filterText);

          
        });
      }
    }
  }  
</script>

<style lang="scss">
</style>
