import { fetchUsers } from "@/services/models/users"
import { SearchUsersQuery,User } from "@/types/user"
import { handleError } from "@/utils/errorHandler"
import { useEffect,useState } from "react"



const defaultSearchUsersQuery: SearchUsersQuery = {
	page: 1,
	elementsPerPage: 1,
	filters: { search: "",role: "" }
}


const useUsers = () => {
	const [elements,setElements] = useState<User[]>([])
	const [count,setCount] = useState(0)
	const [loading,setLoading] = useState(false)
	const [error,setError] = useState("")

	const refetch = async (query: SearchUsersQuery = defaultSearchUsersQuery) => {
		try {
			setLoading(true)

			const { count,elements } = await fetchUsers(query)

			setElements(elements)
			setCount(count)
		} catch (error) {
			const message = handleError(error)
			setError(message)
		} finally {
			setTimeout(() => {
				setError("")
			},3000)
			setLoading(false)
		}
	}

	useEffect(() => {
		refetch()
	},[])

	return { elements,count,loading,error,refetch }
}

export { useUsers }

