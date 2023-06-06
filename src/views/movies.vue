<script setup lang="ts">
import { AddCircle24Regular, Search20Filled } from "@vicons/fluent";
import { Ref } from "vue";
import { columns } from "@/data/movies";
import { Movie } from "@/types/base";

// debug 导入
import { randomNum } from "@/debug/tool";

const data: Ref<Movie[]> = (() => {
	let res: Movie[] = [];
	for (let index = 0; index < 30; index++) {
		res.push({
			id: index + 1,
			name: "测试影片" + (index + 1).toString(),
			director: "导演" + (index + 1).toString(),
			actor: "主演" + (index + 1).toString(),
			duration: randomNum(70, 130).toString() + "分钟",
			description: "描述" + (index + 1).toString(),
			pic: "http://图片链接" + (index + 1).toString() + ".com",
			url: "http://影片直链" + (index + 1).toString() + ".com",
		});
	}
	return ref(res);
})();

//  TODO: debug数据，需要进行处理
const page = ref(2);
</script>
<template>
	<general-data-table
		title="影片管理"
		:columns="columns"
		:data="data"
		:page="page"
	>
	</general-data-table>
</template>
<style scoped></style>
