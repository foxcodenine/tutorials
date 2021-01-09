const app1 = new Vue({
    el: '#app_1',
    data: {
        test: 'Hover me!',
        myStyle: {
            backgroundColor: 'gold',
            padding: '1rem',
            cursor: 'pointer'
        }, 
        message: 'You load this page on ' + new Date().toLocaleString()
    }
});

// _____________________________________________________________________

const app2 = new Vue({
    el: '#app_2',
    data: {
        message: 'I love ADA', 
        test: 123
    }, 
    methods: {
        reverseMessage: function() {
            this.message = this.message.split(' ').reverse().join().replace(/,/g, ' ');
            console.log(this.message)
        }
    }
});

// _____________________________________________________________________

// Define a new component:

Vue.component('todo-item', {

    template: '<span><li>1st line</li>' + '<li>2nd line</li>'+
              '<li>3rd line</li></span>'
})

const app3 = new Vue({
    el: '#app_3'
})

// _____________________________________________________________________


Vue.component('buy-items', {
    props: ['buy'],
    template: '<li>{{ buy.text }}</li>'
})

const app4 = new Vue({
    el: '#app_4',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetable'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Whatever else humans are supposed to eat'},
        ]
    }
});
