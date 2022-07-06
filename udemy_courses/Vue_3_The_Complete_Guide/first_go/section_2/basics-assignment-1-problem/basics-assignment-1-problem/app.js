const app = Vue.createApp({

    data() {
        return {
            firstname: 'Christopher',
            lastname: 'Farrugia',
            age: 37,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Dragon_from_China_Qing_Dynasty_Flag_1889.svg/670px-Dragon_from_China_Qing_Dynasty_Flag_1889.svg.png',
        }
    },

    methods: {

        ageInFiveYears() {
            return this.age + 5;
        },

        randomNumber() {
            return Math.ceil(Math.random()*10) / 10;
        },

        fetchFullname() {
            return `${this.firstname} ${this.lastname}`;
        }
    }
});

app.mount('#assignment');