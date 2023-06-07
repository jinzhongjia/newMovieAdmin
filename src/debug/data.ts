import { useSourceStore } from "@/store/source";
import { useMovieStore } from "@/store/movies";
import { useCategoryStore } from "@/store/category";
import { Class } from "@/types/base";
import { randomNum } from "@/debug/tool";

const sourceStore = useSourceStore();
const movieStore = useMovieStore();
const categoryStore = useCategoryStore();

(() => {
	// 伪造source数据
	for (let index = 0; index < 20; index++) {
		sourceStore.val.push({
			info: {
				id: index + 1,
				name: "采集源" + (index + 1).toString(),
				url: "测试链接" + (index + 1).toString(),
				progress: randomNum(0, 20) < 10 ? false : true,
				able: randomNum(0, 20) < 10 ? false : true,
			},
			classes: (() => {
				let res: Class[] = [];
				for (let index = 0; index < 20; index++) {
					res.push({
						id: index + 1,
						name: "测试分类" + (index + 1).toString(),
						isGet: randomNum(0, 20) < 10 ? true : false,
						categoryId: index + 1,
					});
				}
				return res;
			})(),
		});
	}

	// 伪造影片数据
	for (let index = 0; index < 40; index++) {
		movieStore.val.push({
			id: index + 1,
			name: "测试影片" + (index + 1).toString(),
			director: "导演" + (index + 1).toString(),
			actor: "主演" + (index + 1).toString(),
			duration: randomNum(70, 130).toString() + "分钟",
			description: "描述" + (index + 1).toString(),
			pic: "http://图片链接" + (index + 1).toString() + ".com",
			url: "http://影片直链" + (index + 1).toString() + ".com",
		});
	}

	// 伪造category
	for (let index = 0; index < 20; index++) {
		categoryStore.val.push({
			id: index + 1,
			name: "测试分类" + (index + 1).toString(),
			classNum: randomNum(0, 20),
			movieNum: randomNum(100, 6000),
		});
	}
})();
