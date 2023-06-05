import type { DataTableColumns } from "naive-ui";
import { NButton, NSpace, NSwitch } from "naive-ui";
import { general_render } from "@/data/tool";
import { Movie } from "@/types/base";

// 辅助通用操作函数
const general_operate = (row: Movie, index: number) =>
	h(
		NSpace,
		{
			justify: "center",
		},
		() => [
			h(
				NButton,
				{
					type: "primary",
					strong: true,
					size: "small",
					secondary: true,
					onClick: () => {},
				},
				{ default: () => "修改" }
			),
			h(
				NButton,
				{
					type: "error",
					strong: true,
					size: "small",
					secondary: true,
					onClick: () => {},
				},
				{ default: () => "删除" }
			),
		]
	);

const columns = ref<DataTableColumns<Movie>>([
	{
		title: "ID",
		key: "id",
		align: "center",
		width: "100px",
		ellipsis: true,
	},
	{
		title: "影片名",
		key: "name",
		align: "center",
		minWidth: "200px",
		ellipsis: true,
		render(row: Movie, index: number) {
			return general_render(row.name);
		},
	},
	{
		title: "导演",
		key: "director",
		align: "center",
		width: "100px",
		ellipsis: true,
		render(row: Movie, index: number) {
			return general_render(row.director);
		},
	},
	{
		title: "主演",
		key: "actor",
		align: "center",
		width: "100px",
		render(row: Movie, index: number) {
			return general_render(row.actor);
		},
	},
	{
		title: "时长",
		key: "duration",
		align: "center",
		width: "80px",
		ellipsis: true,
		render(row: Movie, index: number) {
			return general_render(row.duration);
		},
	},
	{
		title: "影片描述",
		key: "description",
		align: "center",
		minWidth: "200px",
		ellipsis: true,
		render(row: Movie, index: number) {
			return general_render(row.description);
		},
	},
	{
		title: "封面链接",
		key: "pic",
		align: "center",
		minWidth: "200px",
		ellipsis: true,
		render(row: Movie, index: number) {
			return general_render(row.pic);
		},
	},
	{
		title: "影片直链",
		key: "url",
		align: "center",
		minWidth: "200px",
		ellipsis: true,
		render(row: Movie, index: number) {
			return general_render(row.url);
		},
	},
	{
		title: "操作",
		key: "actions",
		align: "center",
		width: "200px",
		ellipsis: true,
		render(row: Movie, index: number) {
			return general_render(general_operate(row, index));
		},
	},
]);

export { columns };