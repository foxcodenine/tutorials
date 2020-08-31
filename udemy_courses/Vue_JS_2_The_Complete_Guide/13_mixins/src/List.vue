<template>
    <div>
        <input type="text" v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits " :key="index">{{ fruit }}</li>
        </ul> 
    </div>    
</template>

<script>

    import { fruitsMixin } from './fruitsMixin'
    export default {

        mixins: [fruitsMixin],

        created() {
        console.log('>> Created Hook - List.vue - Component')
    }
    }

</script>

<style>

</style>