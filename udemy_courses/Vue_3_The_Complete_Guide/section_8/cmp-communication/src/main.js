import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue';

// _____________________________________________________________________

const app = createApp(App);

// _____________________________________________________________________

app.component('friend-contact', FriendContact);

// _____________________________________________________________________

app.mount('#app');


