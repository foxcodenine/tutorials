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
        boxAClass() {
            return { active: this.boxASelected };
        }
    },

    methods: {
        boxSelected(box) {
            switch(box) {
                case 'A':  this.boxASelected = !this.boxASelected; break;
                case 'B':  this.boxBSelected = !this.boxBSelected; break;
                case 'C':  this.boxCSelected = !this.boxCSelected; break;
            }
        }
    }
});

app.mount('#styling');