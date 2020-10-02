<template>
  <div id="dashboard">
      <h1>That's the dashboard</h1>
      <p>You should only get here if yor're authenticated!</p>
      <p>Your email is: {{ getActiveUser.email }}</p>
  </div>
</template>

<script>

    import axios from "axios";
    import { mapActions } from "vuex";
    import { mapGetters } from "vuex";
    
    export default {
      data() {
        return {
          email: '',
          users: [],
        }
      },
      computed: {
        ...mapGetters({
          getActiveUser: 'getActiveUser',
        })
      },
      methods: {
        ...mapActions({
          fetchUser: 'fetchUser'
        })
      },
      async mounted() {        
        this.fetchUser();
      }

    }
</script>



<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>