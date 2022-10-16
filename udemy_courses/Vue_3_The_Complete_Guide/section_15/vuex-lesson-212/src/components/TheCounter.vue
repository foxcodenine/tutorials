<template>
    <h3>{{ normalizedCounter }}</h3>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { mapGetters } from "vuex";

export default {

    

    computed: {
        // ~~> UPDATED:
        // counter() {
        //     return this.$store.getters.normalizedCounter
        // },

        // ~~> TO:
        ...mapGetters(['normalizedCounter'])
    }
}
</script>