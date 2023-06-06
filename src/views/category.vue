<script setup lang="ts">
import { Ref } from "vue";
import { columns } from "@/data/category";
import { Category } from "@/types/base";
import { formType } from "@/data/form";
import { useCategoryStore } from "@/store/category";

const categoryStore = useCategoryStore();

const data = computed(() => categoryStore.val);

// TODO: 调试使用变量
const formValue: Ref<Category> = ref({
	id: 1,
	name: "测试分类",
	classNum: 66,
	movieNum: 88,
});

// TODO: 调试使用变量
const isNew = ref(false);
const show = ref(true);

//  TODO: debug数据，需要进行处理
const page = ref(2);

// TODO: 删除该函数以及对其的引用
function tt() {
	console.log(formValue.value.name);
	// console.log(formValue.value.url);
}
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
				:data="data[0]"
				:new="isNew"
				:show="show"
				:type="formType.category"
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
		</template>
	</general-data-table>
</template>
<style scoped></style>
