const app = Vue.createApp({

    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },

    watch: {
        boxASelected(val) {
            if (val === true) {
                this.boxBSelected  = this.boxCSelected = false;
            }            
        },
        boxBSelected(val) {
            if (val === true) {
                this.boxASelected  = this.boxCSelected = false;
            }            
        },
        boxCSelected(val) {
            if (val === true) {
                this.boxBSelected  = this.boxASelected = false;
            }            
        },
    },
    computed: {
        boxCStyle() {
            return {borderColor: this.boxCSelected ? 'red' : '#ccc'}
        }
    },

    methods: {
        boxSelected(box) {
            switch(box) {
                case 'A':  this.boxASelected = true; break;
                case 'B':  this.boxBSelected = true; break;
                case 'C':  this.boxCSelected = true; break;
            }
        }
    }
});

app.mount('#styling');