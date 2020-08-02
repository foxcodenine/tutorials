// _____________________________________________________________________

Vue.component('my-cmp1', {
    data: function() {
        return {
            status: 'a vue component'
        }
    },
    template: `<p v-html='status'></p>`,
    methods: {
        bold: function() {
            this.status = 'This line of code is writen in ' + this.status.bold() + ' and in vue template!';
        }
    },
    mounted: function() {
        this.bold();
    }
})



// ____________________

let vm1 = new Vue({
    el: '#app1', 
    data: {
        status : 'vue instance data'
    },
    template: `<p>This line of code is writen in {{status}} and in vue template!</p>`
})


// ____________________


let vm2 = new Vue({
    el: '#app2'
})




// _____________________________________________________________________




let mydata = {
    status: 'critical!',
    OnOf: true
    
}


Vue.component('my-cmp2', {
    template: '<p>PC status {{status}} <button v-on:click="changeStatus()">Change</button></p>',
    data: function() {
        return mydata
    },
    methods: {
        changeStatus: function() {
            this.OnOf = !this.OnOf;
            this.status = this.OnOf == false ? 'critical' : 'normal'
        }
    }
})


let vm3 = new Vue({
    el: '#app3'
})


// ____________________





Vue.component('my-cmp4', {
    template: '<p>PC status {{status}} <button v-on:click="changeStatus()">Change</button></p>',
    data: function() {
        return {
            status: 'critical!',
            OnOf: true
    
        }
    },
    methods: {
        changeStatus: function() {
            this.OnOf = !this.OnOf;
            this.status = this.OnOf == false ? 'critical' : 'normal'
        }
    }
})


let vm4 = new Vue({
    el: '#app4'
})




// _____________________________________________________________________