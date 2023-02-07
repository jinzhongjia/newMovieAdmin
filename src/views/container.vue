<script setup lang="ts">
// 该文件作为app下属的父组件，负责部分api的初始化工作

import { get_version } from "../tool/api";

// 向windows注入相关的message
(() => {
	window.$message = useMessage();
})();

// 获取当前的版本号，同时进行是否登陆的验证
get_version(() => {});
const active = ref(true);
</script>

<template>
	<n-drawer v-model:show="active" :width="502" placement="left">
		<n-drawer-content title="斯通纳">
			《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
		</n-drawer-content>
	</n-drawer>
	<RouterView />
</template>

<style></style>
