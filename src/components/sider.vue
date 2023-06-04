<script setup lang="ts">
import { MenuOption } from "naive-ui";
import { createMenuOption } from "@/data/sider";

function update(key: string, item: MenuOption) {
	console.log(item.label);
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
</script>
<template>
	<n-scrollbar style="max-height: calc(100vh - 60px)" trigger="none">
		<n-menu :options="menu_instance" @update:value="update" />
	</n-scrollbar>
</template>
<style></style>
