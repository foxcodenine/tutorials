<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template v-slot:default="slotProps" >
        <h2>{{ slotProps.itemProp }}</h2>
        <div class="capitalize">{{ slotProps.anotherProp }}</div>
      </template>
    </course-goals>
  </div>
</template>

<!-- --------------------------------------------------------------- -->

<script>
import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue';
import TheHeader from './components/TheHeader.vue';
import UserInfo from './components/UserInfo.vue';
export default {
  components: { TheHeader, BadgeList, UserInfo, CourseGoals },
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