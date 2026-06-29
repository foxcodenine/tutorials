import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
})
