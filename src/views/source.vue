<script setup lang="ts">
import { columns } from "@/data/source";
import { useSourceStore, useStateStore } from "@/store";
import { Source, cloneSource } from "@/types/base";
import { createPage } from "@/data/tool";

const sourceStore = useSourceStore();
const stateStore = useStateStore();

const data = computed(() => sourceStore.sources);
const sourceModal = computed(() => stateStore.sourceModal);

const page = createPage(1, 10, (newval: number) => {
	page.value.page = newval;
});

// debug函数
const add = () => {
	let newval: Source = cloneSource({
		id: -1,
		name: "",
		url: "",
		progress: false,
		able: false,
	});
	sourceModal.value.data = newval;
	sourceModal.value.new = true;
	sourceModal.value.show = true;
};
</script>
<template>
	<general-data-table
		title="影片管理"
		:columns="columns"
		:data="data"
		:page="page.page"
		:pageCount="page.pageCount"
		:update="page.update"
		:add="add"
		:isAdd="true"
	>
		<template #extra>
			<general-form-modal
				title="采集源测试"
				:data="sourceModal.data"
				:show="sourceModal.show"
				:type="sourceModal.type"
				@close="sourceModal.close"
				@save="sourceModal.save"
			/>
		</template>
	</general-data-table>
</template>
<style scoped></style>
