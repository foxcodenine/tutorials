new Vue({
    el: '#app1',
    data: {
        title: 'Hello Vue World!'
    }
});

// _____________________________________________________________________

new Vue({
    el: '#app2',
    methods: {
        sayHello: function() {
            return 'Hello!'
        }
    }
});

// _____________________________________________________________________

new Vue({
    el: '#app3',
    data: {
        title: 'Vue is awesome!'
    },
    methods: {        
        repeat: function() {
            return this.title
        },
        
    }
});

// _____________________________________________________________________

new Vue({
    el: '#app4',
    data: {
        text: 'Google',
        link: 'http://google.com'
    }
});

// _____________________________________________________________________

new Vue({
    el: '#app5',
    data: {
        title: '1st render!'
    },
    methods: {
        overwrite: function() {
            this.title = '2nd render!'
            return this.title
        }
    }
});

// _____________________________________________________________________

new Vue({
    el: '#app6',
    data: {
        finishedLink: '<a href="https://en.wikipedia.org/wiki/Vue.js">Vue</a>'
    }
});

// _____________________________________________________________________

new Vue({
    el: '#app7',
    data: {
        counter: 0
    },
    methods: {
        increase: function() {
            this.counter++;
        }
    } 
});

// _____________________________________________________________________

new Vue({
    el: ' #app8',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        curserPosition: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});

// _____________________________________________________________________

new Vue({
    el: '#app9',
    data: {
        twoClicks: 0,
    },
    methods: {
        addTwo: function(step, event) {
            this.twoClicks  += step;
            console.log(this.twoClicks, event.target)
        }
    }
})

// _____________________________________________________________________


new Vue({
    el: '#app10',
    data: {
        x: 0,
        y: 0
    },
    methods: {
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        dummy: function(event) {
            event.stopPropagation();
        }
        
    }
});

// _____________________________________________________________________


new Vue({
    el: '#app11',
    data: {
        d: 'Default Text'
    }, 
    methods : {
        submitForm: function() {
            this.d = 'event_default_has_been_prevented'
        }
    }
});

// _____________________________________________________________________


new Vue({

    el: '#app12',
    data: {
        input: []
    },
    methods: {
        alertMe: function(event) {
            this.input.push(event.target.value)
            alert(`Alert ${this.input}`);
        }
    }
    
});