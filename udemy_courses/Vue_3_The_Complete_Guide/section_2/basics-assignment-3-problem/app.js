const app = Vue.createApp({
    
    data() {
        return {
            result: 0,
            timeOut: false
        }
    },

    watch: {

        result(value) {

            clearTimeout(this.timeOut);
            
            this.timeOut = setTimeout(() => {
                this.result = 0
            }, 5000);
 
        }
    },

    computed: {

        fetchResult() {

            switch(true) {

                case this.result < 37:
                    return "Not there yet";
                    break
                case this.result > 37:
                    return "Too much!";
                    break
                default:
                    return 37;
            }
        } 
    },

    methods: {

        addOne () {
            ++this.result;
        },

        addFive () {
            this.result += 5;
        },
    }
});

app.mount('#assignment');