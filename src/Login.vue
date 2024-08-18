<script setup>
import { post } from '@/api/http';
import { ref } from 'vue'
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus";

const router = useRouter()

const form = ref({
	name: '正和天下',
	password: '123456'
})

const login = () => {
	if (form.value.name && form.value.password) {
		post('/login', {
			name: form.value.name,
			pwd: form.value.password
		}).then(res => {
			if (res.isSuccess) {
				sessionStorage.setItem('userName', form.value.name)
				router.push('/')
			}
		})
	}
	else {
		ElMessage.error('用户名密码不能为空')
	}
}
</script>

<template>
	<section class="page">
		<div class="container">
			<el-form :model="form" label-width="80px">
				<el-form-item label="用户名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="form.password" type="password"></el-input>
				</el-form-item>
				<div style="text-align: right;">
					<el-button @click="login">登录</el-button>
				</div>
			</el-form>
		</div>
	</section>
</template>
<style lang="scss" scoped>
.page {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(./assets/login.jpg);
	background-size: cover;

	.container {
		background: rgba(255, 255, 255, 0.5);
		border-radius: 4px;
		padding: 16px 16px 16px 0px;

		:deep(.el-form-item__label) {
			color: var(--color-text);
		}
	}
}
</style>