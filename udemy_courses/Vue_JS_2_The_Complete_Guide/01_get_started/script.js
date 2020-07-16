new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue World!'
    },
    methods: {
        changeTitle: function(event) {
            this.title =  event.target.value;
        }
    }
});