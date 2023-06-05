<script setup lang="ts">
import { AddCircle24Regular, Search20Filled } from "@vicons/fluent";
import { Ref } from "vue";
import { columns } from "@/data/category";
import { Category } from "@/types/base";

// debug 导入
import { randomNum } from "@/debug/tool";

//  TODO: debug数据，需要进行处理
const data: Ref<Category[]> = (() => {
	let res: Category[] = [];
	for (let index = 0; index < 20; index++) {
		res.push({
			id: index + 1,
			name: "测试分类" + (index + 1).toString(),
			classNum: randomNum(0, 20),
			movieNum: randomNum(100, 6000),
		});
	}
	return ref(res);
})();

//  TODO: debug数据，需要进行处理
const page = ref(2);
</script>
<template>
	<general-render>
		<template #header>
			<div style="white-space: nowrap">自建分类</div>
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
				<n-button text type="primary" style="font-size: 24px" @click="">
					<n-icon :component="AddCircle24Regular" />
				</n-button>
			</div>
		</template>
		<n-scrollbar style="max-height: calc(100vh - 65px - 58px - 5px - 60px)">
			<n-scrollbar x-scrollable>
				<n-data-table
					:columns="columns"
					:data="data"
					:bordered="false"
					:single-line="false"
					max-height="calc(100vh - 65px - 58px - 5px - 60px - 50px)"
				/>
			</n-scrollbar>
		</n-scrollbar>

		<template #footer>
			<div class="pagination">
				<n-pagination v-model:page="page" :page-count="100" />
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
