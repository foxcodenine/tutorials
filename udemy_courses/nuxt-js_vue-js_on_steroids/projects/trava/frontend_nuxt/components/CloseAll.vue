<template>
    <p class="close-all" @click="closeAllForms()">&times;</p>
</template>

<script>
export default {
    props: {
        'reload': {default: false}
    },
    methods: {
        closeAllForms() {
            this.$router.push('/')
            this.$store.dispatch('closeAll');

            // setTimeout(()=>{
            //     if (this.reload) {
            //         location.reload();
            //     }              
            // }, 100);

            
        }
    }
}
</script>

<style>

</style>