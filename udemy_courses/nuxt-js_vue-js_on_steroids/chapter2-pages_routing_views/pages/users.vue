<template>
  <div class="container">
      <!-- <app-header>We moved this header to the Users Layouts</app-header> -->
        <hr>
        <h1>Hi this is the Users Page!</h1>
        <input type="text" v-model="userId" placeholder="Enter user ID"> 
        <button class="button--green" @click="onClick()">Find user</button>  
        <hr>   
        <nuxt-child />  
        <hr>
  </div>
</template>

<script>
    // import Header from "@/components/Header";
    export default {
        data() {
            return {
                userId: '',
            }
        },
        methods: {
            onClick() {
                this.$router.replace(`/users/${this.userId}`)
            }
        },
        layout: 'users',
        components: {
            // appHeader: Header
        }
    }
</script>

<style scoped lang="scss">
    .container {
        flex-direction: column;

        & > * {
            margin-bottom: 20px;
        }

        hr {
            width: 100%;
            border: none;
            border-bottom: 1px solid rgba(0,0,0,.5);
        }
    }
</style>