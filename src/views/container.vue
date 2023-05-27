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
	<n-grid cols="10" item-responsive responsive="screen">
		<n-grid-item class="sider" span="0 m:0 l:1">
			<!-- 这里是侧边栏 -->
			<div style="height: 100vh">
				<sider />
			</div>
		</n-grid-item>
		<n-grid-item>
			<div class="green">2</div>
		</n-grid-item>
	</n-grid>
	<!-- <RouterView /> -->
</template>

<style scoped>
.sider {
	border-width: 0px 1px 0px 0px;
	border-color: #d3d3d3;
	border-style: solid;
}
</style>
