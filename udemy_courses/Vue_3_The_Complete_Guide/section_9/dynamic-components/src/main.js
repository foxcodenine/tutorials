import { createApp } from 'vue';

import App from './App.vue';

import BaseBadge from './components/UI/BaseBadge.vue';
import BaseCard from './components/UI/BaseCard.vue';

// _____________________________________________________________________

const app = createApp(App);

// _____________________________________________________________________

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

// _____________________________________________________________________

app.mount('#app');