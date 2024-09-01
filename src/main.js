import './assets/main.css'
import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";



createApp(App).use(router).mount('#app')