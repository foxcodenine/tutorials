<template>
  <div class="container">
      <h1>Hi this is the Users Page!</h1>
      <input type="text" v-model="userId" placeholder="Enter user ID"> 
      <button class="button--green" @click="onClick()">Find user</button>    
  </div>
</template>

<script>
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
    }
}
</script>

<style scoped lang="scss">
    .container {
        flex-direction: column;

        & > * {
            margin-bottom: 20px;
        }
    }
</style>