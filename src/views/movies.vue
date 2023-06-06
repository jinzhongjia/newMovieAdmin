<script setup lang="ts">
import { Ref } from "vue";
import { columns } from "@/data/movies";
import { Movie } from "@/types/base";
import { formType } from "@/data/form";

// debug 导入
import { randomNum } from "@/debug/tool";

//  TODO: debug数据，需要进行处理
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

const formValue: Ref<Movie> = ref({
	id: 1,
	name: "测试影片",
	director: "测试导演",
	actor: "测试主演",
	duration: "测试时长",
	description:
		"测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述测试描述",
	pic: "测试图片链接测试图片链接测试图片链接测试图片链接测试图片链接测试图片链接测试图片链接测试图片链接测试图片链接测试图片链接测试图片链接测试图片链接",
	url: "测试影片直链测试影片直链测试影片直链测试影片直链测试影片直链测试影片直链测试影片直链测试影片直链测试影片直链测试影片直链测试影片直链测试影片直链",
});

let tmp: Ref<Movie>;

// TODO: 调试使用变量
const isNew = ref(false);
const show = ref(true);

// TODO: 删除该函数以及对其的引用
function tt() {
	console.log(formValue.value.name);
	console.log(formValue.value.url);
}
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
				title="影片测试"
				:data="formValue"
				:new="isNew"
				:show="show"
				:type="formType.movie"
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
