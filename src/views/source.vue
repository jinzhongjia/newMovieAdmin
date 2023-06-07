<script setup lang="ts">
import { columns } from "@/data/source";
import { useSourceStore } from "@/store/source";
import { useStateStore } from "@/store/state";

const sourceStore = useSourceStore();
const stateStore = useStateStore();

const data = computed(() => sourceStore.sources);
const sourceModal = computed(() => stateStore.sourceModal);

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
				:data="sourceModal.data"
				:show="sourceModal.show"
				:type="sourceModal.type"
				@close="sourceModal.close"
				@save="sourceModal.save"
			/>
		</template>
	</general-data-table>
</template>
<style scoped></style>
