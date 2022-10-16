<template>
      <ul>
        <learning-resource 
            v-for="res in resources" 
            :key="res.id"
            v-bind:id=res.id
            v-bind:title=res.title
            v-bind:description=res.description
            v-bind:link=res.link
        >            
        </learning-resource>
    </ul>
</template>

<!--------------------------------------------------------------------->
<script>

import LearningResource from './LearningResource.vue'

export default {
    inject: [ 'resources' ],
    components: {
        LearningResource
    },
}
</script>

<!--------------------------------------------------------------------->

<style lang="scss" scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin: auto;
        max-width: 40rem;
    }
</style>