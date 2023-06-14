<script setup lang="ts">
import {
	MenuUnfoldOutlined,
	ReloadOutlined,
	UserOutlined,
	SettingOutlined,
} from "@vicons/antd";

import head_img from "@/assets/head-img.svg";
import { log_out } from "@/tool/api";
import { getInterval } from "@/data/setting";

const props = defineProps(["isMobile"]);
const emit = defineEmits(["change"]);

const router = useRouter();

const options = ref([
	{
		label: "前台首页",
		key: "front",
	},
	{
		label: "退出登录",
		key: "logout",
	},
]);

const handleSelect = (key: string) => {
	switch (key) {
		case "logout":
			log_out(() => {
				router.push({
					name: "login",
				});
			});
			break;

		case "front":
			console.log("跳转到前台首页");
			break;
	}
};

const setting = ref({
	show: false,
});

const showModal = () => {
	setting.value.show = true;
	getInterval();
};
</script>
<template>
	<div class="header line general-shadow">
		<div class="header-left">
			<div v-show="props.isMobile" style="padding: 0 12px">
				<n-button quaternary circle @click="emit('change')">
					<template #icon>
						<n-icon size="18" :component="MenuUnfoldOutlined" />
					</template>
				</n-button>
			</div>
			<div style="padding: 0 12px">
				<n-button quaternary circle>
					<template #icon>
						<n-icon size="18" :component="ReloadOutlined" />
					</template>
				</n-button>
			</div>
		</div>
		<div class="header-right">
			<div style="padding: 0 12px">
				<n-dropdown
					trigger="hover"
					:options="options"
					@select="handleSelect"
				>
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
				<n-button quaternary circle @click="showModal">
					<template #icon>
						<n-icon size="18" :component="SettingOutlined" />
					</template>
				</n-button>
			</div>
		</div>
	</div>
	<setting-modal :show="setting.show" @close="setting.show = false" />
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
