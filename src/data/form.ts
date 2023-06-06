import { Source, Category, Movie } from "@/types/base";

interface formOption {
	label: string;
	key: string;
}

const sourceOption: formOption[] = [
	{
		label: "资源库名",
		key: "name",
	},
	{
		label: "采集地址",
		key: "url",
	},
];

const categoryOption: formOption[] = [
	{
		label: "分类名",
		key: "name",
	},
];

const movieOption: formOption[] = [
	{
		label: "影片名",
		key: "name",
	},
	{
		label: "导演",
		key: "director",
	},
	{
		label: "主演",
		key: "actor",
	},
	{
		label: "时长",
		key: "duration",
	},
	{
		label: "影片描述",
		key: "description",
	},
	{
		label: "封面链接",
		key: "pic",
	},
	{
		label: "影片直链",
		key: "url",
	},
];

enum formType {
	source,
	category,
	movie,
}

function matchOption(type: formType): formOption[] {
	switch (type) {
		case formType.source:
			return sourceOption;
		case formType.category:
			return categoryOption;
		case formType.movie:
			return movieOption;
	}
}

// function matchType(type: formType) {
// 	switch (type) {
// 		case formType.source:
// 			return Source;
// 		case formType.category:
// 			return Category;
// 		case formType.movie:
// 			return Movie;
// 	}
// }

export { sourceOption, categoryOption, movieOption, formType, matchOption };
