import { defineStore } from "pinia";
import { sourceInstance, Source, Class } from "@/types/base";
import { Ref } from "vue";
import { all_source, all_class_source } from "@/tool/api";

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

const bindSource = () => {
	all_source((_: number, data: any) => {
		val.value = [];
		data.forEach((ele: any) => {
			let tmp: sourceInstance = {
				info: {
					id: ele.id,
					name: ele.name,
					url: ele.url,
					progress: ele.ok,
					able: ele.get,
				},
				classes: [],
				page: ele.pg,
			};

			all_class_source(ele.id, (_: number, data: any) => {
				data.forEach((class_ele: any) => {
					tmp.classes.push({
						id: class_ele.id,
						name: class_ele.name,
						isGet: class_ele.get,
						categoryId: class_ele.categoryId,
					});
				});
				val.value.push(tmp);
			});
		});
	});
};

const findClasses = (id: number) => {
	for (let index = 0; index < val.value.length; index++) {
		const element = val.value[index];
		if (element.info.id == id) {
			return element.classes;
		}
	}

	return [] as Class[];
};

const deleteMovie = (id: number) => {
	for (let index = 0; index < val.value.length; index++) {
		const element = val.value[index];
		if (element.info.id == id) {
			val.value.splice(index, 1);
			return;
		}
	}
};

export const useSourceStore = defineStore("source", () => {
	return { val, sources, getClasses, bindSource, findClasses, deleteMovie };
});
