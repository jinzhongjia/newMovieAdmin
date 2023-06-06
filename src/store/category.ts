import { defineStore } from "pinia";
import { Category } from "@/types/base";
import { Ref } from "vue";

export const useCategoryStore = defineStore("category", () => {
	const val: Ref<Category[]> = ref([]);

	return { val };
});
