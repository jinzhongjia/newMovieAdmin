<script setup lang="ts">
import { AddCircle24Regular, Search20Filled } from "@vicons/fluent";
import { NButton } from "naive-ui";
import { Ref } from "vue";
import { Source } from "@/types/base";
import { columns } from "@/data/source";

//  TODO: debug数据，需要进行处理
const data: Ref<Source[]> = (() => {
	let res: Source[] = [];
	for (let index = 0; index < 20; index++) {
		res.push({
			id: index + 1,
			name: "测试数据" + (index + 1).toString(),
			url: "https://测试链接" + (index + 1).toString() + ".com",
			progress: true,
			able: true,
		});
	}
	return ref(res);
})();

// TODO: 调试使用变量
const formValue: Ref<Source> = ref({
	id: 0,
	name: "测试",
	url: "测试",
	progress: true,
	able: true,
});

// TODO: 调试使用变量
const isNew = ref(false);
const show = ref(false);

// TODO: 删除该函数以及对其的引用
function tt() {
	console.log(formValue.value.name);
	console.log(formValue.value.url);
}

// TODO: debug变量
const page = ref(2);
</script>
<template>
	<general-render>
		<template #header>
			<div style="white-space: nowrap">采集源</div>
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
					<n-icon>
						<AddCircle24Regular />
					</n-icon>
				</n-button>
			</div>
		</template>

		<n-scrollbar style="max-height: calc(100vh - 65px - 58px - 5px - 60px)">
			<n-data-table
				:columns="columns"
				:data="data"
				:bordered="false"
				:single-line="false"
				max-height="calc(100vh - 65px - 58px - 5px - 60px - 50px)"
			/>
		</n-scrollbar>
		<!-- 模态框 -->
		<Model
			title="ceshi"
			:data="formValue"
			:new="isNew"
			:show="show"
			@close="
				() => {
					show = !show;
				}
			"
			@save="
				() => {
					tt();
				}
			"
		/>
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
