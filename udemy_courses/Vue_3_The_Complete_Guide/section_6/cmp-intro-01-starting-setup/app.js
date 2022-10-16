const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manual', 
                    name: 'Manual Lorenz', 
                    phone: '01234 45678991', 
                    email: 'manual@localhost.com'
                },
                {
                    id: 'julie', 
                    name: 'Julie Jones', 
                    phone: '09876 543 221', 
                    email: 'julie@localhost.com'
                },
            ]
        }
    },
    computed: {},
    methods: {}
});

app.component( 'friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button v-on:click="toggleDetails" >Show Details</button>
            <ul v-if="detailsAreVisable">
                <li><strong>Phone:</strong> {{ friend.phone }} </li>
                <li><strong>Email:</strong> {{ friend.email }} </li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisable:  false,
            // friend: {
            //             id: 'manual', 
            //             name: 'Manual Lorenz', 
            //             phone: '01234 45678991', 
            //             email: 'manual@localhost.com'
            //         },
        }
    },
    props: { friend: Object},
    computed: {

    },
    methods: {
        toggleDetails() {
            this.detailsAreVisable = !this.detailsAreVisable;
        }
    }
} );

app.mount('#app');