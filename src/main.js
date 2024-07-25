import './assets/main.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

if (import.meta.env.MODE === 'development') {
	const { worker } = await import('./api/mock')
	worker.start()
}

createApp(App)
	.use(router)
	.use(ElementPlus)
	.mount('#app')
