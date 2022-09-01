<template>
  <div>
    <the-header></the-header>

    <button v-on:click="setSelectedComponent('active-goals')">Active Goals</button>
    <button v-on:click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->
    <!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    
    <keep-alive>
      <component :is="selectedComponent"></component>   
    </keep-alive>

  </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue';
import TheHeader from './components/layout/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';
import ManageGoals from './components/ManageGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
export default {
  components: { TheHeader, BadgeList, UserInfo, CourseGoals, ManageGoals, ActiveGoals },
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
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<!-- --------------------------------------------------------------- -->



<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.capitalize {
  text-transform: capitalize;
}
</style>