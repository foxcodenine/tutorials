<template>
  <div>
    <TheHeader @sideNavToggle="displaySideNave = !displaySideNave" />
    <TheSidenav
      @close="displaySideNave = !displaySideNave" 
      :show="displaySideNave" />
    <Nuxt />
  </div>
</template>



<script>
  import TheHeader from "@/components/Navigation/TheHeader.vue";
  import TheSidenav from "@/components/Navigation/TheSidenav.vue";
  
  export default {
    components: {
      TheHeader,
      TheSidenav
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









<style lang='scss'>
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
