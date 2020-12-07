<template>
  
</template>

<script>
export default {
    mounted() {
        console.log('<EMAIL> ', this.$route.params.loginEmail, ' <EMAIL>')
        
        this.$store.dispatch('closeAll');
        this.$store.dispatch('setForm', {name: 'signInOn', action: true});
        this.$store.commit('setUserInfo', {key:'email', value: this.$route.params.email})
        this.$router.push('/');
    }
}
</script>

<style>

</style>