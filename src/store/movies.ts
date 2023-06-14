import { defineStore } from "pinia";
import { Movie } from "@/types/base";
import { Ref } from "vue";
import { content_list, list_content_source } from "@/tool/api";
import { createPage } from "@/data/tool";

const val: Ref<Movie[]> = ref([]);

/**
 * 清空movies
 */
const clear = () => {
	val.value = [];
};

const pageRef = createPage(1, 1, () => {});

const handleMovies = (movies: any) => {
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
		clear();
		const movies = data.movies;
		const pgCount = data.pgCount;
		pageRef.value.pageCount = pgCount;

		handleMovies(movies);
	});
};

const bindSourceMovies = (sourceId: number, page: number, count: number) => {
	list_content_source(sourceId, page, count, (_: number, data: any) => {
		clear();
		const movies = data.movies;
		const pgCount = data.pgCount;
		pageRef.value.pageCount = pgCount;

		handleMovies(movies);
	});
};

const refresh = () => {};

export const useMovieStore = defineStore("movie", () => {
	return { val, pageRef, clear, bindMovies, bindSourceMovies, refresh };
});
