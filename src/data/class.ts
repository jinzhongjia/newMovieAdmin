import type { DataTableColumns, SelectOption } from "naive-ui";
import { NSelect, NSwitch } from "naive-ui";
import { general_render } from "@/data/tool";
import { Class } from "@/types/base";
import { useCategoryStore } from "@/store";
import { change_get_class, distribute_class_category } from "@/tool/api";

const categoryStore = useCategoryStore();
const categories = computed(() => categoryStore.val);

const categoryRef = computed(() => {
	let res: SelectOption[] = [];
	res.push({
		label: "未分类",
		value: 0,
	});
	for (let index = 0; index < categories.value.length; index++) {
		const element = categories.value[index];
		res.push({
			label: element.name,
			value: element.id,
		});
	}
	return res;
});

const render_switch = (row: Class, index: number) =>
	h(NSwitch, {
		value: row.isGet,
		onUpdateValue: (value: boolean) => {
			change_get_class(row.id, !row.isGet, () => {
				row.isGet = !row.isGet;
			});
		},
	});

const render_select = (row: Class, index: number) =>
	h(NSelect, {
		value: row.categoryId,
		options: categoryRef.value,
		onUpdateValue: (categoryId: number, option: SelectOption) => {
			distribute_class_category(
				row.id,
				categoryId,
				(_: number, data: any) => {
					row.categoryId = categoryId;
				}
			);
		},
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
