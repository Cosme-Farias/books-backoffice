export interface NewUser {
	firstName: string,
	lastName: string,
	email: string,
	role: Role,
	_id?: string
	createdAt?: string
}

export interface User {
	firstName: string,
	lastName: string,
	email: string,
	lastLogin: Date,
	role: Role,
	_id?: string
	createdAt?: string
}

export enum UserTypes {
	ADMIN = "Admin",
	PANEL = "Panel"
}
export type Role = UserTypes

export interface SearchUsersQuery {
	page: number
	elementsPerPage: number
	filters: { search: string,role: Role | "" }
}
