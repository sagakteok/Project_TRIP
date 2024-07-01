import { createApp } from 'vue'
import './style.css'
import { registerPlugins } from "./plugins/index.js";
import App from './App.vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')