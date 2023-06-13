import { defineStore } from "pinia";
import { Category } from "@/types/base";
import { Ref } from "vue";
import { all_category } from "@/tool/api";

const val: Ref<Category[]> = ref([]);

const bindCategory = () => {
	all_category((_: number, data: any) => {
		val.value = [];
		data.forEach((ele: any) => {
			val.value.push({
				id: ele.id,
				name: ele.name,
				classNum: ele.classNum == undefined ? 0 : ele.classNum,
				movieNum: ele.movieNum == undefined ? 0 : ele.movieNum,
				main: ele.main == undefined ? false : true,
			});
		});
	});
};

export const useCategoryStore = defineStore("category", () => {
	return { val, bindCategory };
});
