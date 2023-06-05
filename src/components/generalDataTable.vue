<script setup lang="ts">
import { AddCircle24Regular, Search20Filled } from "@vicons/fluent";
const props = defineProps(["title", "columns", "data", "page"]);
</script>
<template>
	<general-render>
		<template #header>
			<div style="white-space: nowrap">{{ props.title }}</div>
		</template>
		<template #header-extra>
			<div class="icon-box">
				<n-input placeholder="搜索" round>
					<template #prefix>
						<n-icon :component="Search20Filled" />
					</template>
				</n-input>
			</div>
			<div class="icon-box">
				<n-button
					type="primary"
					style="font-size: 24px"
					@click=""
					quaternary
					circle
				>
					<n-icon :component="AddCircle24Regular" />
				</n-button>
			</div>
		</template>
		<n-scrollbar style="max-height: calc(100vh - 65px - 58px - 5px - 60px)">
			<n-scrollbar x-scrollable>
				<n-data-table
					:columns="props.columns"
					:data="props.data"
					:bordered="false"
					:single-line="false"
					max-height="calc(100vh - 65px - 58px - 5px - 60px - 50px)"
				/>
			</n-scrollbar>
		</n-scrollbar>
		<slot name="extra" />
		<template #footer>
			<div class="pagination">
				<n-pagination v-model:page="props.page" :page-count="100" />
			</div>
		</template>
	</general-render>
</template>
<style scoped>
.icon-box {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
}

.pagination {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 58px;
}
</style>
