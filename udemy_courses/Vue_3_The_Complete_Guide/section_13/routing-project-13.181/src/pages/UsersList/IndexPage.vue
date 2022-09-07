<template>
  <button v-on:click="confirmInput">Confirm</button>
  <button v-on:click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
  /* eslint-disable */
import UserItem from '../../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { 
      changesSaved: false
     }
  },
  methods: {
    confirmInput() {
      
      // ~~> UPDATED:
      // this.$router.push('/teams');

      // ~~> TO:
      this.$router.push({name: 'teams'});
    },
    saveChanges() {
      this.changesSaves = true;
    }
  },
  beforeRouteEnter( to, from, next ) {
    // do something - you can also use beforeEnter method in the router.js
    console.log('beforeRouteEnter');
    next();
  },
  beforeRouteLeave( to, from, next ) {
    if (!this.changesSaves) {   
 
    confirm('Data is not save, do you want to leave this page?') ? 
        next() : 
        next(false);      
    } else {
      next();
    }
    
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>