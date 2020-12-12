<template>
  <div style="background-color: #dff0f8;">
      
  </div>
</template>

<script>
export default {
    date() {
        return {
            email: ''
        }
    },
    async created() {
        this.email = this.$route.params.email
        await this.$store.dispatch('autoLogin'); 

        const userLogedIn = this.$store.getters.getIsUserLogedIn

        console.log(userLogedIn)

        if (userLogedIn) {
            this.$store.commit('setUserData', {key: 'email', value: this.email});

            const payload_cookie = {
                userInfo: this.$store.getters.getUserInfo, 
                token: this.$store.getters.getToken
            };
            this.$store.dispatch('saveToCookie', payload_cookie);

            this.$router.replace('/profile')
        } else {
            this.$store.commit('setUserData', {key: 'email', value: this.email});
            this.$store.dispatch('setForm', {name: 'signInOn', action: true});
            this.$router.replace('/')
        }

       
    }

}
</script>

<style>

</style>