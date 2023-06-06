import { defineStore } from "pinia";
import { Source } from "@/types/base";
import { Ref } from "vue";

export const useSourceStore = defineStore("source", () => {
	const val: Ref<Source[]> = ref([]);

	return { val };
});
