import { createApp } from 'vue'
import { createPinia } from 'pinia'

import WeatherApp from './components/HomeContent.vue'
const pinia = createPinia()
// createApp =  new implications instances always import from "vue" argument = root component
const app = createApp(WeatherApp)
app.use(pinia)

// mounting the app , needed for rendering , takes an argument container . should be called at last
app.mount('#app')
