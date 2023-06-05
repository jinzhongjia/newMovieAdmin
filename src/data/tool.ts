import { NScrollbar } from "naive-ui";
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

export { general_render };
