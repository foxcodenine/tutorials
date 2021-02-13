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
        this.email = this.$route.query.email
        
        let cookie = await this.$store.dispatch('getFromCookie');
        let userBoxes = [];

        if (cookie.userBoxes) {            
            await this.$store.dispatch('autoLogin', cookie.userBoxes); 
            userBoxes = cookie.userBoxes;
        } else {
            await this.$store.dispatch('autoLogin'); 
        }
        
        const userLogedIn = this.$store.getters.getIsUserLogedIn


        if (userLogedIn) {
            
            this.$store.commit('setUserData', {key: 'email', value: this.email});
            const payload_cookie = {
                userInfo: this.$store.getters.getUserInfo, 
                token: this.$store.getters.getToken,
                userBoxes
            };
            this.$store.dispatch('saveToCookie', payload_cookie);
            this.$router.replace('/profile?skip=no');
            
            
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