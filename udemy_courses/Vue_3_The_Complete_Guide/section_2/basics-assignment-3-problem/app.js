const app = Vue.createApp({

    data() {
        return {
            count: 0,
            result: 'Not there yet',
            appTimer: false

        }
    },
    watch: {
        count(value) {
            clearTimeout(this.appTimer);

            switch(true) {
                case value < 37:
                    this.result = 'Not there yet';
                    break;
                case value > 37:
                    this.result = 'Too much';
                    break;
                default:
                    this.result = 'Exactly';
            }
            const self = this;

            this.appTimer = setTimeout(function() {
                self.count = 0;
            }, 2000);
        }
    },
    computed: {
        countResult() {
            return this.result
        }
    },
    methods: {
        addToCount($i) {
            this.count += $i;
            console.log(this.count)
        }
    }
});

app.mount('#assignment');