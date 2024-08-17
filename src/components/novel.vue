<template>
	<el-button type="primary" :disabled="copyBtnDisabled" @click="handleCopy">Copy [{{ start }},{{ end }}] 行</el-button>

	<div id="content" style="font-size: 24px;">
		<p> 那个玩偶小熊的眼珠子黑乎乎的，像是在审视着众人。</p>
		<p> 宁秋水小心来到了尸骨面前，检查了一番，开口道：</p>
		<p> “……这个人不是被吃掉的。”</p>
		<p> “她的肋骨，胸骨，喉骨处没有任何刀叉的痕迹。”</p>
		<p> 他之前检查过王雨凝和丫末的尸体，二人虽然被吃掉的是内脏和一些肌肉组织，但骨骼上也有不少刀叉的伤痕。</p>
		<p> 但眼前的这具尸骨没有。</p>
		<p> “不是被吃掉的？”</p>
		<p> “那她是怎么死的？”</p>
		<p> 刘承峰疑惑愈重。</p>
		<p> 宁秋水打量了尸体许久。</p>
		<p> “大概率是饿死或者渴死的。”</p>
		<p> “外面的那个鬼东西应该进不来这个房间，可她也出不去，被困在这里了……不喝水，不吃饭，大部分人三五天就得死。”</p>
		<p> “喏，这窗户被钢条钉死了，钢条上锈渍很重，跟二楼老太太房间的不同，说明这钢条是很久以前钉上去的，很可能是小时候，她的家人担心他翻窗子掉出去，毕竟这里是三楼，于是给她的窗户钉上了钢条。”</p>
		<p> “但那个时候，她的家人大概没有想到，正是这些钢条……断了她最后逃生的希望！”</p>
		<p> 刘承峰听着宁秋水的话，内心蔓延过一阵冰冷凉意。</p>
		<p> 他能够想象当时眼前这具尸骨生前的绝望。</p>
		<p> 外面有可怕的食人妖魔，而房间里又没有其他路离开，最终她只能在绝望之中被活活困死在了这里！</p>
		<p> “哎，小哥，快看，那个尸体的屁股后面……好像有东西！”</p>
		<p>喜欢诡舍请大家收藏：(www.shuhaige.net)诡舍书海阁小说网更新速度全网最快。</p>
	</div>

</template>
<script setup>
import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { ref } from 'vue';

const { copy } = useClipboard()

// 开始行
const start = ref(0)
// 结束行
const end = ref(50)
// copy按钮是否禁用
const copyBtnDisabled = ref(false)

// 复制行，每次50行
const handleCopy = () => {
	const ps = document.getElementById('content').children
	let i = start.value
	let content = ''
	while (i < end.value && ps[i]) {
		content += ps[i].innerText + '\n'
		i++
	}

	copy(content).then(() => {
		ElMessage({
			message: '复制成功',
			type: 'success'
		})

		if (end.value >= ps.length) {
			copyBtnDisabled.value = true
		} else {
			// 更改开始行、结束行
			start.value = end.value
			end.value += 50
		}
	})
}
</script>