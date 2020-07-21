// v-if and v-else

new Vue({

    el: '#app1',
    data: {
        showMe: true
    }
})

// _____________________________________________________________________

// Using an Alternative v-if Syntax (template)

new Vue({

    el: '#app2',
    data: {
        changeMe: true
    }
})

// _____________________________________________________________________

// v-show

new Vue({
    
    el: '#app3',
    data: {
        out_in: true
    }
})

// _____________________________________________________________________

// v-if , v-if-else & v-else

new Vue({

    el: '#app4',
    data: {
        pet: 'cat'
    }
})

// _____________________________________________________________________

// v-for

new Vue({

    el: '#app5',
    data: {
        ingridents: ['meat', 'fruit', 'cookies'],
        persons: [
            {name: 'Max', age: 27, color: 'red'},
            {name: 'Anne', age: 'unkown', color: 'blue'},
        ]
    }
});

// _____________________________________________________________________

// v-for, get current index

new Vue({

    el: '#app6',
    data: {
        myNumbers: ['zero', 'one', 'two', 'three', 'four'],

    }
});


// _____________________________________________________________________

// Alternative v-for (template)

new Vue({

    el: '#app7',
    data: {
        myNumbers: ['zero', 'one', 'two', 'three', 'four'],
    }
})


// _____________________________________________________________________

// Looping Through Objects

new Vue({
    el: '#app8', 
    data: {
        persons: [
            {name: 'Dorothy', age: 30, city: 'Qormi'},
            {name: 'Robert', age: 42, city: 'Mosta'},
            {name: 'Tania', age: 34, city: 'Zebbug'},
        ],

        foods: [
            {name: 'mango', calories: 90},
            {name: 'apple', calories: 70},
            {name: 'fig', calories: 35},
        ]


    }
})

// _____________________________________________________________________


// Looping Through Numbers

app9 = new Vue({
    el: '#app9'
});



// _____________________________________________________________________


app10 = new Vue({

    el: '#app10a',
    data: {
        mr: 0,
        name: ''
        
    }, 
    methods: {
        changeMr: function() {
            this.mr++

            if (this.mr > 2) {
                this.mr = 0;
            }
        },

        updateName: function(event) {
            
            let prfix = '';

            switch (this.mr) {
                case 0:
                    prifix = 'Mr';
                    break
                case 1:
                    prifix = 'Miss';
                    break
                default:
                    prifix = 'Mrs'
            }

            this.name = `${prifix} ${event.target.value}`;
        }
    }
})

