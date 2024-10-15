import { BOOKS_URL } from "@/config/constants";
import { Book } from "@/interfaces/book.interface";
import { api } from "../api";

interface FetchBooksResponse {
	elements: Book[]
	count: number
}

const fetchBooks = async (): Promise<FetchBooksResponse> => {
	try {
		const response = await api.get<FetchBooksResponse>(BOOKS_URL)
		console.log(response)
		return response.data
	} catch (error) {
		throw error
	}
}

const fetchBookById = async (id: string): Promise<Book> => {
	try {
		const response = await api.get<Book>(`${BOOKS_URL}/${id}`)
		console.log(response)
		return response.data
	} catch (error) {
		throw error
	}
}


const createBook = async (book: Book): Promise<ApiResponse> => {
	try {
		const response = await api.post<ApiResponse>(BOOKS_URL,book)
		return response.data
	} catch (error) {
		throw error
	}
}

const updateBook = async (book: Book): Promise<ApiResponse> => {
	try {
		const response = await api.patch<ApiResponse>(`${BOOKS_URL}/${book._id}`,book)
		return response.data
	} catch (error) {
		throw error
	}
}

const deleteBook = async (book: Book): Promise<ApiResponse> => {
	try {
		const response = await api.delete<ApiResponse>(`${BOOKS_URL}/${book._id}`)
		return response.data
	} catch (error) {
		throw error
	}
}
export { createBook,deleteBook,fetchBookById,fetchBooks,updateBook };

