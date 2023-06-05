<!-- 这个是辅助通用渲染模板 -->

<script setup lang="ts"></script>
<template>
	<n-card
		size="small"
		header-style="max-height:58px"
		content-style="padding-bottom:0px; height: calc(100% - 58px)"
		:bordered="false"
	>
		<template #header>
			<slot name="header" />
		</template>
		<template #header-extra>
			<slot name="header-extra" />
		</template>
		<slot />
	</n-card>
	<slot name="footer" />
</template>
<style scoped></style>
