<template>
  <div>

    <the-header></the-header>

    <badge-list></badge-list>

    <user-info
      v-bind:full-name="activeUser.name"
      v-bind:info-text="activeUser.description"
      v-bind:role="activeUser.role"
    ></user-info>

    <course-goals>
      <template v-slot:default="slotProp">
        <h3>{{slotProp.slotProp}}</h3>
        <h4>{{slotProp.anotherProp}}</h4>
      </template>

    </course-goals>
  </div>
</template>

<!--  -------------------------------------------------------------  -->

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue'

export default {

  components: {
    TheHeader, BadgeList, UserInfo, CourseGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
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