<script setup lang="ts">
import { columns } from "@/data/category";
import { useCategoryStore } from "@/store/category";
import { useStateStore } from "@/store/state";

const categoryStore = useCategoryStore();
const stateStore = useStateStore();

const data = computed(() => categoryStore.val);
const categoryModal = computed(() => stateStore.categoryModal);

//  TODO: debug数据，需要进行处理
const page = ref(2);
</script>
<template>
	<general-data-table
		title="自建分类"
		:columns="columns"
		:data="data"
		:page="page"
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
