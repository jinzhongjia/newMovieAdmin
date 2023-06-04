import type { DataTableColumns } from "naive-ui";
import { NButton, NSpace, NSwitch, NScrollbar } from "naive-ui";
import { Source } from "@/types/base";
import { VNode } from "vue";

// 辅助通用渲染函数
const general_render = (content: string | VNode) =>
	h(
		NScrollbar,
		{
			xScrollable: true,
		},
		() =>
			h(
				"div",
				{
					style: "white-space: nowrap",
				},
				content
			)
	);

// 辅助通用操作函数
const general_operate = (row: Source, index: number) =>
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
					type: "info",
					strong: true,
					size: "small",
					secondary: true,
					onClick: () => {},
				},
				{ default: () => "重新采集" }
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

const columns = ref<DataTableColumns<Source>>([
	{
		title: "ID",
		key: "id",
		align: "center",
		width: "100px",
		ellipsis: true,
	},
	{
		title: "资源库名",
		key: "name",
		align: "center",
		width: "150px",
		ellipsis: true,
		render(row: Source, index: number) {
			return general_render(row.name);
		},
	},
	{
		title: "资源库地址",
		key: "url",
		align: "center",
		ellipsis: true,
		render(row: Source, index: number) {
			return general_render(row.url);
		},
	},
	{
		title: "采集进度",
		key: "progress",
		align: "center",
		width: "100px",
		render(row: Source, index: number) {
			return h("div", row.progress ? "已完成" : "未完成");
		},
	},
	{
		title: "采集情况",
		key: "able",
		align: "center",
		width: "100px",
		render(row: Source, index: number) {
			return h(NSwitch, {
				value: row.able,
				onUpdateValue: (value: boolean) => {
					// TODO: 做相关的able处理
					row.able = !row.able;
				},
			});
		},
	},
	{
		title: "操作",
		key: "actions",
		align: "center",
		width: "250px",
		render(row: Source, index: number) {
			return general_render(general_operate(row, index));
		},
	},
]);

export { columns };
