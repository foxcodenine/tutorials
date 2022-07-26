const app = Vue.createApp({

    data() {
        return {
            output_1: '',
            output_2: ''
        }
    },
    computed: {

    },
    methods: {
        showAlert() {
            alert('Hi this is my alert!');
        },
        updateOutput_1(e) {
            this.output_1 = e.target.value
        },
        updateOutput_2(e) {
            this.output_2 = e.target.value
        },
    }
});

app.mount('#assignment');