<script setup lang="ts">
import { columns } from "@/data/movies";
import { useMovieStore, useStateStore } from "@/store";
import { Movie, cloneMovie } from "@/types/base";
import { createPage } from "@/data/tool";

const movieStore = useMovieStore();
const stateStore = useStateStore();

const data = computed(() => movieStore.val);
const movieModal = computed(() => stateStore.movieModal);

const page = createPage(1, 10, (newval: number) => {
	page.value.page = newval;
});

// debug函数
const add = () => {
	let newval: Movie = cloneMovie({
		id: -1,
		name: "",
		director: "",
		actor: "",
		duration: "",
		description: "",
		pic: "",
		url: "",
	});
	movieModal.value.data = newval;
	movieModal.value.new = true;
	movieModal.value.show = true;
};
</script>
<template>
	<general-data-table
		title="影片管理"
		:columns="columns"
		:data="data"
		:page="page.page"
		:pageCount="page.pageCount"
		:update="page.update"
		:add="add"
		:isAdd="true"
	>
		<template #extra>
			<general-form-modal
				title="影片测试"
				:data="movieModal.data"
				:show="movieModal.show"
				:type="movieModal.type"
				@close="movieModal.close"
				@save="movieModal.save"
			/>
		</template>
	</general-data-table>
</template>
<style scoped></style>
