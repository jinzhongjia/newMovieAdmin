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

export type { Source, Category, Movie, Class };
