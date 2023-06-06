import { defineStore } from "pinia";
import { sourceInstance, Source, Class } from "@/types/base";
import { Ref } from "vue";

export const useSourceStore = defineStore("source", () => {
	const val: Ref<sourceInstance[]> = ref([]);

	// 此source无法直接覆盖
	const sources = computed(() => {
		let res: Source[] = [];
		val.value.forEach((instance) => {
			res.push(instance.info);
		});
		return res;
	});

	// 此class无法直接覆盖
	function getClasses(sourceID: number) {
		const classes = computed(() => {
			val.value.forEach((instance) => {
				if (instance.info.id == sourceID) {
					return instance.classes;
				}
			});
			return [];
		});
		return classes;
	}

	return { val, sources, getClasses };
});
