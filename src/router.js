
import { createRouter, createWebHistory } from "vue-router"
import Login from "./components/login.vue"
import Index from './components/index.vue'
import PersonList from "./components/person-list.vue"
import CarList from "./components/car-list.vue"
import Home from "./components/home.vue"
import PersonDetail from "./components/person-detail.vue"

const routes = [
	{ path: '/login', component: Login },
	{
		path: '/',
		component: Index,
		redirect: '/home',
		children: [
			{ path: '/home', component: Home },
			{ path: '/person', component: PersonList },
			{ path: '/person/:id', component: PersonDetail },
			{ path: '/car', component: CarList },
		]
	},

]

export const router = createRouter({
	history: createWebHistory(),
	routes
})