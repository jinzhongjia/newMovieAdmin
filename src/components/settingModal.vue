<script setup lang="ts">
const props = defineProps(["show"]);
const emit = defineEmits(["close"]);

const account = ref<string>("");
const password = ref<string>("");
const interval = ref<number>(0);
const cacheTime = ref<number>(0);
const loading = ref<boolean>(false);
</script>
<template>
	<general-modal
		title="系统设置"
		:show="props.show"
		width="600px"
		@close="emit('close')"
	>
		<n-card :bordered="false" title="用户名:" size="small">
			<n-space>
				<n-input
					v-model:value="account"
					type="text"
					placeholder="请输入用户名"
				/>
				<n-button @click="">更新</n-button>
			</n-space>
		</n-card>
		<n-card :bordered="false" title="密码:" size="small">
			<n-space>
				<n-input
					v-model:value="password"
					type="text"
					placeholder="请输入密码"
				/>
				<n-button @click="">更新</n-button>
			</n-space>
		</n-card>
		<n-card :bordered="false" title="采集间隔:" size="small">
			<n-space>
				<n-input-number
					v-model:value="interval"
					:loading="loading"
					clearable
				/>
				<n-button @click="">更新</n-button>
			</n-space>
		</n-card>
		<n-card :bordered="false" title="缓存时间:" size="small">
			<n-space>
				<n-input-number
					v-model:value="cacheTime"
					:loading="loading"
					clearable
				/>
				<n-button @click="">更新</n-button>
				<n-button @click="">清空缓存</n-button>
			</n-space>
		</n-card>
	</general-modal>
</template>
<style scoped></style>
