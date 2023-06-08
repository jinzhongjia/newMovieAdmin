import { NScrollbar } from "naive-ui";
import { Ref, VNode } from "vue";

interface pageData {
	page: number;
	pageCount: number;
	update: (page: number) => void;
}

const createPage = (
	page: number,
	pageCount: number,
	update: (page: number) => void
) => {
	const res: Ref<pageData> = ref({
		page,
		pageCount,
		update,
	});
	return res;
};

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

export { general_render, createPage };
