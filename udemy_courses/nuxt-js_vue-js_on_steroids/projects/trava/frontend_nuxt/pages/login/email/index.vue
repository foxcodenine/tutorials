<template>
  
</template>

<script>
export default {
    mounted() {
        console.log('<EMAIL> ', this.$route.query.email, ' <EMAIL>')
        
        this.$store.dispatch('closeAll');
        this.$store.dispatch('setForm', {name: 'signInOn', action: true});
        this.$store.commit('setUserData', {key:'email', value: this.$route.query.email})
        this.$router.push('/');
    }
}
</script>

<style>

</style>