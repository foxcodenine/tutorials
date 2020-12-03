<template>
  <div class="aaa">
      <main class="box-grid">
        <Box v-for="(d, index) in listData" :key="index" :item="d" class="mb-sm"></Box>
        <!-- <div class="boxs" Box v-for="(d, index) in listData" :key="index"></div> -->
      </main>
      
      
  </div>
  
</template>

<script>

import Box from "./Box";

export default {
    data() {
      return {

      }
    },
    components: {
      Box
    },
    computed: {
      listData() {
        return this.$store.getters.getMyBoxes;
      }
    }
}

</script>

<style>
  .aaa{ width: 100%;}

  .box-grid {
    margin: auto;
    display: grid;
    max-width: 112rem;

    height: 100%;
    padding: 0 2rem !important;
    /* overflow: none; */


    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-gap: 1rem;   

  }
</style>