const app = Vue.createApp({

    data(){
        return {

            inputA : 'OUTPUT',
            inputB : 'OUTPUT',
        }
    },

    methods: {

        alertBtnPressed () {
            alert('Button Pressed!');
        },

        setInputA (e) {
            this.inputA = e.target.value;
        },

        setInputB (e) {
            this.inputB = e.target.value;
        },
    }
});
app.mount('#assignment');





