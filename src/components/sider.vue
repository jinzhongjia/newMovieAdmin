<script setup lang="ts">
import { MenuOption } from "naive-ui";
import { createMenuOption } from "@/data/sider";

function update(key: string, item: MenuOption) {
	console.log(item.label);
}

let menu_instance: MenuOption[] = createMenuOption([
	{
		id: 1,
		name: "测试数据",
		url: "测试链接",
		ok: false,
	},
]);
</script>
<template>
	<n-menu :options="menu_instance" @update:value="update" />
</template>
<style></style>
