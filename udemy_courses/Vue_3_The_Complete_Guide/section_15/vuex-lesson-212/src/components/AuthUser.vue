<template>
    <button v-on:click="login"  v-if="!isAuth">Login</button>
    <button v-on:click="logout" v-if="isAuth">Logout</button>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            isAuth: 'userIsAuthenticated'
        })
    },
    methods: {
        ...mapActions({
            login: 'login', 
            logout: 'logout'
        })
    }
}
</script>

<!-- --------------------------------------------------------------- -->

<style>

</style>