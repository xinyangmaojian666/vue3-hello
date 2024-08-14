<template>
	<el-container style="height: 100%;">
		<el-header style="border-bottom:1px solid red">Header</el-header>
		<el-container>
			<el-aside width="200px" style="border-right:1px solid red">
				<ul>
					<li v-for="item in menus" :key="item.name">
						<RouterLink :to="item.path">{{ item.name }}</RouterLink>
					</li>
				</ul>
			</el-aside>
			<el-main>
				<RouterView></RouterView>
			</el-main>
		</el-container>
	</el-container>
</template>
<script setup>
import { onBeforeMount, ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

onBeforeMount(() => {
	const userName = sessionStorage.getItem('userName')
	if (!userName) {
		router.push('/login')
	}
})

const menus = ref([{
	name: '人员列表',
	path: '/person'
}, {
	name: 'CSS',
	path: '/css'
}])

</script>