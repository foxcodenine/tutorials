<template>
    <div>
        <header><h1>My Friends</h1></header>
        
        <new-friend v-on:add-contact="addContact"></new-friend>

        <ul>
            <friend-contact 
                v-for="(friend, index) in friends" :key="friend.id"
                v-bind:index=" index"
                v-bind:name=" friend.name"
                v-bind:phone-number=" friend.phone"
                v-bind:email-address=" friend.email"
                v-bind:is-favorite=" friend.isFavorite"
                v-on:toggle-favorite="toggleFariteStatus"
                v-on:delete="deleteContact"
            ></friend-contact>
        </ul>
    </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue';

export default {

  components: { FriendContact, NewFriend },
  data() {

      return {
          friends: [
              {
                  id: 'manual', 
                  name: 'Manuel Lorenz',
                  phone: '0123 45678 90',
                  email: 'manuel@localhost.com',
                  isFavorite: 1
              },
              {
                  id: 'julie', 
                  name: 'Julie Jones',
                  phone: '9876 654421 21',
                  email: 'jones@localhost.com',
                  isFavorite: 0
              }
          ,]
      }
  },
  methods: {
    
    toggleFariteStatus(friendIndex) {
      
      this.friends.forEach( frd => frd.isFavorite = 0);
      this.friends[friendIndex].isFavorite = 1;
    },

    addContact(name, phone, email) {

      const newFriendContact = {
        id: new Date().toISOString(),
        name,
        phone,
        email,
        isFavorite: false
      }

      this.friends.push(newFriendContact);
    },

    deleteContact(index) {
      this.friends.splice(index, 1);
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

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li, #app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
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

</style> 