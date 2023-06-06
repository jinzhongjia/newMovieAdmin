<script setup lang="ts">
import { Ref } from "vue";
import { MenuOption } from "naive-ui";
import { createMenuOption } from "@/data/sider";

const value = ref("source_class_1");
const openKeys: Ref<string[]> = ref([]);

function update(key: string, item: MenuOption) {
	value.value = item.key as string;
}

let menu_instance: MenuOption[] = createMenuOption(
	(() => {
		let res = [];
		for (let index = 0; index < 10; index++) {
			res.push({
				id: index + 1,
				name: "采集源" + (index + 1).toString(),
				url: "测试链接" + (index + 1).toString(),
				progress: false,
				able: false,
			});
		}
		return res;
	})()
);

function menuExpanded(keys: string[]) {
	if (keys.length) {
		openKeys.value = [keys[keys.length - 1]];
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
