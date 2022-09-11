<template>

  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <button v-on:click="addTen">Add 10</button>
    <change-counter></change-counter>
    <favorite-value></favorite-value>
  </base-container>

  <base-container title="Auth">
    <auth-user></auth-user>
  </base-container>

</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import TheCounter from './components/TheCounter.vue';
import AuthUser from './components/AuthUser.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    AuthUser
  },
  computed: {

    ...mapGetters({
      isAuth: 'userIsAuthenticated'
    }),

  },
  methods: {

    addTen() {
      // ~~> UPDATED:
      // this.$store.state.counter += 1;

      // ~~> TO:
      // this.$store.commit('increase', {value: 10});
      
      // ~~> TO:
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10
      // })
      
      // ~~> TO:
      // this.$store.dispatch('increase', {value: 10}
      
      // ~~> TO:
      // this.$store.dispatch({
      //   type: 'increase',  value: 10
      // })
      
      // ~~> TO:
      this.$store.dispatch({
        type: 'counterModule/increase',  value: 10
      })
    },
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>