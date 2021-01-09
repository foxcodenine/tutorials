<template>
  <div>
    <TheHeader         
        @sideNavToggle="displaySideNave = !displaySideNave"
        isAdmin />
    <Nuxt />
  </div>
</template>



<script>
  import TheHeader from "@/components/Navigation/TheHeader.vue";
  
  export default {
    components: {
      TheHeader
    },
    data() {
      return {
        displaySideNave: false,
      }
    },
    watch: {
      displaySideNave() {
        console.log(this.displaySideNave)
      }
    }
  }
</script>





<style lang='scss' scoped>
  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
