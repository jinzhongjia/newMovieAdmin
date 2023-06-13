import type { DataTableColumns } from "naive-ui";
import { NButton, NSpace } from "naive-ui";
import { general_render } from "@/data/tool";
import { Category, cloneCategory } from "@/types/base";
import { useStateStore } from "@/store";

const stateStore = useStateStore();

const categoryModal = computed(() => stateStore.categoryModal);

// 辅助通用操作函数
const general_operate = (row: Category, index: number) =>
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
					onClick: () => {
						categoryModal.value.data = cloneCategory(row);
						categoryModal.value.origin = row;
						categoryModal.value.new = false;
						categoryModal.value.show = true;
					},
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
					disabled: row.main,
					onClick: () => {},
				},
				{ default: () => "设为主分类" }
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

const columns = ref<DataTableColumns<Category>>([
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
		minWidth: "200px",
		ellipsis: true,
		render: (row: Category, index: number) => general_render(row.name),
	},
	{
		title: "采集类数",
		key: "classNum",
		align: "center",
		width: "100px",
	},
	{
		title: "影片数",
		key: "movieNum",
		align: "center",
		width: "100px",
	},
	{
		title: "操作",
		key: "actions",
		align: "center",
		width: "300px",
		render: (row: Category, index: number) =>
			general_render(general_operate(row, index)),
	},
]);

export { columns };
