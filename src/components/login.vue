<script setup>
import { post } from '@/api/http';
import { ref } from 'vue'
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus";

const router = useRouter()

const form = ref({
	name: '',
	password: ''
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
	<el-form :model="form">
		<el-form-item label="用户名">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="密码">
			<el-input v-model="form.password"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button @click="login">登录</el-button>
		</el-form-item>
	</el-form>
</template>