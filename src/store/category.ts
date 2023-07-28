import { defineStore } from "pinia";
import { Category } from "@/types/base";
import { Ref } from "vue";
import { all_category } from "@/tool/api";

const val: Ref<Category[]> = ref([]);

const categories = computed(() => {
	let res: Category[] = [];
	let keyword = categoryKeyword.value.replace(/^\s+|\s+$/g, "");
	val.value.forEach((instance) => {
		if (keyword != "") {
			if (instance.name.indexOf(keyword) > -1) {
				res.push(instance);
			}
		} else {
			res.push(instance);
		}
	});
	return res;
});

// 自建分类搜索关键字
const categoryKeyword = ref("");
const updatecategoryKeyword = (newVal: string) => {
	categoryKeyword.value = newVal;
};

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

const deleteCategory = (id: number) => {
	for (let index = 0; index < val.value.length; index++) {
		const element = val.value[index];
		if (element.id == id) {
			val.value.splice(index, 1);
			return;
		}
	}
};

export const useCategoryStore = defineStore("category", () => {
	return {
		val,
		categories,
		bindCategory,
		deleteCategory,
		categoryKeyword,
		updatecategoryKeyword,
	};
});
