<script setup lang="ts">
import { Ref } from "vue";
import { columns } from "@/data/category";
import { Category } from "@/types/base";
import { formType } from "@/data/form";

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
				:data="formValue"
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
