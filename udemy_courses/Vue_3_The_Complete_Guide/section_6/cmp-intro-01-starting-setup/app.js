const app = Vue.createApp({

    data() {
        return {
            friends: [
                {id: 'manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com'},
                {id: 'julie',  name: 'Julie Jones',   phone: '09876 5432 221', email: 'julie@localhost.com'},
            ],            
        }
    },
    methods: {        
    },
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{ friend.name }}</h2>
            <button v-on:click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisable">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
    `,
    data() {
        return { 
            detailsAreVisable: true,
            friend: {id: 'manuel', name: 'Manuel Lorenz', phone: '01234 5678 991', email: 'manuel@localhost.com'}
         }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisable = !this.detailsAreVisable;
        }
    }
});

app.mount('#app');