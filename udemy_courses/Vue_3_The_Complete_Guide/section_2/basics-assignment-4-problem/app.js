const app = Vue.createApp({

    data() {
        return {
            inputOne: '',
            inputOneVisable: true,
            inputTwo: ''
        }
    },
    watch: {

    },
    computed: {
        backgroudColor() {
            return {'backgroundColor': this.inputTwo}
        }
    },
    methods: {
        inputOneToggle() {
            this.inputOneVisable = !this.inputOneVisable;
        }
    }
});

app.mount('#assignment');