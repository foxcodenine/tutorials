<template>
  <div>

    <the-header></the-header>

    <button v-on:click="setSelectedComponet('active-goals')">Active Goals</button>
    <button v-on:click="setSelectedComponet('manage-goals')">Manage Goals</button>

    <!-- <active-goals v-if="selectedComponent === 'active-goals'" ></active-goals> -->
    <!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <keep-alive>
    <component :is="selectedComponent" ></component>
    </keep-alive>

  </div>
</template>

<!--  -------------------------------------------------------------  -->

<script>
import TheHeader   from './components/layout/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';


export default {

  components: {
    TheHeader, ActiveGoals, ManageGoals
  },
  data() {
    return {

      selectedComponent: 'active-goals',

      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponet(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<!--  -------------------------------------------------------------  -->

<style lang="scss">

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

</style>