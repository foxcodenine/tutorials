<template>
  <div class="container">
      <h2>So far so good</h2>
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
            
            this.$store.commit('setUserInfo', {key: 'email', value: decoded.email});
            this.$store.dispatch('setForm', {name: 'resetPasswordOn', action: true});

            this.$router.push('/');


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