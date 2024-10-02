export interface Book {
	title: string;
	author: string;
	category: string
	synopsis: string;
	publicationDate: string
	isbn: string;
	pages: number | ""
	_id?: string
}