import { createApp } from 'vue'
import App from './App.vue'
import NewFriend from './components/NewFriend.vue'

const app = createApp(App);

app.component('new-friend', NewFriend);

app.mount('#app');