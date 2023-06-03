<script setup lang="ts">
import {
	MenuUnfoldOutlined,
	ReloadOutlined,
	UserOutlined,
	SettingOutlined,
} from "@vicons/antd";

import head_img from "@/assets/head-img.svg";

const options = ref([
	{
		label: "前台首页",
		key: "front",
	},
	{
		label: "账号设置",
		key: "setting",
	},
	{
		label: "退出登录",
		key: "logout",
	},
]);
</script>
<template>
	<div class="header line general-shadow">
		<div class="header-left">
			<!-- <div style="padding: 0 12px">
				<n-icon size="18">
					<MenuUnfoldOutlined />
				</n-icon>
			</div> -->
			<div style="padding: 0 12px">
				<n-icon size="18">
					<ReloadOutlined />
				</n-icon>
			</div>
		</div>
		<div class="header-right">
			<div style="padding: 0 12px">
				<n-dropdown trigger="hover" @select="" :options="options">
					<div class="avatar">
						<n-avatar round :src="head_img">
							<template #icon>
								<UserOutlined />
							</template>
						</n-avatar>
					</div>
				</n-dropdown>
			</div>
			
			<div style="padding: 0 12px">
				<n-icon size="18" style="font-weight: bold">
					<SettingOutlined />
				</n-icon>
			</div>
		</div>
	</div>
</template>
<style scoped>
.header {
	height: 64px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0;
}
.header-left,
.header-right {
	display: flex;
	align-items: center;
}
.header-left {
	padding-left: 0.25rem;
}
.header-right {
	padding-right: 20px;
}
.line {
	border-style: solid;
	border-width: 0 0 1px 0;
	border-color: #e8ecee;
}
</style>
