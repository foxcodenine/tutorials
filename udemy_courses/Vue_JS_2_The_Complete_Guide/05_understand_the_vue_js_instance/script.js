var vm1 = new Vue({
    el: '#app1',
    data: {
        title: 'The VueJS Instace',
        showParagraoh: false,
    },
    methods: {
        show: function() {
            this.showParagraoh = true;
            this.updateTitle('The VueJS Instance (Update)');
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase()
        }
    },
    watch: {
        title: function(value) {
            alert('Title change, new value: ' + value)
        }
    }
})

setTimeout(function() {
    vm1.title = 'Change by timer!'
}, 3000);

var vm2 =  new Vue({
    el: '#app2',
    data: {
        title: 'The second Instance',
    },
    methods: {
        onChange: function() {
            vm1.title = 'Changed from Vue2!'
        }
    }
})