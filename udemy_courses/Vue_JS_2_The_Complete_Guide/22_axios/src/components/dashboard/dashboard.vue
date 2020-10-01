<template>
  <div id="dashboard">
      <h1>That's the dashboard</h1>
      <p>You should only get here if yor're authenticated!</p>
      <p>Your email is: {{ email }}</p>
  </div>
</template>

<script>

    import axios from "axios";
    export default {
      data() {
        return {
          email: '',
          users: [],
        }
      },
      async mounted() {

        try {
          const response = await axios.get('/users.json');
          // we are using baseURL in main.js so we only need the '/user.json'
          // users.json not required bu axios it is how firebase works           

          for (let key in response.data) {            
              response.data[key].id = key;
              this.users.push(response.data[key]);
          }      
          this.email = this.users[this.users.length - 1].email;

        } catch(err) {
          console.log(err);
        }
        
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