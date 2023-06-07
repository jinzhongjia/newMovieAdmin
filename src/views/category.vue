<script setup lang="ts">
import { columns } from "@/data/category";
import { useCategoryStore, useStateStore } from "@/store";
import { Category, cloneCategory } from "@/types/base";

const categoryStore = useCategoryStore();
const stateStore = useStateStore();

const data = computed(() => categoryStore.val);
const categoryModal = computed(() => stateStore.categoryModal);

//  TODO: debug数据，需要进行处理
const page = ref(2);
// debug函数
const add = () => {
	let newval: Category = cloneCategory({
		id: -1,
		name: "",
		classNum: 0,
		movieNum: 0,
	});
	categoryModal.value.data = newval;
	categoryModal.value.new = true;
	categoryModal.value.show = true;
};
</script>
<template>
	<general-data-table
		title="自建分类"
		:columns="columns"
		:data="data"
		:page="page"
		:add="add"
		:isAdd="true"
	>
		<template #extra>
			<general-form-modal
				title="分类测试"
				:data="categoryModal.data"
				:show="categoryModal.show"
				:type="categoryModal.type"
				@close="categoryModal.close"
				@save="categoryModal.save"
			/>
		</template>
	</general-data-table>
</template>
<style scoped></style>
