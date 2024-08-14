
import { createRouter, createWebHistory } from "vue-router"
import Login from "./components/login.vue"
import Index from './components/index.vue'
import PersonList from "./components/person-list.vue"
import PersonDetail from "./components/person-detail.vue"
import Css from "./components/css.vue"

const routes = [
	{ path: '/login', component: Login },
	{
		path: '/',
		component: Index,
		redirect: '/person',
		children: [
			{ path: '/person', component: PersonList },
			{ path: '/person/:id', component: PersonDetail },
			{ path: '/css', component: Css }
		]
	},

]

export const router = createRouter({
	history: createWebHistory(),
	routes
})