// Vue element and data

new Vue({
    el: '#app1',
    data: {
        title: 'Hello Vue World!'
    }
});

// _____________________________________________________________________

// Vue methods

new Vue({
    el: '#app2',
    methods: {
        sayHello: function() {
            return 'Hello!'
        }
    }
});

// _____________________________________________________________________

// Accessing Data in the View Instance 

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
// Binding to Attribute / Understanding and Using Directives

new Vue({
    el: '#app4',
    data: {
        text: 'Google',
        link: 'http://google.com'
    }
});

// _____________________________________________________________________

// Disabling Re-Rendering With v-once

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

// Output raw HTML:

new Vue({
    el: '#app6',
    data: {
        finishedLink: '<a href="https://en.wikipedia.org/wiki/Vue.js">Vue</a>'
    }
});

// _____________________________________________________________________
// Listen to an Event:
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

// Get Events Data from an Event Object

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
// Passing Your own Arguments to an Event

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

// Modifying an Event with Event Modifiers

new Vue({
    el: '#app10',
    data: {
        client:{
            x: 0,
            y: 0
        },
        screen: {
            x: 0,
            y: 0
        }
        
    },
    methods: {
        updateCoordinates: function(event) {
            this.client.x = event.clientX;
            this.client.y = event.clientY;
            
            this.screen.x = event.screenX;
            this.screen.y = event.screenY;
        },
        dummy: function(event) {
            event.stopPropagation();
        }
        
    }
});

// _____________________________________________________________________

// Modifying an Event with Event Modifiers (Prevent)

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

//  Listening To Keyboard Events
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

// _____________________________________________________________________

// Writing Javascript Code in Template

new Vue({
    el: '#app13',
    data: {
        counter1: 0,
        counter2: 0
    },
    methods: {
        clickMe: function(step) {
            this.counter1 += step;
        }
    }
})

// _____________________________________________________________________

// Two Way Binding:

new Vue({
    el: '#app14',
    data: {
        name: 'Max'
    }
});

// _____________________________________________________________________

// Computed Properties
// https://css-tricks.com/methods-computed-and-watchers-in-vue-js/

new Vue({

    el: '#app15',
    data: {
        counter: 0,
        secondCounter: 0,
        method_used: 0,
        compute_used:0

    },
    computed: {
        output :function() {  
            console.log('used Computed')            
            return this.counter >= 0 ? 'Positive Number' : 'Negative Number'
            // Computed - They are cached based on dependency and only
            // re-evaluate on dependency change.
        }
    },
    methods: {  
            
        resultCheck :function() {  
            console.log('used Method')            
            return this.counter >= 0 ? 'Positive Number' : 'Negative Number'
            // A method invocation will always run the function whenever
            // a re-render happens
        }
    }
});

// _____________________________________________________________________

new Vue({

    el: '#app16',
    data: {
        counter: 0
    },
    computed: {
        resultState: function() {

            console.log('computed')

            if (this.counter === 0 ) {
                return 'Zero';
            } else if (this.counter > 0) {
                return 'Positive';
            } else {
                return 'Negative'
            }
        }
    },

    watch: {

        counter: function(value) {

            console.log('watch')
            
            var self = this;

            setTimeout(function() {
                self.counter = 0;
            }, 3000);
        }
        // A watcher is a special Vue. js feature that allows you to spy
        // on one property of the component state, and run a function
        // when that property value changes.

    },
    methods: {
        
        toZero: function() {
            console.log('method')
            this.counter = 0;
        }
    }
});


// _____________________________________________________________________


new Vue({
    el: '#app17',
    data: {
        von: 'v-on  = @',
        vbind: 'v-bind = :'
    }
});

// _____________________________________________________________________

// Dynamic Styling:
new Vue({

    el: '#app18',
    data: {
        addRed: false,
        addBlue: false,
        addGreen: false
    }
});

// _____________________________________________________________________

new Vue({

    el: '#app19',
    data: {
        addRed: false,        
    },
    computed: {
        switchOne: function() {
            return {'red': this.addRed, 'yellow': !this.addRed }
        },
        switchTwo: function() {
            return {'red': !this.addRed, yellow: this.addRed}
        }
    }
});

// _____________________________________________________________________


new Vue({

    el: '#app20',
    data: {
        box_color: 'yellow',
        border_on: false
    }

});

// _____________________________________________________________________


new Vue({
    el: '#app21',
    data: {
        myColor: 'red',
        myWidth:  '10rem'
    },
    computed: {
        myStyle: function() {
            
            return {
                'backgroundColor': this.myColor,
                'width': this.myWidth
            }
        }
    }
});

// _____________________________________________________________________



new Vue({

    el:'#app22',
    data: {
        myColor: 'red',
        myWidth: 10, 
        myUnits: 'px'
    }
})