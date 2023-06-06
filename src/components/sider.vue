<script setup lang="ts">
import { Ref } from "vue";
import { MenuOption } from "naive-ui";
import { createMenuOption, handleRoute } from "@/data/sider";
import { useSourceStore } from "@/store/source";
import { useStateStore } from "@/store/state";

const value = ref("source_class_1");
const openKeys: Ref<string[]> = ref(["source_1"]);
const sourceStore = useSourceStore();
// 获取store
const stateStore = useStateStore();

function update(key: string, item: MenuOption) {
	console.log(key);
	value.value = item.key as string;
	handleRoute(key, item);
	stateStore.hideDrawer();
}

// 计算属性计算得到实际的menu
const menu_instance = computed(() => {
	return createMenuOption(sourceStore.sources);
});

function menuExpanded(keys: string[]) {
	if (keys.length) {
		openKeys.value = [keys[keys.length - 1]];
	} else {
		openKeys.value = [];
	}
}
</script>
<template>
	<n-scrollbar style="max-height: calc(100vh - 60px)" trigger="none">
		<n-menu
			:options="menu_instance"
			@update:value="update"
			:value="value"
			:expanded-keys="openKeys"
			@update:expanded-keys="menuExpanded"
		/>
	</n-scrollbar>
</template>
<style></style>
