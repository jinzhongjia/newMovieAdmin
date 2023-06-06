<script setup lang="ts">
import { Ref } from "vue";
import { Source } from "@/types/base";
import { columns } from "@/data/source";
import { formType } from "@/data/form";
import { useSourceStore } from "@/store/source";

const sourceStore = useSourceStore();

const data = computed(() => sourceStore.sources);


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
const show = ref(true);

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
		title="影片管理"
		:columns="columns"
		:data="data"
		:page="page"
	>
		<template #extra>
			<general-form-modal
				title="采集源测试"
				:data="data[0]"
				:new="isNew"
				:show="show"
				:type="formType.source"
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
