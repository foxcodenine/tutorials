<template>
    <the-header title="RememberMe"></the-header>
    <the-resources></the-resources>
</template>

<!-- --------------------------------------------------------------- -->

<script>


import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/learning-resource/TheResources.vue';
export default { 

    components: {
        TheHeader,
        TheResources
    },

    data() {
        return {

        }
    },

    watch: {

    },

    computed: {

    },
    
    methods: {
        
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style lang="scss">
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