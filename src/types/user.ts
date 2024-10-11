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

type Role = "Admin" | "Panel"