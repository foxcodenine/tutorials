const app = Vue.createApp({

    data() {
        return {
            input : '',
            list : [],
            showList : true             
        }
    },
    computed: {
        btnText() {
            return this.showList ? 'Hide List' : 'Show List';
        }
    },
    methods: {
        addToList() {       
            const input = this.input.trim();
            if (input == '') return;
            this.list.push(input);
            this.input = '';
        },
        toggleList() {
            this.showList = !this.showList;
        }
    }

});

app.mount('#assignment');