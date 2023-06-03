import {
	Home28Regular,
	Library20Regular,
	Class20Regular,
	MoviesAndTv20Regular,
	Classification24Regular,
	AlignRight24Regular,
	BoxSearch24Regular,
} from "@vicons/fluent";
import { MenuOption, NIcon } from "naive-ui";
import { Component } from "vue";

import { Source } from "@/types/base";

const sider_menu: MenuOption[] = [
	{
		label: "仪表盘",
		key: "panel",
		icon: renderIcon(Home28Regular),
	},
	{
		label: "采集源",
		key: "key",
		icon: renderIcon(Library20Regular),
	},
	{
		label: "自建分类",
		key: "category",
		icon: renderIcon(Class20Regular),
	},
	{
		label: "影片管理",
		key: "movie_manager",
		icon: renderIcon(MoviesAndTv20Regular),
	},
];

function renderIcon(icon: Component) {
	return () => h(NIcon, null, { default: () => h(icon) });
}

function createMenuOption(arr: Array<Source>): MenuOption[] {
	let res: MenuOption[] = [];
	sider_menu.forEach((element, _) => {
		res.push(element);
	});
	arr.forEach((element, _) => {
		let tmp: MenuOption = {
			label: element.name,
			key: "source_" + element.id.toString(),
			icon: renderIcon(Classification24Regular),
			id: element.id,
			children: [
				{
					label: "采集类",
					key: "source_class_" + element.id.toString(),
					icon: renderIcon(AlignRight24Regular),
					id: element.id,
				},
				{
					label: "影片",
					key: "source_movie_" + element.id.toString(),
					icon: renderIcon(BoxSearch24Regular),
					id: element.id,
				},
			],
		};
		res.push(tmp);
	});
	return res;
}

export { createMenuOption };
