import './assets/main.css'
import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

if (import.meta.env.MODE === 'development') {
	const { worker } = await import('./api/mock')
	worker.start()
}

createApp(App)
	.use(router)
	.mount('#app')
