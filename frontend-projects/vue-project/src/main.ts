import { createApp } from 'vue'
import router from './router'

import App from './App.vue'

// createApp =  new implications instances always import from "vue" argument = root component
const app = createApp(App)
app.use(router)

// mounting the app , needed for rendering , takes an argument container . should be called at last
app.mount('#app')
