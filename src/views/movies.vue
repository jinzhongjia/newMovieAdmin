<script setup lang="ts">
import { columns } from "@/data/movies";
import { useMovieStore } from "@/store/movies";
import { useStateStore } from "@/store/state";

const movieStore = useMovieStore();
const stateStore = useStateStore();

const data = computed(() => movieStore.val);
const movieModal = computed(() => stateStore.movieModal);

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
