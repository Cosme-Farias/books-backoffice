import { LOGIN_URL,REGISTER_URL } from "@/config/constants"
import { User } from "@/types/user"
import { api } from "./api"

interface LoginCredentials {
	email: string,
	password: string,
}

interface RegisterCredentials {
	email: string,
	password: string,
}

export interface Session {
	user: User,
	token: string
}

const register = async (credentials: RegisterCredentials) => {
	try {
		const response = await api.post<ApiResponse>(REGISTER_URL,credentials)
		return response.data
	} catch (error: any) {
		throw error
	}
}



const login = async (credentials: LoginCredentials): Promise<Session> => {
	try {
		const response = await api.post<Session>(LOGIN_URL,credentials)
		return response.data
	} catch (error) {
		throw error
	}
}

export { login,register }

