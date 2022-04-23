const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredGoalValue: '',
      goalsQty: 0
     };
  },
  watch: {
    goalsQty(val) {
      console.log(val);
    }
  },
  computed: {

  },
  methods: {
    addGoals() {
      this.enteredGoalValue = this.enteredGoalValue.trim();

      if(this.enteredGoalValue !== '') {
        this.goals.push(this.enteredGoalValue);
        this.goalsQty = this.goals.length;
      }
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    }
  }
});

app.mount('#user-goals');
