const app = Vue.createApp({

    data() {
        return {
            input1: '',
            btn: false,
            myColor: ''
        }
    },
    watch: {
        btn(val) {
            console.log(val)
        }
    },
    computed: {
        hideElement() {
            return this.btn === true ? 'hidden' : 'visible';
        },
        fetchColor() {
            return this.myColor;
        }
    },
    methods: {
        toggelBtn() {
            this.btn = !this.btn;
        }
    }
});

app.mount('#assignment');