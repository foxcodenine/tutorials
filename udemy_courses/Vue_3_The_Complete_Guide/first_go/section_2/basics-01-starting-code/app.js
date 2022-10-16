const app = Vue.createApp({

    data() {
        return {
            title: '<h2>My Course Goal</h2>',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://vuejs.org/'
        };
    },

    methods: {
        
        outputGoal() {
            const randomNumber = Math.random();

            if (randomNumber  < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');