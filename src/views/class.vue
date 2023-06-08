<script setup lang="ts">
import { Ref } from "vue";
import { Class } from "@/types/base";
import { columns } from "@/data/class";
import { createPage } from "@/data/tool";
// debug 导入
import { randomNum } from "@/mock/tool";

//  TODO: debug数据，需要进行处理
const data: Ref<Class[]> = (() => {
	let res: Class[] = [];
	for (let index = 0; index < 20; index++) {
		res.push({
			id: index + 1,
			name: "测试分类" + (index + 1).toString(),
			isGet: randomNum(0, 20) < 10 ? true : false,
			categoryId: index + 1,
		});
	}
	return ref(res);
})();

const page = createPage(1, 10, (newval: number) => {
	page.value.page = newval;
});
</script>
<template>
	<general-data-table
		title="采集类"
		:columns="columns"
		:data="data"
		:page="page.page"
		:pageCount="page.pageCount"
		:update="page.update"
		:isAdd="false"
	></general-data-table>
</template>
<style scoped></style>
