Vue.component('hello', {
    template: `<h4>This is a Vue Compnent</h4>`
});




var vm1 = new Vue({
    // el: '#app1',
    data: {
        title: 'The VueJS Instace',
        showParagraoh: false,
    },
    methods: {
        show: function() {
            this.showParagraoh = true;
            this.updateTitle('The VueJS Instance (Update)');
            this.testingRefs();
 
        },
        updateTitle: function(title) {
            this.title = title;
        },
        testingRefs: function() {
            console.log(this.$refs)
            this.$refs.myButton.innerText = 'this was changed  using refs!'
        },
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }, 
    },
    watch: {
        title: function(value) {
            alert('Title change, new value: ' + value)
        }
    }
})

// _________________________

vm1.$mount('#app1');

// _________________________

// setTimeout(function() {
//     vm1.title = 'Change by timer!'
// }, 3000);


// _________________________

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

// _________________________

var vm3 = new Vue({
    template: `
        <h4> $el - $data - $refs - $mount & template</h4>
    `
})
// _________________________

// This will created off screen and appended to element

vm3.$mount();
document.querySelector('#app3').appendChild(vm3.$el);

// _________________________





console.log(vm1.$el);
console.log(vm1.$data);
console.log(vm1.$refs);

// _________________________

var vm4 = new Vue({
    el: '#app4',
    data: {
        title: 'Vue Instance Lifecucle'
    },
    beforeCreate: function() {
        console.log('beforeCreate()');
    },
    created: function() {
        console.log('created()');
    },
    beforeMount: function() {
        console.log('beforeMount()');
    },
    mounted: function() {
        console.log('mounted()');
    },
    beforeUpdate: function() {
        console.log('beforeUpdate()');
    },
    updated: function() {
        console.log('updated()');
    },
    beforeDestroy: function() {
        console.log('beforeDestroy()');
    },
    destroyed: function() {
        console.log('destroyed()');
    },
    methods: {
        updateInstance() {
            this.title = 'Title Changed!'
        },
        destroyInstace: function() {
            this.$destroy();
        }
    }
})