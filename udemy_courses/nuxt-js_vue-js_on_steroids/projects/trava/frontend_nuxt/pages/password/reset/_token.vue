<template>
  <div class="container">
  </div>
</template>

<script>

const jwt = require('jsonwebtoken');

export default {

    mounted() {
        const token = this.$route.params.token


        try {
            const decoded = jwt.verify(token, this.$config.BESK);
            console.log(decoded)
            this.$router.replace({path: '/'});
            this.$store.commit('setUserData', {key: 'email', value: decoded.email});
            this.$store.dispatch('setForm', {name: 'resetPasswordOn', action: true});

        } catch (err) {
            console.log(err)
            console.log(err.message)

            if (err.name === 'TokenExpiredError') {
                throw new Error('This password reset link has expire. Please try again!');
            }
        }

        
    }

}
</script>

<style>

</style>