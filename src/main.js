import './assets/main.css'
import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

// If you want to use ElMessage, import it.
import "element-plus/theme-chalk/src/message.scss";

if (import.meta.env.MODE === 'development') {
	const { worker } = await import('./api/mock')
	worker.start()
}

createApp(App).use(router).mount('#app')


