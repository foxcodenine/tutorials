<template>
    <the-header title="Remember Me"></the-header>
    <the-resource></the-resource>
</template>

<!--------------------------------------------------------------------->

<script>

import TheHeader from './components/layout/TheHeader.vue'
import TheResource from './components/learning-resources/TheResource.vue'


export default {
  
    components: {
        TheHeader,
        TheResource,
    },
    data() {
        return {

        }
    }
}
</script>

<!--------------------------------------------------------------------->

<style lang="scss" >

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>