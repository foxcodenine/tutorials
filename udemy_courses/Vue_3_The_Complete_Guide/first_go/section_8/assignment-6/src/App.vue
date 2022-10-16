<template>
  <div>

    <user-data v-on:submit-user="addUser" ></user-data>

    <br>

    <active-user
      v-for="user in users" 
      :key="user.id"
      v-bind:userData="user"      
    ></active-user>

  </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserData from './components/UserData.vue'
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      users: [],
      idCount : 1
    }
    
  },
  methods: {
    addUser(userData) {
      if (!userData.age || !userData.fullname) return;

      ++this.idCount;

      userData.id = this.idCount;

      this.users.push(userData);
    }
  }

}
</script>

<!-- --------------------------------------------------------------- -->


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style> 