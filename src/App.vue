<script setup lang="ts">


import { useOsTheme, darkTheme, zhCN, dateZhCN } from "naive-ui";
import { loading_status } from "@/tool/loading";
const osThemeRef = useOsTheme();
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null));
</script>

<template>
	<n-config-provider :theme="theme" :locale="zhCN" :date-locale="dateZhCN">
		<n-message-provider>
			<template v-if="loading_status">
				<div id="loading-container">
					<n-spin size="large">
						<template #description> 加载中 </template>
					</n-spin>
				</div>
			</template>
			<template v-else>
				<RouterView />
			</template>
		</n-message-provider>
	</n-config-provider>
</template>

<style scoped>
#loading-container {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
