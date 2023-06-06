<script setup lang="ts">
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
	<general-data-table
		title="测试标题"
		:columns="columns"
		:data="data"
		:page="page"
	></general-data-table>
</template>
<style scoped></style>
