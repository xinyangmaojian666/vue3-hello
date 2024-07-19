<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router"

const router = useRouter()

const form = ref({
	name: '',
	password: ''
})

const login = () => {
	if (form.value.name == 'abc' && form.value.password == 'abc') {
		sessionStorage.setItem('userName', form.value.name)
		router.push('/')
	}
	else {
		alert('error')
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