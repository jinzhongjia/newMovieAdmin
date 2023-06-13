<script setup lang="ts">
import { columns } from "@/data/class";
import { createPage } from "@/data/tool";
import { useSourceStore } from "@/store";

const sourceStore = useSourceStore();
const route = useRoute();

const data = computed(() =>
	sourceStore.findClasses(Number(route.params.id as string))
);

const page = createPage(1, 1, (newval: number) => {
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
