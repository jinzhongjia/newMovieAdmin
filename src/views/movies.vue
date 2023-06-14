<script setup lang="ts">
import { columns } from "@/data/movies";
import { useMovieStore, useStateStore } from "@/store";
import { Movie, cloneMovie } from "@/types/base";
import { RouteRecordName } from "vue-router";
import { pageNumber } from "@/tool/config";

const route = useRoute();
const router = useRouter();

const movieStore = useMovieStore();
const stateStore = useStateStore();

const data = computed(() => movieStore.val);
const movieModal = computed(() => stateStore.movieModal);
const page = computed(() => movieStore.pageRef);

page.value.update = (newval: number) => {
	page.value.page = newval;
	router.push({
		name: route.name as RouteRecordName,
		params: {
			id: route.params.id,
			page: page.value.page,
		},
	});
};

watchEffect(() => {
	const pageVal = Number(route.params.page as string);
	const idVal = Number(route.params.id as string);

	page.value.page = pageVal;

	if (route.name == "movies") {
		movieStore.bindMovies(pageVal, pageNumber);
		// 覆盖fresh
		movieStore.refresh = () => {
			movieStore.bindMovies(pageVal, pageNumber);
		};
	} else if (route.name == "source-movies") {
		movieStore.bindSourceMovies(idVal, pageVal, pageNumber);
		// 覆盖fresh
		movieStore.refresh = () => {
			movieStore.bindSourceMovies(idVal, pageVal, pageNumber);
		};
	}
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
