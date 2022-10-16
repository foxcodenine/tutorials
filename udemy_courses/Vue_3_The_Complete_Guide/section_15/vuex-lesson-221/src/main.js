import { createApp } from 'vue';


import App from './App.vue';
import store from './store.js'

// _____________________________________________________________________



const app = createApp(App);

app.use(store);

// _____________________________________________________________________

app.mount('#app');
