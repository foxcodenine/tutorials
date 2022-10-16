import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

// _____________________________________________________________________

const app = createApp(App);

// _____________________________________________________________________

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);

// _____________________________________________________________________

app.mount('#app');


