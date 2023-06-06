<script setup lang="ts">
import { Ref } from "vue";
import { Source } from "@/types/base";
import { columns } from "@/data/source";
import { formType } from "@/data/form";

//  TODO: debug数据，需要进行处理
const data: Ref<Source[]> = (() => {
	let res: Source[] = [];
	for (let index = 0; index < 20; index++) {
		res.push({
			id: index + 1,
			name: "采集源" + (index + 1).toString(),
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
const show = ref(true);

// TODO: 删除该函数以及对其的引用
function tt() {
	console.log(formValue.value.name);
	console.log(formValue.value.url);
}

// TODO: debug变量
const page = ref(2);
</script>
<template>
	<general-data-table
		title="影片管理"
		:columns="columns"
		:data="data"
		:page="page"
	>
		<template #extra>
			<general-form-modal
				title="采集源测试"
				:data="formValue"
				:new="isNew"
				:show="show"
				:type="formType.source"
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
