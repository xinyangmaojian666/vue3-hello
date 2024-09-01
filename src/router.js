
import { createRouter, createWebHistory } from "vue-router"
import Login from "./Login.vue"
import Index from './views/index.vue'
import PersonList from "./views/person/index.vue"
import PersonDetail from "./views/person/detail.vue"
import Css from "./views/css/index.vue"
import Novel from "./views/novel/index.vue"

const routes = [
	{ path: '/login', component: Login },
	{
		path: '/',
		component: Index,
		redirect: '/person',
		children: [
			{ path: '/person', component: PersonList },
			{ path: '/person/:id', component: PersonDetail },
			{ path: '/css', component: Css },
			{ path: '/novel', component: Novel }
		]
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})