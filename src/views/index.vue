<template>
	<el-container style="height: 100%;">
		<el-header>
			<h1>想放一个很牛的句子，或励志，或悠闲...</h1>
			<el-dropdown placement="bottom" trigger="click" @command="handleCommand">
				<span>欢迎你，<span class="name">{{ userName }}</span></span>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item command="logout">退出</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</el-header>

		<el-container>
			<el-aside width=" 200px" style="border-right:1px solid var(--el-border-color)">
				<el-menu :router="true" default-active="/person">
					<el-menu-item v-for="menu in menus" :key="menu.name" :index="menu.path">
						{{ menu.name }}
					</el-menu-item>
				</el-menu>
			</el-aside>

			<el-main style="height:calc(100vh - 60px); overflow: auto;">
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

const menus = ref([
	{
		name: '人员列表',
		path: '/person'
	},
	{
		name: 'CSS',
		path: '/css'
	},
	{
		name: 'Novel',
		path: '/novel'
	}
])

// 登录用户
const userName = ref(sessionStorage.getItem('userName'))
const handleCommand = () => {
	sessionStorage.removeItem('userName')
	router.push('/login')
}
</script>

<style lang="scss" scoped>
:deep(.el-header) {
	border-bottom: 1px solid var(--el-border-color);
	display: flex;
	justify-content: space-between;
	align-items: center;

	.name {
		color: var(--el-color-primary);
		text-decoration: underline;
		cursor: pointer;
	}
}

:deep(.el-aside .el-menu) {
	border-right: none;
}
</style>