<template>
	<el-container style="height: 100%;">
		<el-header style="border-bottom:1px solid red">Header</el-header>
		<el-container>
			<el-aside width="200px" style="border-right:1px solid red">
				<ul>
					<RouterLink to="/home">首页</RouterLink>
					<RouterLink to="/person">人员列表</RouterLink>
					<RouterLink to="/car">汽车列表</RouterLink>
				</ul>
			</el-aside>
			<el-main>
				<RouterView></RouterView>
			</el-main>
		</el-container>
	</el-container>
</template>
<script setup>
import { onBeforeMount } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

onBeforeMount(() => {
	const userName = sessionStorage.getItem('userName')
	if (!userName) {
		router.push('/login')
	}
})

</script>