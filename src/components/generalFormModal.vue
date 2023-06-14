<script setup lang="ts">
import { Source, Category, Movie } from "@/types/base";
import { formType, matchOption } from "@/data/form";

const props = withDefaults(
	defineProps<{
		title: string;
		show: boolean;
		data: Source | Category | Movie;
		type: formType;
	}>(),
	{
		show: true,
	}
);

const emit = defineEmits(["close", "save"]);

// 包裹外部函数，获得内部关闭函数
const close = () => {
	emit("close");
	// 返回false阻止默认行为
	return false;
};

// 包裹外部的函数，获得内部保存函数
const save = () => {
	emit("close");
	emit("save");
};
</script>
<template>
	<general-modal
		:show="props.show"
		:title="props.title"
		width="500px"
		@close="close"
	>
		<n-form :model="props.data" label-placement="left" label-width="auto">
			<n-form-item
				v-for="ele in matchOption(props.type)"
				:label="ele.label"
				:path="`props.data.${ele.key}`"
			>
				<n-input
					v-model:value="(props.data as any)[ele.key]"
					:placeholder="`输入${ele.label}`"
				/>
			</n-form-item>
		</n-form>
		<template #footer>
			<n-space justify="end">
				<n-button strong secondary type="primary" @click="save">
					保存
				</n-button>
			</n-space>
		</template>
	</general-modal>
</template>
<style scoped></style>
