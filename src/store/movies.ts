import { defineStore } from "pinia";
import { Movie } from "@/types/base";
import { Ref } from "vue";
import {
	content_list,
	list_content_source,
	search_content,
	search_content_source,
} from "@/tool/api";
import { createPage } from "@/data/tool";
import { pageNumber } from "@/tool/config";

const val: Ref<Movie[]> = ref([]);

/**
 * 清空movies
 */
const clear = () => {
	val.value = [];
};

const pageRef = createPage(1, 1, () => {});

const movieKeyword = ref("");
const updatemovieKeyword = (newVal: string) => {
	movieKeyword.value = newVal;
};

const handleMovies = (data: any) => {
	clear();
	const movies = data.movies;
	const pgCount = data.pgCount;
	pageRef.value.pageCount = pgCount;
	movies.forEach((movie: any) => {
		val.value.push({
			id: movie.id,
			name: movie.name,
			director: movie.director,
			actor: movie.actor,
			duration: movie.duration,
			description: movie.description,
			pic: movie.pic,
			url: movie.url,
		});
	});
};

const bindMovies = (page: number, count: number) => {
	content_list(page, count, (_: number, data: any) => {
		handleMovies(data);
	});
};

const bindSearchMovies = (page: number, count: number, keyword: string) => {
	search_content(keyword, page, count, (_: number, data: any) => {
		handleMovies(data);
	});
};

const bindSourceMovies = (sourceId: number, page: number, count: number) => {
	list_content_source(sourceId, page, count, (_: number, data: any) => {
		handleMovies(data);
	});
};

const bindSearchSourceMovies = (
	sourceId: number,
	page: number,
	count: number,
	keyword: string
) => {
	search_content_source(
		sourceId,
		keyword,
		page,
		count,
		(_: number, data: any) => {
			handleMovies(data);
		}
	);
};

const bind = (name: string, page: number, id: number, keyword: string) => {
	if (name == "movies") {
		if (keyword == "") {
			bindMovies(page, pageNumber);
			// 覆盖fresh
			refresh = () => {
				bindMovies(page, pageNumber);
			};
		} else {
			bindSearchMovies(page, pageNumber, keyword);
			// 覆盖fresh
			refresh = () => {
				bindSearchMovies(page, pageNumber, keyword);
			};
		}
	} else if (name == "source-movies") {
		if (keyword == "") {
			bindSourceMovies(id, page, pageNumber);
			// 覆盖fresh
			refresh = () => {
				bindSourceMovies(id, page, pageNumber);
			};
		} else {
			console.log("执行一次", id, page);
			bindSearchSourceMovies(id, page, pageNumber, keyword);
			// 覆盖fresh
			refresh = () => {
				bindSearchSourceMovies(id, page, pageNumber, keyword);
			};
		}
	}
};

let refresh = () => {};

export const useMovieStore = defineStore("movie", () => {
	return {
		val,
		pageRef,
		clear,
		bindMovies,
		bindSourceMovies,
		refresh,
		movieKeyword,
		updatemovieKeyword,
		bindSearchMovies,
		bindSearchSourceMovies,
		bind,
	};
});
