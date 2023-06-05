import type { DataTableColumns, SelectOption } from "naive-ui";
import { NSelect, NSwitch } from "naive-ui";
import { general_render } from "@/data/tool";
import { Class } from "@/types/base";

const category_debug: SelectOption[] = (() => {
	let res: SelectOption[] = [];
	res.push({
		label: "未分类",
		value: 0,
	});
	for (let index = 0; index < 20; index++) {
		res.push({
			label: "分类" + (index + 1).toString(),
			value: index + 1,
		});
	}
	return res;
})();

const render_switch = (row: Class, index: number) =>
	h(NSwitch, {
		value: row.isGet,
		onUpdateValue: (value: boolean) => {
			// TODO: 做相关的able处理
			row.isGet = !row.isGet;
		},
	});

const render_select = (row: Class, index: number) =>
	h(NSelect, {
		value: row.categoryId,
		options: category_debug,
	});

const columns = ref<DataTableColumns<Class>>([
	{
		title: "ID",
		key: "id",
		align: "center",
		width: "100px",
		ellipsis: true,
	},
	{
		title: "名称",
		key: "name",
		align: "center",
		minWidth: "200px",
		ellipsis: true,
		render: (row: Class, index: number) => general_render(row.name),
	},

	{
		title: "是否采集",
		key: "isGet",
		align: "center",
		width: "100px",
		render: render_switch,
	},
	{
		title: "所属分类",
		key: "categoryId",
		align: "center",
		width: "200px",
		render: render_select,
	},
]);

export { columns };
