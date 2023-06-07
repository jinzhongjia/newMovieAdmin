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
import { useSourceStore, useStateStore } from "@/store";

const sourceStore = useSourceStore();
const stateStore = useStateStore();

const value = computed({
	get: () => stateStore.drawer.val,
	set: (newval: string) => {
		stateStore.drawer.val = newval;
	},
});

const openKeys = computed({
	get: () => stateStore.drawer.openKeys,
	set: (newval: string[]) => {
		stateStore.drawer.openKeys = newval;
	},
});

const menuInstances = computed(() => {
	return createMenuOption(sourceStore.sources);
});

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
		key: "dashboard",
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
				params: {
					page: 1,
				},
			});
			break;
		case menuType.categoryManager:
			router.push({
				name: "category",
				params: {
					page: 1,
				},
			});
			break;
		case menuType.movieManager:
			router.push({
				name: "movies",
				params: {
					page: 1,
				},
			});
			break;
		case menuType.sourceClass:
			router.push({
				name: "source-class",
				params: {
					id: item.id as number,
					page: 1,
				},
			});
			break;
		case menuType.sourceMovie:
			router.push({
				name: "source-movies",
				params: {
					id: item.id as number,
					page: 1,
				},
			});
			break;
	}
}

function update(key: string, item: MenuOption) {
	value.value = item.key as string;
	handleRoute(key, item);
	stateStore.hideDrawer();
}

function menuExpanded(keys: string[]) {
	if (keys.length) {
		openKeys.value = [keys[keys.length - 1]];
	} else {
		openKeys.value = [];
	}
}

const bindRoute = (name: any, params: any) => {
	console.log("绑定一次");
	switch (name) {
		case "source-movies":
			value.value = "source_movie_" + (params.id as string);
			openKeys.value = ["source_" + (params.id as string)];
			break;
		case "source-class":
			value.value = "source_class_" + (params.id as string);
			openKeys.value = ["source_" + (params.id as string)];
			break;
		case "dashboard":
			value.value = "dashboard";
			break;
		case "source":
			value.value = "source_manager";
			break;
		case "category":
			value.value = "category_manager";
			break;
		case "movies":
			value.value = "movie_manager";
			break;
	}
};

export {
	createMenuOption,
	handleRoute,
	update,
	menuExpanded,
	bindRoute,
	value,
	openKeys,
	menuInstances,
};
