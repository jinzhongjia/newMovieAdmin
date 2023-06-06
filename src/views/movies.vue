<script setup lang="ts">
import { Ref } from "vue";
import { columns } from "@/data/movies";
import { Movie } from "@/types/base";
import { formType } from "@/data/form";
import { useMovieStore } from "@/store/movies";

const movieStore = useMovieStore();

const data = computed(() => movieStore.val);

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
				:data="data[0]"
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
