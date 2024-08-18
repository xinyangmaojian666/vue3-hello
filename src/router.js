
import { createRouter, createWebHistory } from "vue-router"
import Login from "./Login.vue"
import Index from './components/index.vue'
import PersonList from "./components/person-list.vue"
import PersonDetail from "./components/person-detail.vue"
import Css from "./components/css.vue"
import Novel from "./components/novel.vue"

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