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
import router from "@/router";

enum menuType {
	panel,
	sourceManager,
	categoryManager,
	movieManager,
	source,
	sourceClass,
	sourceMovie,
}

const sider_menu: MenuOption[] = [
	{
		label: "仪表盘",
		key: "panel",
		icon: renderIcon(Home28Regular),
		type: menuType.panel,
	},
	{
		label: "采集源",
		key: "source_manager",
		icon: renderIcon(Library20Regular),
		type: menuType.sourceManager,
	},
	{
		label: "自建分类",
		key: "category_manager",
		icon: renderIcon(Class20Regular),
		type: menuType.categoryManager,
	},
	{
		label: "影片管理",
		key: "movie_manager",
		icon: renderIcon(MoviesAndTv20Regular),
		type: menuType.movieManager,
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
			type: menuType.source,
			id: element.id,
			children: [
				{
					label: "采集类",
					key: "source_class_" + element.id.toString(),
					icon: renderIcon(AlignRight24Regular),
					type: menuType.sourceClass,
					id: element.id,
				},
				{
					label: "影片",
					key: "source_movie_" + element.id.toString(),
					icon: renderIcon(BoxSearch24Regular),
					type: menuType.sourceMovie,
					id: element.id,
				},
			],
		};
		res.push(tmp);
	});
	return res;
}

function handleRoute(key: string, item: MenuOption) {
	switch (item.type) {
		case menuType.panel:
			router.push({
				name: "dashboard",
			});
			break;
		case menuType.sourceManager:
			router.push({
				name: "source",
			});
			break;
		case menuType.categoryManager:
			router.push({
				name: "category",
			});
			break;
		case menuType.movieManager:
			router.push({
				name: "movies",
			});
			break;
		case menuType.sourceClass:
			router.push({
				name: "class",
			});
			break;
		case menuType.sourceMovie:
			router.push({
				name: "movies",
			});
			break;
	}
}

export { createMenuOption, handleRoute };
