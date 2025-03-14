import { createApp } from 'vue';

import store from './store/index.js';
import router from './router.js';

// _____________________________________________________________________

import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

// _____________________________________________________________________

const app = createApp(App)

app.use(router);
app.use(store);

// _____________________________________________________________________

app.component('base-badge', BaseBadge);

app.mount('#app');
