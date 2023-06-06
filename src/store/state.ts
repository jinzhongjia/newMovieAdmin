// 此处定义状态

import { defineStore } from "pinia";

export const useStateStore = defineStore("state", () => {
	const isMobile = ref(false);
	const drawerIsActive = ref(false);

	return { isMobile, drawerIsActive };
});
