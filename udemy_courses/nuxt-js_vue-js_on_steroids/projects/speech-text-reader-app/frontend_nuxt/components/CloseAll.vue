<template>
    <p class="close-all" @click="closeAllForms()">&times;</p>
</template>

<script>
export default {
    methods: {
        closeAllForms() {
            this.$store.dispatch('closeAll');
        }
    }
}
</script>

<style>

</style>