<template>
	<div class="triangle-border"></div>

	<div class="triangle-gradient"></div>
</template>
<style scoped>
.triangle-border {
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 50px 50px 0 50px;
	/* 上右下左 */
	border-color: red transparent transparent transparent;
}

.triangle-gradient {
	width: 1em;
	/* 可以根据需要设定宽高 */
	height: 1em;
	background: linear-gradient(to bottom left, red 50%, transparent 50%);
}
</style>