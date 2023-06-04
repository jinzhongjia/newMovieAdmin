<script setup lang="ts">
// 该文件作为app下属的父组件，负责部分api的初始化工作

import { get_version } from "@/tool/api";

import Head from "@/components/header.vue";

// 向windows注入相关的message
(() => {
	window.$message = useMessage();
})();

// 获取当前的版本号，同时进行是否登陆的验证
get_version(() => {});
const active = ref(true);
</script>

<template>
	<n-layout has-sider>
		<n-layout-sider bordered width="200px">
			<div style="height: 100vh">
				<div
					style="
						width: 100%;
						text-align: center;
						padding: 15px 0;
						font-weight: 700;
						font-size: 18px;
					"
				>
					GOMovie后台管理
				</div>
				<Sider />
			</div>
		</n-layout-sider>
		<n-layout>
			<n-layout-header> <Head /> </n-layout-header>
			<n-layout-content :nativeScrollbar="false">
				<div
					style="
						width: calc(100vw - 200px);
						height: calc(100vh - 65px);
						background-color: #f5f7f9;
						padding: 5px 0px 0px 0px;
						box-sizing: border-box;
					"
				>
					<div class="box"><RouterView /></div>
				</div>
			</n-layout-content>
		</n-layout>
	</n-layout>
</template>

<style scoped>
.box {
	width: 100%;
	height: 100%;
	background-color: white;
}
</style>
