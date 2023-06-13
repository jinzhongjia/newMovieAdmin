import { useCategoryStore } from "@/store/category";
import { useClassStore } from "@/store/class";
import { useMovieStore } from "@/store/movies";
import { useSourceStore } from "@/store/source";
import { useStateStore } from "@/store/state";
import { get_version, all_category } from "@/tool/api";

const sourceStore = useSourceStore();
const categoryStore = useCategoryStore();

// 初始化函数，用于初始化store
const init = () => {
	// 获取当前的版本号，同时进行是否登陆的验证
	get_version(() => {
		console.log("获取版本号成功！");
		sourceStore.bindSource();
		categoryStore.bindCategory();
	});
};

export {
	init,
	useCategoryStore,
	useClassStore,
	useMovieStore,
	useSourceStore,
	useStateStore,
};
