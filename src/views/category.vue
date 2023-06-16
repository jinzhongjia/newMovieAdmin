<script setup lang="ts">
import { columns } from "@/data/category";
import { useCategoryStore, useStateStore } from "@/store";
import { Category, cloneCategory } from "@/types/base";
import { createPage } from "@/data/tool";

const categoryStore = useCategoryStore();
const stateStore = useStateStore();

const data = computed(() => categoryStore.categories);
const categoryModal = computed(() => stateStore.categoryModal);

const page = createPage(1, 0, (newval: number) => {
	page.value.page = newval;
});

// debug函数
const add = () => {
	let newval: Category = cloneCategory({
		id: -1,
		name: "",
		classNum: 0,
		movieNum: 0,
		main: true,
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
		:page="page.page"
		:pageCount="page.pageCount"
		:update="page.update"
		:add="add"
		:isAdd="true"
		:keyword="categoryStore.categoryKeyword"
		:updateKeyword="categoryStore.updatecategoryKeyword"
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
