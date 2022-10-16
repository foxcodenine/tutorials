import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import BaseCard from './components/ui/BaseCard';
import BaseButton from './components/ui/BaseButton';
import BaseBadge from './components/ui/BaseBadge';
import BaseSpiner from './components/ui/BaseSpiner';
import BaseDialog from './components/ui/BaseDialog';

createApp(App)
    .use(store)
    .use(router)
    .component('base-card', BaseCard)
    .component('base-button', BaseButton)
    .component('base-badge', BaseBadge)
    .component('base-spiner', BaseSpiner)
    .component('base-dialog', BaseDialog)
    .mount('#app');
