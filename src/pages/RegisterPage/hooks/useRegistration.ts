// import { api,AUTH } from "@/config/constants"
// import { useState } from "react"

// interface RegisterCredentials {
// 	email: string,
// 	password: string,
// }
// const useRegistration = () => {
// 	const [loading,setLoading] = useState(false)

// 	const register = async (credentials: RegisterCredentials) => {
// 		try {
// 			setLoading(true)
// 			const response = await api.post<ApiResponse>(`${AUTH}/register`,credentials)
// 			return response.data
// 		} catch (error: any) {
// 			throw error
// 		} finally {
// 			setLoading(false)
// 		}
// 	}

// 	return { register,loading }
// }

// export { useRegistration }

