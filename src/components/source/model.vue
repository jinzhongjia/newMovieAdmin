<script setup lang="ts">
import { Source } from "@/types/base";

const props = withDefaults(
	defineProps<{
		new: boolean;
		show: boolean;
		data: Source;
	}>(),
	{
		new: false,
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
	<n-modal
		v-model:show="props.show"
		preset="dialog"
		type="info"
		:mask-closable="false"
		:onClose="close"
	>
		<template #header>
			<div>{{ props.new ? "新建采集源" : "修改采集源" }}</div>
		</template>
		<div style="height: 15px"></div>
		<n-form :model="props.data" label-placement="left" label-width="auto">
			<n-form-item label="名称" path="props.data.name">
				<n-input
					v-model:value="props.data.name"
					placeholder="输入采集源名称"
				/>
			</n-form-item>
			<n-form-item label="地址" path="props.data.url">
				<n-input
					v-model:value="props.data.url"
					placeholder="输入采集源地址"
				/>
			</n-form-item>
		</n-form>
		<template #action>
			<n-button strong secondary type="primary" @click="save"
				>保存</n-button
			>
		</template>
	</n-modal>
</template>
