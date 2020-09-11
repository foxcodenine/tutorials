<template>
    <div>
    <h1>The User Page</h1>
    <h4>user id: {{ id }}</h4>
    <hr>
    <button class="btn btn-primary" @click="navigateToHome">Go to Home</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    },
    watch: {
        $route(to, from) {
            this.id = to.params.id;
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push({path: '/'})
        }
    }
}
</script>