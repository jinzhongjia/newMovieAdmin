// 此处定义状态

import { Source, Category, Movie, Class } from "@/types/base";
import { formType } from "@/data/form";
import { defineStore } from "pinia";
import { Ref, computed } from "vue";
import {
	add_source,
	add_category,
	rename_source,
	reurl_source,
} from "@/tool/api";
import { useSourceStore, useCategoryStore } from "@/store";
import { asyncMutexBuild } from "@/data/tool";

const sourceStore = useSourceStore();
const categoryStore = useCategoryStore();

interface modalData {
	data: Source | Category | Movie;
	origin: Source | Category | Movie;
	show: boolean;
	type: formType;
	new: boolean;
	close: Function;
	save: Function;
}

const drawerIsActive = ref(false);
const isMobile = ref(false);

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
	origin: {
		id: 0,
		name: "",
		url: "",
		progress: true,
		able: true,
	} as Source,
	show: false,
	type: formType.source,
	new: false,
	close: () => {
		sourceModal.value.show = false;
	},
	save: () => {
		const data = computed(() => sourceModal.value.data as Source);
		const origin = computed(() => sourceModal.value.origin as Source);
		console.log(sourceModal.value.new);
		if (!sourceModal.value.new) {
			let num = 0;
			if (origin.value.name != data.value.name) {
				num++;
			}
			if (origin.value.url != data.value.url) {
				num++;
			}
			const syncFn = asyncMutexBuild(num, () => {
				origin.value.name = data.value.name;
				origin.value.url = data.value.url;
			});
			if (origin.value.name != data.value.name) {
				rename_source(origin.value.id, data.value.name, () => syncFn());
			}
			if (origin.value.url != data.value.url) {
				reurl_source(origin.value.id, data.value.url, () => syncFn());
			}
		} else {
			add_source(data.value.name, data.value.url, () => {
				sourceStore.bindSource();
			});
		}
	},
});

const categoryModal: Ref<modalData> = ref({
	data: {
		id: 0,
		name: "",
		classNum: 0,
		movieNum: 0,
	} as Category,
	origin: {
		id: 0,
		name: "",
		classNum: 0,
		movieNum: 0,
	} as Category,
	show: false,
	type: formType.category,
	new: false,
	close: () => {
		categoryModal.value.show = false;
	},
	save: () => {
		const data = computed(() => categoryModal.value.data as Category);
		const origin = computed(() => categoryModal.value.origin as Category);
		if (!categoryModal.value.new) {
			origin.value.name = data.value.name;
		} else {
			add_category(data.value.name, (_: number, data: any) => {
				categoryStore.bindCategory();
			});
		}
	},
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
	origin: {
		id: 0,
		name: "",
		director: "",
		actor: "",
		duration: "",
		description: "",
		pic: "",
		url: "",
	} as Movie,
	show: false,
	type: formType.movie,
	new: false,
	close: () => {
		movieModal.value.show = false;
	},
	save: () => {
		if (!movieModal.value.new) {
			const data = computed(() => movieModal.value.data as Movie);
			const origin = computed(() => movieModal.value.origin as Movie);
			origin.value.name = data.value.name;
			origin.value.director = data.value.director;
			origin.value.actor = data.value.actor;
			origin.value.duration = data.value.duration;
			origin.value.description = data.value.description;
			origin.value.pic = data.value.pic;
			origin.value.url = data.value.url;
		} else {
			console.log("添加一个东西");
		}
	},
});

const drawer = ref({
	val: "" as string,
	openKeys: [] as string[],
});

export const useStateStore = defineStore("state", () => {
	return {
		drawer,
		isMobile,
		drawerIsActive,
		hideDrawer,
		sourceModal,
		categoryModal,
		movieModal,
	};
});
