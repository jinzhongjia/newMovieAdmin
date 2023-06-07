interface Source {
	id: number;
	name: string;
	url: string;
	progress: boolean;
	able: boolean;
}

interface Category {
	id: number;
	name: string;
	classNum: number;
	movieNum: number;
}

interface Movie {
	id: number;
	name: string;
	director: string;
	actor: string;
	duration: string;
	description: string;
	pic: string;
	url: string;
}

interface Class {
	id: number;
	name: string;
	isGet: boolean;
	categoryId: number;
}

interface sourceInstance {
	info: Source;
	classes: Class[];
	page: number;
}

const cloneSource = (val: Source) =>
	({
		id: val.id,
		name: val.name,
		url: val.url,
		progress: val.progress,
		able: val.able,
	} as Source);

const cloneCategory = (val: Category) =>
	({
		id: val.id,
		name: val.name,
		classNum: val.classNum,
		movieNum: val.movieNum,
	} as Category);

const cloneMovie = (val: Movie) =>
	({
		id: val.id,
		name: val.name,
		director: val.director,
		actor: val.actor,
		duration: val.duration,
		description: val.description,
		pic: val.pic,
		url: val.url,
	} as Movie);

const cloneClass = (val: Class) =>
	({
		id: val.id,
		name: val.name,
		isGet: val.isGet,
		categoryId: val.categoryId,
	} as Class);

export type { Source, Category, Movie, Class, sourceInstance };
export { cloneSource, cloneCategory, cloneMovie, cloneClass };
