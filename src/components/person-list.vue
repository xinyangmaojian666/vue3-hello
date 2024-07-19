<template>
	<header style="border-bottom: 1px solid #333;">
		<el-button type="primary" @click="add">新增</el-button>
	</header>

	<el-table :data="tableData" style="width: 100%">
		<el-table-column prop="name" label="Name" width="180">
			<template #default="{ row }">
				<span style="color:blue" @click="gotoDetail(row)">{{ row.name }}</span>
			</template>
		</el-table-column>

		<el-table-column prop="date" label="Date" width="180" />
		<el-table-column prop="address" label="Address" />
		<el-table-column fixed="right" label="Operations" min-width="120">
			<template #default="{ row }">
				<el-button link type="primary" size="small" @click="remove(row.id)">删除</el-button>
				<el-button link type="primary" size="small" @click="edit(row.id)">编辑</el-button>
			</template>
		</el-table-column>
	</el-table>

	<el-dialog v-model="dialog.visible" title="编辑" width="500">
		<el-form>
			<el-form-item label="date">
				<el-input v-model="dialog.date"></el-input>
			</el-form-item>
			<el-form-item label="name">
				<el-input v-model="dialog.name"></el-input>
			</el-form-item>
			<el-form-item label="address">
				<el-input v-model="dialog.address"></el-input>
			</el-form-item>
		</el-form>
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="dialog.visible = false">Cancel</el-button>
				<el-button type="primary" @click="sure">Confirm</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const tableData = ref([
	{
		id: '111',
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		id: '222',
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		id: '333',
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		id: '444',
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
])
const add = () => {
	const id = Math.random().toString()
	tableData.value.push({
		id,
		date: '666',
		name: id,
		address: '666'
	})
}
const remove = (id) => {
	const index = tableData.value.findIndex(item => item.id === id)
	tableData.value.splice(index, 1)
}

const dialog = ref({
	visible: false,
	id: '',
	date: '',
	name: '',
	address: ''
})
const edit = (id) => {
	const obj = tableData.value.find(item => item.id === id)
	if (obj) {
		dialog.value.visible = true
		dialog.value.id = id
		dialog.value.date = obj.date
		dialog.value.name = obj.name
		dialog.value.address = obj.address
	}
}

const sure = () => {
	const obj = tableData.value.find(item => item.id === dialog.value.id)
	if (obj) {
		dialog.value.visible = false
		obj.date = dialog.value.date
		obj.name = dialog.value.name
		obj.address = dialog.value.address
	}
}

const gotoDetail = (row) => {
	router.push({
		path: '/person/' + row.id,
		query: row
	})
}
</script>