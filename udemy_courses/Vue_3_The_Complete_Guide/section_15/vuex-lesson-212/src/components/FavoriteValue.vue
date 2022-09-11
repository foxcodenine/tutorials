<template>
    <h3>{{ counter }}</h3>
    <p>We do more...</p>
</template>

<!-- --------------------------------------------------------------- -->

<script>
export default {

    computed: {
        counter() {
            // ~~> UPDATED: 
            // return this.$store.state.counter;
            
            // ~~> TO:
            return this.$store.getters.finalCounter
        }
    }
}
</script>