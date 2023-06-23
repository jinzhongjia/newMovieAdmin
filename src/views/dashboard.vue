<script lang="ts" setup></script>

<template>
	<div
		style="
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
			background-color: inherit;
		"
	>
		<n-result
			status="404"
			title="面板页"
			description="这暂时是个无用页面"
			size="huge"
		>
			<template #footer>
				<n-button>哦</n-button>
			</template>
		</n-result>
	</div>
</template>

<style scoped></style>
