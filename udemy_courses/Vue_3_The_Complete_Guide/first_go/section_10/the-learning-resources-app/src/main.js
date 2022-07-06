import { createApp } from 'vue'
import App from './App.vue'

import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

// _____________________________________________________________________

const app = createApp(App);

// _____________________________________________________________________

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

// _____________________________________________________________________

app.mount('#app');
