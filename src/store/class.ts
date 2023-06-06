// 该文件暂时无用
import { defineStore } from "pinia";
import { Class } from "@/types/base";
import { Ref } from "vue";

export const useClassStore = defineStore("class", () => {
	const val: Ref<Class[]> = ref([]);

	return { val };
});
