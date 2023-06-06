import { defineStore } from "pinia";
import { Movie } from "@/types/base";
import { Ref } from "vue";

export const useMovieStore = defineStore("movie", () => {
	const val: Ref<Movie[]> = ref([]);

	/**
	 * 清空movies
	 */
	const clear = () => {
		val.value = [];
	};

	return { val, clear };
});
