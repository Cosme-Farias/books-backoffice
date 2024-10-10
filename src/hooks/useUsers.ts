import { fetchUsers } from "@/services/models/users"
import { User } from "@/types/user"
import { handleError } from "@/utils/errorHandler"
import { useEffect,useState } from "react"

const useUsers = () => {
	const [elements,setElements] = useState<User[]>([])
	const [count,setCount] = useState(0)
	const [loading,setLoading] = useState(false)
	const [error,setError] = useState("")

	const refetch = async () => {
		try {
			setLoading(true)

			const { count,elements } = await fetchUsers()

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

