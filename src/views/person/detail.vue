<template>
	<el-form>
		<el-form-item label="date">{{ info.date }}</el-form-item>
		<el-form-item label="name">{{ info.name }}</el-form-item>
		<el-form-item label="address">{{ info.address }}</el-form-item>
	</el-form>
</template>
<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const info = ref(route.query)
</script>