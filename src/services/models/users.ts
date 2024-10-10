// import { BOOKS_URL } from "@/config/constants";
// import { Book } from "@/interfaces/book.interface";
// import { api } from "../api";

import { USERS_URL } from "@/config/constants"
import { NewUser,User } from "@/types/user"
import { api } from "../api"

interface FetchUsersResponse {
	elements: User[]
	count: number
}

const fetchUsers = async (): Promise<FetchUsersResponse> => {
	try {
		const response = await api.get<FetchUsersResponse>(USERS_URL)
		console.log(response)
		return response.data
	} catch (error) {
		throw error
	}
}

const createUser = async (newUser: NewUser): Promise<ApiResponse> => {
	try {
		const response = await api.post<ApiResponse>(USERS_URL,newUser)
		return response.data
	} catch (error) {
		throw error
	}
}

// const updateBook = async (book: Book): Promise<ApiResponse> => {
// 	try {
// 		const response = await api.patch<ApiResponse>(`${BOOKS_URL}/${book._id}`,book)
// 		return response.data
// 	} catch (error) {
// 		throw error
// 	}
// }

// const deleteBook = async (book: Book): Promise<ApiResponse> => {
// 	try {
// 		const response = await api.delete<ApiResponse>(`${BOOKS_URL}/${book._id}`)
// 		return response.data
// 	} catch (error) {
// 		throw error
// 	}
// }
export { createUser,fetchUsers }

