<template>
	<el-button type="primary" :disabled="copyBtnDisabled" @click="handleCopy">Copy [{{ start }},{{ end }}] 行</el-button>

	<div id="content" style="font-size: 24px;">
		<p> “等到一周后，该你们进入血门执行第二个任务的时候，大巴车会提前来接你们的……”</p>
		<p> 餐桌上，四人对坐无言，埋头猛吃。</p>
		<p> “说实话，你们厨艺真的不咋滴……”</p>
		<p> 刘承峰吃了几口，忍不住吐槽了一句。</p>
		<p> 做饭的孟军抬头，冷冷看了刘承峰一眼：</p>
		<p> “不喜欢吃可以倒掉，也可以自己去做。”</p>
		<p> 刘承峰本是个大大咧咧的人，脾气也不是很好，本来想要怼回去，然而在跟孟军对视的时候，却是缩了缩脖子。</p>
		<p> 孟军的眼神太可怕了。</p>
		<p> 那一瞬间，刘承峰甚至感觉到好像有一把刀架在自己的脖子上！</p>
		<p> 他几乎可以确定，这个叫孟军的男人……杀过人！</p>
		<p> 不过，刘承峰也不是吃哑巴亏的人，他梗着脖子道：</p>
		<p> “自己做就自己做！”</p>
		<p> “我把话撂这儿，从今天开始，我刘承峰就是这里的厨师长，以后，只要我在，你们都不准进厨房，想吃什么，我给你们做！”</p>
		<p> 他用强硬的语气说出了最怂的话。</p>
		<p> 宁秋水忍不住笑了笑。</p>
		<p> 饭间，他了解到了这座诡舍里还剩下四个老人，良言是舍长，也是最早进入诡舍的人。</p>
		<p> 少年叫田勋，是一个与妹妹相依为命的孤儿。</p>
		<p> 孟军是良言在外面世界的挚友，以前是军人，在边境上过战场。</p>
		<p> 唯一的那个妖冶美人白潇潇很神秘，众人对她的身份不了解，只知道她在外面的世界……很厉害。</p>
		<p> 期间，宁秋水又聊起过关于他们第一扇血门里面那只红衣女鬼的事，谁知孟军和田勋听完之后，一言不发。</p>
		<p> “不是……你们怎么不说话啊？”</p>
		<p> 见二人如此沉默，刘承峰忍不住嚷嚷道。</p>
		<p> 他话音刚刚落下，孟军就端起了餐盘，朝着厨房走去。</p>
		<p> “我吃饱了。”</p>
		<p> 他淡淡说了一句。</p>
		<p> 但二人都能够察觉到孟军对他们的态度转变。</p>
		<p> 这种转变十分突兀……</p>
		<p> 好似刚刚才回暖的春天，陡然之间又陷入了寒冬。</p>
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
		ElMessage.success('复制成功')

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