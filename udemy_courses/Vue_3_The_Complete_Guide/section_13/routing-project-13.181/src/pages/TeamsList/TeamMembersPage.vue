<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to team 2</router-link>
  </section>
</template>

<script>
  /* eslint-disable */
import UserItem from '../../components/users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  props: ['teamId'],
  inject: ['users','teams'],
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  methods: {
    loadTeamMembers(route) {
      console.log('teamId', this.teamId);
      // this.$route.path
      // const teamId = this.$route.params.teamId;
      const teamId = route.params.teamId;
      const selectedTeam = this.teams.find((team) => {
        return team.id == teamId;
      });
      const members = selectedTeam.members;
      const selectedMembers = this.users.filter((user) => {
        return members.includes(user.id);
      });
      
      this.teamName = selectedTeam.name;
      this.members = selectedMembers;
    }
  },
  watch: {
    $route(newRoute) {
      console.log(newRoute);
      this.loadTeamMembers(newRoute);
    }
  },
  created() {
    this.loadTeamMembers(this.$route);
    console.log(this.$route.query)
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>