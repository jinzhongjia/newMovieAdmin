import { defineStore } from "pinia";
import { sourceInstance, Source, Class } from "@/types/base";
import { Ref } from "vue";
import { all_source, all_class_source } from "@/tool/api";

const val: Ref<sourceInstance[]> = ref([]);

// 此source无法直接覆盖
const sources = computed(() => {
	let res: Source[] = [];
	let keyword = sourceKeyword.value.replace(/^\s+|\s+$/g, "");
	val.value.forEach((instance) => {
		if (keyword != "") {
			if (instance.info.name.indexOf(keyword) > -1) {
				res.push(instance.info);
			}
		} else {
			res.push(instance.info);
		}
	});
	return res;
});

// 采集源搜索关键字
const sourceKeyword = ref("");
const updatesourceKeyword = (newVal: string) => {
	sourceKeyword.value = newVal;
};

// 采集类搜索关键字
const classKeyword = ref("");
const updateclassKeyword = (newVal: string) => {
	classKeyword.value = newVal;
};

// 此class无法直接覆盖
function getClasses(sourceID: number) {
	const classes = computed(() => {
		let res: Class[] = [];
		let keyword = classKeyword.value.replace(/^\s+|\s+$/g, "");

		for (let i = 0; i < val.value.length; i++) {
			const element = val.value[i];
			if (element.info.id == sourceID) {
				element.classes.forEach((class_instance) => {
					if (keyword != "") {
						if (class_instance.name.indexOf(keyword) > -1) {
							res.push(class_instance);
						}
					} else {
						res.push(class_instance);
					}
				});
				break;
			}
		}
		return res;
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
	return {
		val,
		sources,
		getClasses,
		bindSource,
		deleteMovie,
		sourceKeyword,
		updatesourceKeyword,
		classKeyword,
		updateclassKeyword,
	};
});
