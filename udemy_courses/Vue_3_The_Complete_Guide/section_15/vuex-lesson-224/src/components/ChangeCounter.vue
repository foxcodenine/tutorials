<template>
    <button v-on:click="inc">Add 1</button>
    <button v-on:click="increase({value: 2})">Add 2</button>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { mapActions } from 'vuex';
export default {
    methods: {

        // ~~> UPDATED:

            // addOne() {
            //     // ~~> UPDATED:
            //     // this.$store.commit('increment');

            //     // ~~> TO:
            //     this.$store.dispatch('increment');
            // },

        // ~~> TO:
        // ...mapActions(['increment', 'increase'])

        // ~~> TO:
        // ...mapActions({
        //     inc: 'increment',  increase: 'increase'
        // }),

        // ~~> ALSO:
        ...mapActions('counterModule', {
            inc: 'increment',  increase: 'increase'
        })



    }    
}

</script>