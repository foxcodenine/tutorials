const app = Vue.createApp({

    data() {
        return {
            myName: 'Christopher Farrugia',
            myAge: 37,
            myImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy8XG_kWlE2FkUL7G8-reektU_lYTrD1m95g&usqp=CAU'
        }
    },
    computed: {
        myAgeInFiveYears() {
            return this.myAge + 5;
        }
    },
    methods: {
        randNumber() {
            return Math.ceil(Math.random() * 10) / 10;
        }
    }

})

app.mount('#assignment')