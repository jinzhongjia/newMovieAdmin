// 此处定义状态

import { Source, Category, Movie, Class } from "@/types/base";
import { formType } from "@/data/form";
import { defineStore } from "pinia";
import { Ref, computed } from "vue";

interface modalData {
	data: Source | Category | Movie;
	show: boolean;
	type: formType;
	close: Function;
	save: Function;
}

export const useStateStore = defineStore("state", () => {
	const isMobile = ref(false);
	const drawerIsActive = ref(false);

	function hideDrawer() {
		drawerIsActive.value = false;
	}

	const sourceModal: Ref<modalData> = ref({
		data: {
			id: 0,
			name: "",
			url: "",
			progress: true,
			able: true,
		} as Source,
		show: true,
		type: formType.source,
		close: () => {
			sourceModal.value.show = false;
		},
		save: () => {},
	});

	const categoryModal: Ref<modalData> = ref({
		data: {
			id: 0,
			name: "",
			classNum: 0,
			movieNum: 0,
		} as Category,
		show: true,
		type: formType.category,
		close: () => {
			categoryModal.value.show = false;
		},
		save: () => {},
	});

	const movieModal: Ref<modalData> = ref({
		data: {
			id: 0,
			name: "",
			director: "",
			actor: "",
			duration: "",
			description: "",
			pic: "",
			url: "",
		} as Movie,
		show: true,
		type: formType.movie,
		close: () => {
			movieModal.value.show = false;
		},
		save: () => {},
	});

	return {
		isMobile,
		drawerIsActive,
		hideDrawer,
		sourceModal,
		categoryModal,
		movieModal,
	};
});
